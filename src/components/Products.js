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
    <div className="bg-white text-black flex flex-col items-center justify-center gap-10 p-16  sm:flex-wrap md:flex-wrap">
      <h1 className="lg:text-6xl font-bold text-3xl text-center">Explore new arrivals</h1>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {arrivals.map((item, index) => (
          <div  className=" items-center text-center lg:w-[30%]" key={index}>
            <Image src={item.image} alt="product" width={500} height={500} className="rounded-lg" />
            <h1 className=" text-2xl">{item.text}</h1>
            <h1 className=" text-2xl text-red-500">{item.price}</h1>
            <button onClick={() =>
              router.push("/about")
            } className="text-2xl text-white bg-slate-900 p-2 rounded">Add To Cart</button>
          </div>
        ))}
      </div>

      <h1 className="lg:text-6xl font-bold text-4xl text-center">Featured Products</h1>

      <div className="flex items-center justify-center gap-10 flex-wrap w-full">
        {featured.map((item, index) => (
          <div className="items-center text-center lg:w-[30%] sm:w-full" key={index}>
            <Image src={item.image} alt="product" width={500} height={500}  className="rounded-lg" />
            <h1 className=" text-2xl">{item.text}</h1>
            <h1 className=" text-2xl text-red-500">{item.price}</h1>
            <button onClick={() =>
              router.push("/about")
            } className="text-2xl text-white bg-slate-900 p-2 rounded">Add To Cart</button>
          </div>
        ))}
      </div>    </div>
  );
}
