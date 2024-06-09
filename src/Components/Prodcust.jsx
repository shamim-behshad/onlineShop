// Components/Products.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const Products = ({ addToCart }) => {
  const [loading, setLoading] = useState(false);

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

  
  return (
    <div className="px-4">
      <div className="flex">
        {/* <SearchBar/> */}
        {/* <CategoryDropdown/> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {loading && (
          <div className="col-span-full text-center">
            <h1>Loading...</h1>
          </div>
        )}
        {/* product */}
      </div>
    </div>
  );
};

export default Products;
