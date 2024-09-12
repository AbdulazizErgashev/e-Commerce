import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (item) =>
          item.id === newItem.id && item.selectedColor === newItem.selectedColor
      );

      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === newItem.id && item.selectedColor === newItem.selectedColor
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prevCartItems, newItem];
      }
    });
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}
