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
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black flex flex-col items-center justify-center gap-20 py-24 px-8">
      <h1 className="lg:text-7xl font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 drop-shadow-sm">Explore new arrivals</h1>
      <div className="flex items-center justify-center gap-16 flex-wrap max-w-[1400px]">
        {arrivals.map((item, index) => (
          <div className="items-center text-center lg:w-[30%] group cursor-pointer hover:transform hover:scale-105 transition-all duration-500 ease-in-out" key={index}>
            <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image src={item.image} alt="product" width={500} height={500} className="rounded-t-3xl group-hover:opacity-85 transition-all duration-500 transform group-hover:scale-110" />
            </div>
            <h1 className="text-2xl font-semibold mt-6 mb-2">{item.text}</h1>
            <h1 className="text-3xl text-red-500 font-bold mb-6">{item.price}</h1>
            <button onClick={() =>
              router.push("/about")
            } className="text-xl text-white bg-slate-900 px-8 py-4 rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">Add To Cart</button>
          </div>
        ))}
      </div>

      <h1 className="lg:text-7xl font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 drop-shadow-sm">Featured Products</h1>

      <div className="flex items-center justify-center gap-16 flex-wrap w-full max-w-[1400px]">
        {featured.map((item, index) => (
          <div className="items-center text-center lg:w-[30%] sm:w-full group cursor-pointer hover:transform hover:scale-105 transition-all duration-500 ease-in-out" key={index}>
            <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image src={item.image} alt="product" width={500} height={500} className="rounded-t-3xl group-hover:opacity-85 transition-all duration-500 transform group-hover:scale-110" />
            </div>
            <h1 className="text-2xl font-semibold mt-6 mb-2">{item.text}</h1>
            <h1 className="text-3xl text-red-500 font-bold mb-6">{item.price}</h1>
            <button onClick={() =>
              router.push("/about")
            } className="text-xl text-white bg-slate-900 px-8 py-4 rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
