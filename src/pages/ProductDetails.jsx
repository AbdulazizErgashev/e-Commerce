import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Img1 from "../img/1.png";
import Img2 from "../img/2.png";
import Img3 from "../img/3.png";
import Img4 from "../img/4.png";
import Img5 from "../img/5.png";
import Img6 from "../img/6.png";
import Img7 from "../img/7.png";
import Img8 from "../img/8.png";

const productsData = [
  {
    id: 1,
    title: "Product 1",
    image: Img1,
    price: 12.3,
    colors: ["red", "blue", "green"],
  },
  {
    id: 2,
    title: "Product 2",
    image: Img2,
    price: 14.5,
    colors: ["black", "white"],
  },
  {
    id: 3,
    title: "Product 3",
    image: Img3,
    price: 9.99,
    colors: ["yellow", "blue"],
  },
  {
    id: 4,
    title: "Product 4",
    image: Img4,
    price: 25.0,
    colors: ["red", "black"],
  },
  {
    id: 5,
    title: "Product 5",
    image: Img5,
    price: 7.75,
    colors: ["green", "white"],
  },
  {
    id: 6,
    title: "Product 6",
    image: Img6,
    price: 19.99,
    colors: ["purple", "black"],
  },
  {
    id: 7,
    title: "Product 7",
    image: Img7,
    price: 18.0,
    colors: ["blue", "orange"],
  },
  {
    id: 8,
    title: "Product 8",
    image: Img8,
    price: 22.5,
    colors: ["gray", "yellow"],
  },
];

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id)) || {};
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, selectedColor });
    Swal.fire({
      title: "Added to Cart!",
      text: `${quantity} ${product.title}(s) in ${selectedColor} color added to cart.`,
      icon: "success",
      confirmButtonText: "View Cart",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      }
    });
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="h-screen w-full px-10 py-10 bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-1/2 h-auto object-cover"
        />
        <div className="w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {product.title}
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Price: ${product.price.toFixed(2)}
          </p>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-1">
              Select Color:
            </label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="border p-2 rounded-lg w-full"
            >
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-1">Quantity:</label>
            <div className="flex items-center">
              <button
                onClick={handleDecreaseQuantity}
                className="bg-red-500 text-white px-4 py-2 rounded-l-lg"
              >
                -
              </button>
              <span className="px-4 py-2 border-t border-b">{quantity}</span>
              <button
                onClick={handleIncreaseQuantity}
                className="bg-green-500 text-white px-4 py-2 rounded-r-lg"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
