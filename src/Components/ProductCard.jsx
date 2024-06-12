import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 relative">
      <div className="flex flex-col h-full">
        <img
          src={product.image}
          alt="#"
          className="mx-auto mb-4 rounded-lg max-h-80 object-cover"
        />
        <div className="flex-1">
          <h6>{product.category}</h6>
          <h6 className="text-lg font-semibold">{product.title}</h6>
          <p className="text-gray-700 mt-2">{`Description: ${product.description}`}</p>
        </div>
        <div className="mt-auto flex justify-between">
          <h6 className="font-bold text-black py-3">{`Price: ${product.price}`}$</h6>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
