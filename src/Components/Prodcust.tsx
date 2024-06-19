import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryDropdown from "./CategoryDropdown";

export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
}


interface ProductsProps {
  addToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ addToCart }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

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
    const uniqueCategories = data
      .map((product) => product.category.toLowerCase())
      .filter((value, index, self) => self.indexOf(value) === index);
    return uniqueCategories;
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
