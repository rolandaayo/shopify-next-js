"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const router = useRouter();
  const [addedToCart, setAddedToCart] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    setAddedToCart((prev) => ({
      ...prev,
      [product.id]: true,
    }));

    addToCart(product, selectedSize);

    setTimeout(() => {
      setAddedToCart((prev) => ({
        ...prev,
        [product.id]: false,
      }));
    }, 1000);
  };

  const arrivals = [
    {
      id: 1,
      text: "Summer T-Shirt",
      price: "$299",
      image: "/images/product-1.png",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      text: "Casual Shirt",
      price: "$299",
      image: "/images/product-2.png",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 3,
      text: "Denim Jacket",
      price: "$299",
      image: "/images/product-3.png",
      sizes: ["S", "M", "L", "XL"],
    },
  ];
  const featured = [
    {
      id: 4,
      text: "Classic Polo",
      price: "$299",
      image: "/images/product-4.png",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 5,
      text: "Striped Shirt",
      price: "$299",
      image: "/images/product-5.png",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 6,
      text: "Casual Blazer",
      price: "$299",
      image: "/images/product-6.png",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 7,
      text: "Formal Shirt",
      price: "$299",
      image: "/images/product-7.png",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 8,
      text: "Designer Tee",
      price: "$299",
      image: "/images/product-8.png",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 9,
      text: "Casual Sweater",
      price: "$299",
      image: "/images/product-9.png",
      sizes: ["S", "M", "L", "XL"],
    },
  ];

  const ProductCard = ({ item, isNew }) => (
    <div
      id={`product-${item.id}`}
      key={item.id}
      className="items-center text-center lg:w-[30%] group relative cursor-pointer hover:transform hover:scale-105 transition-all duration-500 ease-in-out"
      onMouseEnter={() => setHoveredProduct(item.id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      {isNew && (
        <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-lg transform -rotate-12">
          New Arrival
        </div>
      )}

      {hoveredProduct === item.id && (
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Quick View
          </button>
        </div>
      )}

      <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
        <div className="relative">
          <Image
            src={item.image}
            alt={item.text}
            width={500}
            height={500}
            className="rounded-t-3xl group-hover:opacity-95 transition-all duration-500 transform group-hover:scale-110"
          />
        </div>
      </div>

      <div className="p-6 bg-white rounded-b-3xl shadow-lg transform translate-y-[-20px]">
        <h1 className="font-playfair text-2xl font-semibold mt-6 mb-2 text-gray-800">
          {item.text}
        </h1>
        <h1 className="price-text text-3xl text-indigo-600 font-bold mb-4">
          {item.price}
        </h1>

        <div className="flex justify-center gap-2 mb-4">
          {item.sizes.map((size) => (
            <button
              key={size}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSizes((prev) => ({
                  ...prev,
                  [item.id]: size,
                }));
              }}
              className={`w-8 h-8 rounded-full border transition-all duration-300 hover:shadow-md
                ${
                  selectedSizes[item.id] === size
                    ? "border-indigo-600 bg-indigo-600 text-white scale-110"
                    : "border-gray-300 hover:border-indigo-600 hover:scale-105"
                }`}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleAddToCart(item)}
          disabled={addedToCart[item.id]}
          className={`relative overflow-hidden text-xl text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full
            ${
              addedToCart[item.id]
                ? "bg-green-600 hover:bg-green-700"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
        >
          <span className="relative z-10">
            {addedToCart[item.id] ? "✓ Added!" : "Add To Cart"}
          </span>
          <span
            className={`absolute inset-0 bg-white opacity-25 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
            ${addedToCart[item.id] ? "scale-x-100" : ""}`}
          />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black flex flex-col items-center justify-center gap-20 py-24 px-8">
      <h1 className="hero-title lg:text-7xl font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 drop-shadow-sm">
        Explore new arrivals
      </h1>

      <div className="flex items-center justify-center gap-16 flex-wrap max-w-[1400px]">
        {arrivals.map((item) => (
          <ProductCard key={item.id} item={item} isNew={true} />
        ))}
      </div>

      <h1 className="lg:text-7xl font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 drop-shadow-sm hover:scale-105 transition-transform duration-300">
        Featured Products
      </h1>

      <div className="flex items-center justify-center gap-16 flex-wrap max-w-[1400px]">
        {featured.map((item) => (
          <ProductCard key={item.id} item={item} isNew={false} />
        ))}
      </div>
    </div>
  );
}
