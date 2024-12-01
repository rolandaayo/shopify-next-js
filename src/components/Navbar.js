'use client'
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex flex-col md:flex-row justify-evenly items-center bg-white/90 backdrop-blur-sm text-black py-7 text-2xl font-bold transition-all duration-300 ease-in-out">
        <div className="mb-4 md:mb-0 flex justify-between items-center w-full md:w-auto px-4">
          <div className="hover:scale-105 transition-transform duration-200">
            <span>Shopify</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none transition-transform duration-200 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div className={`w-full md:w-auto md:block transition-all duration-300 ease-in-out transform origin-top ${isOpen ? 'max-h-96 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'} md:opacity-100 md:max-h-full md:scale-y-100 overflow-hidden`}>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4">
            <li className="w-full md:w-auto text-center">
              <Link href="/" className="block py-2 md:py-0 hover:text-gray-600 transition-all duration-300 ease-in-out hover:scale-105 transform">
                Home
              </Link>
            </li>
            <li className="w-full md:w-auto text-center">
              <Link href="/about" className="block py-2 md:py-0 hover:text-gray-600 transition-all duration-300 ease-in-out hover:scale-105 transform">
                About
              </Link>
            </li>
            <li className="w-full md:w-auto text-center">
              <a href="#" className="block py-2 md:py-0 hover:text-gray-600 transition-all duration-300 ease-in-out hover:scale-105 transform">
                Projects
              </a>
            </li>
            <li className="w-full md:w-auto text-center">
              <a href="#" className="block py-2 md:py-0 hover:text-gray-600 transition-all duration-300 ease-in-out hover:scale-105 transform">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}