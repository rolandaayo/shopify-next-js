/* eslint-disable */
"use client";
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchProducts = (query) => {
    setIsSearching(true);
    // This is a simple search implementation. You might want to make this more sophisticated
    const allProducts = [
      { id: 1, text: "Summer T-Shirt", price: "$299", image: "/images/product-1.png", sizes: ["S", "M", "L", "XL"] },
      { id: 2, text: "Casual Shirt", price: "$299", image: "/images/product-2.png", sizes: ["S", "M", "L", "XL"] },
      { id: 3, text: "Denim Jacket", price: "$299", image: "/images/product-3.png", sizes: ["S", "M", "L", "XL"] },
      { id: 4, text: "Classic Polo", price: "$299", image: "/images/product-4.png", sizes: ["S", "M", "L", "XL"] },
      { id: 5, text: "Striped Shirt", price: "$299", image: "/images/product-5.png", sizes: ["S", "M", "L", "XL"] },
      { id: 6, text: "Casual Blazer", price: "$299", image: "/images/product-6.png", sizes: ["S", "M", "L", "XL"] },
      { id: 7, text: "Formal Shirt", price: "$299", image: "/images/product-7.png", sizes: ["S", "M", "L", "XL"] },
      { id: 8, text: "Designer Tee", price: "$299", image: "/images/product-8.png", sizes: ["S", "M", "L", "XL"] },
      { id: 9, text: "Casual Sweater", price: "$299", image: "/images/product-9.png", sizes: ["S", "M", "L", "XL"] },
    ];

    const results = allProducts.filter(product => 
      product.text.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(results);
    setIsSearching(false);
  };

  return (
    <SearchContext.Provider value={{ 
      searchResults, 
      isSearching, 
      searchProducts,
      setSearchResults 
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext); 