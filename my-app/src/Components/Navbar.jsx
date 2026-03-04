import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-red-500 hover:text-red-400 transition duration-300"
          >
            🎬 Free Movie
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg">
            <Link to="/" className="hover:text-red-400 transition duration-300">
              Home
            </Link>
            <Link
              to="/movies"
              className="hover:text-red-400 transition duration-300"
            >
              Movies
            </Link>
            <Link
              to="/about"
              className="hover:text-red-400 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-400 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-3 text-lg">
          <Link
            to="/"
            className="block hover:text-red-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="block hover:text-red-400"
            onClick={() => setIsOpen(false)}
          >
            Movies
          </Link>
          <Link
            to="/about"
            className="block hover:text-red-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block hover:text-red-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
