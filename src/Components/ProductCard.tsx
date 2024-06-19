import React from "react";
import { Product } from "./Prodcust"; // Corrected import statement

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-3 relative">
      <div className="flex flex-col h-full">
        <img
          src={product.image}
          alt="#"
          className="mx-auto mb-3 rounded-lg max-h-60 object-cover"
        />
        <div className="flex-1">
          <h6>{product.category}</h6>
          <h6 className="text-lg font-semibold">{product.title}</h6>
          <p className="text-gray-700 mt-1">{`Description: ${product.description}`}</p>
        </div>
        <div className="mt-auto flex justify-between">
          <h6 className="font-bold text-black py-2">{`Price: ${product.price}$`}</h6>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-3 py-1 rounded-lg mt-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
