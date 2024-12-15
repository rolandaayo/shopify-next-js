/* eslint-disable */
"use client"

import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-[#a6b1d8] to-[#b8c1e3]">
      <div className="flex flex-col md:flex-row justify-evenly p-4 md:p-14 font-bold text-black min-h-screen">
        <div className="items-center basis-full md:basis-1/2 p-4 md:p-[2rem] space-y-4 md:space-y-8 w-full">
          <div className="w-full h-full items-center py-8 md:py-24">
            <p className="price-text text-2xl md:text-4xl font-semibold text-indigo-800">
              $120.00
            </p>

            <h1 className="hero-title text-4xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-indigo-600">
              Man summer collection
            </h1>

            <p className="body-text text-lg md:text-2xl mt-4 text-gray-700 leading-relaxed">
              This is the factor that sets us apart from competition and allows us
              deliver a specialist business service team applies its ranging
              experience determining.
            </p>

            <button className="mt-6 px-8 py-3 bg-indigo-800 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="basis-full md:basis-1/2 p-4 md:p-[2rem] w-full">
          <Image
            width={1000}
            height={1000}
            className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
            src="/images/hero-banner.png"
            alt="hero-banner"
            priority
          />
        </div>
      </div>
    </div>
  );
}