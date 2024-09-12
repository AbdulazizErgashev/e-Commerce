import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsList } from "react-icons/bs";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-[#227B94] text-white relative">
      <main className="flex items-center justify-between w-full py-6 px-10">
        <Link to="/" className="text-xl font-semibold">
          onStore
        </Link>
        <ul className="activeLink hidden lg:flex items-center gap-x-16 uppercase font-semibold text-sm">
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
        <Link
          to="/login"
          className="hidden lg:block border-2 py-1 px-3 rounded-lg"
        >
          Login
        </Link>

        <BsList
          className="text-lg lg:hidden cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        />

        {menuOpen && (
          <div className="absolute top-16 right-0 bg-[#227B94] w-64 text-white py-5 px-5 z-10">
            <ul className="flex flex-col gap-y-6 uppercase font-semibold text-sm">
              <li>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
                  Cart
                </NavLink>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block text-center py-2 border-2 rounded-lg hover:text-[#43a3bb]"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
