import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const getTotalPrice = useMemo(() => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return <p className="font-bold text-center mt-4">Your cart is empty</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Shopping Cart</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-300 text-gray-700 no-border">
            <th className="p-2"></th>
            <th className="p-2">Title</th>
            <th className="p-2 hidden sm:table-cell">Description</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Price</th>
            <th className="p-2">Total Price</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.title}</td>
              <td className="border p-2 hidden sm:table-cell">{item.description}</td>
              <td className="border p-2">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-blue-500 text-white w-5 h-5 flex items-center justify-center rounded-full"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="border p-2">${item.price.toFixed(2)}</td>
              <td className="border p-2">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
              <td className="border p-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-b border-l">
            <td colSpan="2" className="text-left p-2 sm:col-span-5 border-b">
              Total
            </td>
            <td border-b></td>
            <td className="border-b"></td>
            <td className="border-b"></td>
            <td   className="border p-2">${getTotalPrice}</td>
            <td className="border p-2"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default React.memo(Cart);
