import React from "react";

const Cart = () => {

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Shopping Cart</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="border p-2">#</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Total Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr className="bg-white">
              <td className="border p-2"></td>
              <td className="border p-2"></td>
              <td className="border p-2"></td>
              <td className="border p-2">
                <div className="flex items-center justify-center">
                  <button
                    className="bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full"
                  >
                    -
                  </button>
                  <span className="mx-2"></span>
                  <button
                    className="bg-blue-500 text-white w-5 h-5 flex items-center justify-center rounded-full"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="border p-2">$4</td>
              <td className="border p-2"></td>
              <td className="border p-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-right p-2">
              Total:
            </td>
            <td className="border p-2">$5</td>
            <td className="border p-2"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
