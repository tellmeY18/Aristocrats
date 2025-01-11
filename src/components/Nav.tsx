"use client";
import Link from "next/link";
import { useState } from "react";
import { AristocratsIcon } from "./icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <AristocratsIcon />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-highlight hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-highlight hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-highlight hover:underline">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="pt-2 pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-highlight hover:bg-gray-100 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-highlight hover:bg-gray-100 rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-highlight hover:bg-gray-100 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
