"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Products() {
    const router = useRouter();
  const arrivals = [
    { text: "Clothing", price: "$299", image: "/images/product-1.png" },
    { text: "Clothing", price: "$299", image: "/images/product-2.png" },
    { text: "Clothing", price: "$299", image: "/images/product-3.png" },
  ];
  const featured = [
    { text: "Clothing", price: "$299", image: "/images/product-4.png" },
    { text: "Clothing", price: "$299", image: "/images/product-5.png" },
    { text: "Clothing", price: "$299", image: "/images/product-6.png" },
    { text: "Clothing", price: "$299", image: "/images/product-7.png" },
    { text: "Clothing", price: "$299", image: "/images/product-8.png" },
    { text: "Clothing", price: "$299", image: "/images/product-9.png" },
  ];
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-black flex flex-col items-center justify-center gap-16 py-20 px-8 sm:flex-wrap md:flex-wrap">
      <h1 className="lg:text-6xl font-bold text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">Explore new arrivals</h1>
      <div className="flex items-center justify-center gap-12 flex-wrap">
        {arrivals.map((item, index) => (
          <div className="items-center text-center lg:w-[30%] hover:transform hover:scale-105 transition-all duration-300" key={index}>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src={item.image} alt="product" width={500} height={500} className="rounded-t-2xl hover:opacity-90 transition-opacity duration-300" />
            </div>
            <h1 className="text-2xl font-semibold mt-4 mb-2">{item.text}</h1>
            <h1 className="text-2xl text-red-500 font-bold mb-4">{item.price}</h1>
            <button onClick={() =>
              router.push("/about")
            } className="text-xl text-white bg-slate-900 px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-md hover:shadow-lg">Add To Cart</button>
          </div>
        ))}
      </div>

      <h1 className="lg:text-6xl font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">Featured Products</h1>

      <div className="flex items-center justify-center gap-12 flex-wrap w-full">
        {featured.map((item, index) => (
          <div className="items-center text-center lg:w-[30%] sm:w-full hover:transform hover:scale-105 transition-all duration-300" key={index}>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src={item.image} alt="product" width={500} height={500} className="rounded-t-2xl hover:opacity-90 transition-opacity duration-300" />
            </div>
            <h1 className="text-2xl font-semibold mt-4 mb-2">{item.text}</h1>
            <h1 className="text-2xl text-red-500 font-bold mb-4">{item.price}</h1>
            <button onClick={() =>
              router.push("/about")
            } className="text-xl text-white bg-slate-900 px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-md hover:shadow-lg">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
