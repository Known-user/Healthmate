import React from "react";

const Summary = () => {
  return (
    <div className="bg-[#e5f3ff] pt-24 min-h-screen">

      <div className="container mx-auto p-6 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p>Your order is ready to be placed!</p>
          <div className="mt-4">
            <p>Items:</p>
            <ul>
              <li>Product 1</li>
              <li>Product 2</li>
            </ul>
          </div>
          <div className="mt-4">
            <p>Total: $99.99</p>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button
              className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg"
              onClick={() => {}}
            >
              Back to Cart
            </button>
            <button
              className="bg-pink-600 text-white py-2 px-6 rounded-lg"
              onClick={() => {}}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
