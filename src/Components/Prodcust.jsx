// Components/Products.jsx
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryDropdown from "./CategoryDropdown";

const Products = ({ addToCart }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const filteredData = useMemo(() => {
    return data.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "" ||
          product.category.toLowerCase() === selectedCategory.toLowerCase())
    );
  }, [data, searchQuery, selectedCategory]);

  const categories = useMemo(() => {
    return [...new Set(data.map((product) => product.category.toLowerCase()))];
  }, [data]);

  return (
    <div className="px-4">
      <div className="flex">
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <CategoryDropdown 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {loading && (
          <div className="col-span-full text-center">
            <h1>Loading...</h1>
          </div>
        )}
        {filteredData.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Products);

