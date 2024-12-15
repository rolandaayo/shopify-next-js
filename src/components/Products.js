"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const router = useRouter();
  const [addedToCart, setAddedToCart] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    setAddedToCart(prev => ({
      ...prev,
      [product.id]: true
    }));

    addToCart(product, selectedSize);

    setTimeout(() => {
      setAddedToCart(prev => ({
        ...prev,
        [product.id]: false
      }));
    }, 1000);
  };

  const arrivals = [
    { id: 1, text: "Summer T-Shirt", price: "$299", image: "/images/product-1.png", sizes: ["S", "M", "L", "XL"] },
    { id: 2, text: "Casual Shirt", price: "$299", image: "/images/product-2.png", sizes: ["S", "M", "L", "XL"] },
    { id: 3, text: "Denim Jacket", price: "$299", image: "/images/product-3.png", sizes: ["S", "M", "L", "XL"] },
  ];
  const featured = [
    { id: 4, text: "Classic Polo", price: "$299", image: "/images/product-4.png", sizes: ["S", "M", "L", "XL"] },
    { id: 5, text: "Striped Shirt", price: "$299", image: "/images/product-5.png", sizes: ["S", "M", "L", "XL"] },
    { id: 6, text: "Casual Blazer", price: "$299", image: "/images/product-6.png", sizes: ["S", "M", "L", "XL"] },
    { id: 7, text: "Formal Shirt", price: "$299", image: "/images/product-7.png", sizes: ["S", "M", "L", "XL"] },
    { id: 8, text: "Designer Tee", price: "$299", image: "/images/product-8.png", sizes: ["S", "M", "L", "XL"] },
    { id: 9, text: "Casual Sweater", price: "$299", image: "/images/product-9.png", sizes: ["S", "M", "L", "XL"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black flex flex-col items-center justify-center gap-20 py-24 px-8">
      <h1 className="lg:text-7xl font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 drop-shadow-sm">Explore new arrivals</h1>
      <div className="flex items-center justify-center gap-16 flex-wrap max-w-[1400px]">
        {arrivals.map((item) => (
          <div key={item.id} className="items-center text-center lg:w-[30%] group cursor-pointer hover:transform hover:scale-105 transition-all duration-500 ease-in-out">
            <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image src={item.image} alt={item.text} width={500} height={500} 
                className="rounded-t-3xl group-hover:opacity-85 transition-all duration-500 transform group-hover:scale-110" />
            </div>
            <h1 className="text-2xl font-semibold mt-6 mb-2">{item.text}</h1>
            <h1 className="text-3xl text-red-500 font-bold mb-4">{item.price}</h1>
            
            <div className="flex justify-center gap-2 mb-4">
              {item.sizes.map(size => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSizes(prev => ({
                      ...prev,
                      [item.id]: size
                    }));
                  }}
                  className={`w-8 h-8 rounded-full border transition-all duration-300
                    ${selectedSizes[item.id] === size 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-300 hover:border-black'}`}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleAddToCart(item)}
              disabled={addedToCart[item.id]}
              className={`text-xl text-white bg-slate-900 px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                ${addedToCart[item.id] ? 'bg-green-600' : 'hover:bg-slate-800'}`}
            >
              {addedToCart[item.id] ? 'Added!' : 'Add To Cart'}
            </button>
          </div>
        ))}
      </div>

      <h1 className="lg:text-7xl font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 drop-shadow-sm">Featured Products</h1>
      <div className="flex items-center justify-center gap-16 flex-wrap max-w-[1400px]">
        {featured.map((item) => (
          <div key={item.id} className="items-center text-center lg:w-[30%] group cursor-pointer hover:transform hover:scale-105 transition-all duration-500 ease-in-out">
            <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image src={item.image} alt={item.text} width={500} height={500} 
                className="rounded-t-3xl group-hover:opacity-85 transition-all duration-500 transform group-hover:scale-110" />
            </div>
            <h1 className="text-2xl font-semibold mt-6 mb-2">{item.text}</h1>
            <h1 className="text-3xl text-red-500 font-bold mb-4">{item.price}</h1>
            
            <div className="flex justify-center gap-2 mb-4">
              {item.sizes.map(size => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSizes(prev => ({
                      ...prev,
                      [item.id]: size
                    }));
                  }}
                  className={`w-8 h-8 rounded-full border transition-all duration-300
                    ${selectedSizes[item.id] === size 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-300 hover:border-black'}`}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleAddToCart(item)}
              disabled={addedToCart[item.id]}
              className={`text-xl text-white bg-slate-900 px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                ${addedToCart[item.id] ? 'bg-green-600' : 'hover:bg-slate-800'}`}
            >
              {addedToCart[item.id] ? 'Added!' : 'Add To Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
