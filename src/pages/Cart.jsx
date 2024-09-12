import React from "react";

export default function Cart({ cartItems }) {
  return (
    <div className="h-screen w-full px-10 py-5 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-600">Your Cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="size-24 object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  Color: {item.selectedColor}
                </p>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
                <p className="text-sm text-gray-600">
                  Price: {item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
