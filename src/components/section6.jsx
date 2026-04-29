import React from "react";
import img1 from "../assets/five-col-banner-1.webp";
import img2 from "../assets/five-col-banner-2.webp";
import img3 from "../assets/five-col-banner-3.webp";
import img4 from "../assets/five-col-banner-4.webp";
import img5 from "../assets/five-col-banner-5.webp";

export default function BannerSection() {
  return (
    <section className="bg-[#2f2f2f] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-20">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[12px] tracking-[3px] text-gray-300 uppercase mb-3">
            Fashion Sneakers
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Timeless styles for everyday wear
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            High-performance footwear for sports and workouts
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-9">

          {/* Top 3 */}
          <div className="relative group h-[350px] md:h-[350px] lg:col-span-2 overflow-hidden rounded-md">
            <img src={img1} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <Overlay 
              small="COMFORT MEETS FASHION"
              title="Discover shoes that look great"
            />
          </div>

          <div className="relative group h-[350px] md:h-[350px] lg:col-span-2 overflow-hidden rounded-md">
            <img src={img2} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <Overlay 
              small="ELEVATE YOUR LOOK"
              title="Find the perfect pair of shoes"
            />
          </div>

          <div className="relative group h-[350px] md:h-[350px] lg:col-span-2 overflow-hidden rounded-md">
            <img src={img3} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <Overlay 
              small="STEP INTO STYLE"
              title="The latest trends in footwear"
            />
          </div>

          {/* Bottom 2 */}
          <div className="relative group h-[350px] md:h-[350px] lg:col-span-3 overflow-hidden rounded-md">
            <img src={img4} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <Overlay 
              small="SHOP BY BRAND"
              title="Find your favorite brands and styles"
            />
          </div>

          <div className="relative group h-[350px] md:h-[350px] lg:col-span-3 overflow-hidden rounded-lg">
            <img src={img5} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <Overlay 
              small="SALE AND CLEARANCE"
              title="Shop our latest deals and discounts"
            />
          </div>

        </div>
      </div>
    </section>
  );
}


/* Overlay Component */
function Overlay({ small, title }) {
  return (
    <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 md:p-8">
      
      <p className="text-[11px] tracking-[2px] text-gray-200 uppercase mb-2">
        {small}
      </p>

      <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug mb-3">
        {title}
      </h3>

      <button className="text-white text-sm font-medium border-b border-white w-fit hover:opacity-80">
        SHOP NOW
      </button>

    </div>
  );
}