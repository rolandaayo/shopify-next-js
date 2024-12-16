/* eslint-disable */
'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import PaystackConfig from './PaystackConfig';
import { useRouter } from 'next/navigation';
import { useSearch } from "@/context/SearchContext";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartItems, cartCount, isCartOpen, setIsCartOpen, removeFromCart, incrementQuantity, decrementQuantity, totalPrice } = useCart();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { searchProducts, searchResults, setSearchResults } = useSearch();
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [orderCount, setOrderCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      setOrderCount(orders.length);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setShowSearchResults(false);
      return;
    }
    searchProducts(searchQuery);
    setShowSearchResults(true);
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
    if (!e.target.value.trim()) {
      setShowSearchResults(false);
      setSearchResults([]);
    }
  };

  const navItems = [
    { name: 'Home', path: '/', isLink: true },
    { name: 'Orders', path: '/orders', isLink: true },
  ];

  const onSuccess = (reference) => {
    console.log("Payment successful!", reference);
    setCartItems([]); // Clear cart
    setIsCartOpen(false); // Close cart modal
    // You might want to save the order to your database here
    router.push('/success'); // Redirect to success page
  };

  const onClose = () => {
    console.log("Payment window closed");
  };

  const scrollToProduct = (productId) => {
    if (typeof window !== 'undefined') {
      const productElement = document.getElementById(`product-${productId}`);
      if (productElement) {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
        const productPosition = productElement.getBoundingClientRect().top;
        const offsetPosition = productPosition + window.pageYOffset - navbarHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        productElement.classList.add('highlight-product');
        setTimeout(() => {
          productElement.classList.remove('highlight-product');
        }, 2000);
      }
    }
  };

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex flex-col md:flex-row justify-between items-center bg-white/90 backdrop-blur-sm text-black py-7 text-2xl font-bold transition-all duration-300 ease-in-out px-4 md:px-8">
        <div className="w-full md:w-auto flex justify-between items-center">
          <Link href="/" className="hover:scale-105 transition-transform duration-200">
            <span className="font-playfair font-bold text-3xl">Shopify</span>
          </Link>
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center hover:text-gray-600 transition-all duration-300 ease-in-out hover:scale-105 transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none transition-transform duration-200 hover:scale-110"
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
        </div>

        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.isLink ? (
                  <Link 
                    href={item.path} 
                    className="nav-link hover:text-gray-600 transition-all duration-300 ease-in-out hover:scale-105 transform relative"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {item.name === 'Orders' && orderCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {orderCount}
                      </span>
                    )}
                  </Link>
                ) : (
                  <a 
                    href={item.path} 
                    className="hover:text-gray-600 transition-all duration-300 ease-in-out hover:scale-105 transform"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInput}
                placeholder="Search products..."
                className="px-4 py-2 rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-all duration-300 text-base w-64"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-indigo-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                    onClick={() => {
                      setShowSearchResults(false);
                      setSearchQuery('');
                      scrollToProduct(product.id);
                    }}
                  >
                    <div className="relative w-12 h-12">
                      <Image
                        src={product.image}
                        alt={product.text}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{product.text}</h3>
                      <p className="text-sm text-indigo-600">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {showSearchResults && searchResults.length === 0 && searchQuery && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-4 text-center text-gray-500">
                No products found
              </div>
            )}
          </div>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center hover:text-gray-600 transition-all duration-300 ease-in-out hover:scale-105 transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full md:max-w-md h-full overflow-y-auto">
            <div className="p-4">
              {/* Cart Header */}
              <div className="flex justify-between items-center mb-4 sticky top-0 bg-white py-2">
                <h2 className="text-xl md:text-2xl font-bold font-playfair">Shopping Cart</h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 hover:bg-gray-100 rounded-full"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-gray-500 text-center">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 border-b pb-3">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.text}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm md:text-base truncate pr-8">
                          {item.text}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                          Size: {item.size}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button 
                            onClick={() => decrementQuantity(item.id, item.size)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="w-6 text-center text-sm md:text-base">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => incrementQuantity(item.id, item.size)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                          <span className="font-medium text-indigo-600 ml-auto text-sm md:text-base">
                            {item.price}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="p-1 hover:bg-gray-100 rounded-full absolute right-4"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}

                  {/* Cart Footer */}
                  <div className="border-t pt-4 mt-4 sticky bottom-0 bg-white">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm md:text-lg font-medium">Total:</span>
                      <span className="text-lg md:text-xl font-bold text-indigo-600">
                        ₦{totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <PaystackConfig 
                      onSuccess={onSuccess} 
                      onClose={onClose}
                      email={email}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}