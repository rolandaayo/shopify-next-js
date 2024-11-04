import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="bg-[rgb(166,177,216)]">
      <div className="flex flex-col md:flex-row justify-evenly p-4 md:p-14 font-bold text-black min-h-screen">

        <div className="items-center basis-full md:basis-1/2 p-4 md:p-[2rem] space-y-4 md:space-y-8 w-full">

            <div className="w-full h-full items-center py-8 md:py-24">

              <p className="text-2xl md:text-4xl">$120.00</p>

              <h1 className="text-4xl md:text-8xl">Man summer collection</h1>

              <p className="text-lg md:text-2xl mt-4">
                This is the factor that sets us apart from competition and allows us
                deliver a specialist business service team applies its ranging
                experience determining.
              </p>

              <button className="mt-6 px-6 py-2 bg-black text-white hover:bg-opacity-80">SHOP NOW</button>

            </div>

        </div>

        <div className="basis-full md:basis-1/2 p-4 md:p-[2rem] w-full">
          <Image
            width={1000}
            height={1000}
            className="object-contain"
            src="/images/hero-banner.png"
            alt="hero-banner"
            priority
          />
        </div>
      </div>
    </div>
  );
}
