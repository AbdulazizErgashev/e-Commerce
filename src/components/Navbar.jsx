import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-[#227B94] text-white relative">
      <main className="flex items-center justify-between w-full py-4 px-6 md:py-6 md:px-10">
        <Link to="/" className="text-lg md:text-xl font-semibold">
          onStore
        </Link>

        <ul className="activeLink hidden lg:flex items-center gap-x-8 md:gap-x-16 uppercase font-semibold text-sm">
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>

        <Link
          to="/login"
          className="hidden lg:block border-2 py-1 px-3 rounded-lg hover:bg-[#43a3bb] transition-all"
        >
          Login
        </Link>

        <BsList
          className="text-2xl lg:hidden cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        />
      </main>

      <div
        className={`fixed top-0 right-0 h-full bg-[#227B94] w-64 md:w-72 text-white py-6 px-5 z-20 transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-xl font-semibold">
            onStore
          </Link>
          <IoCloseSharp
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
            aria-label="Close menu"
          />
        </div>

        <ul className="flex flex-col gap-y-8 uppercase font-semibold text-sm">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#43a3bb] transition-colors"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#43a3bb] transition-colors"
            >
              Cart
            </NavLink>
          </li>
          <li>
            <Link
              to="/login"
              className="block text-center py-2 border-2 rounded-lg hover:bg-[#43a3bb] transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}
