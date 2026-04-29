import React from 'react';
import col1 from '../assets/col1.webp';
import col2 from '../assets/col2.webp';
import col3 from '../assets/col3.webp';
import col4 from '../assets/col4.webp';

const collections = [
  { id: 1, title: <>Athletic <br /> Footwear</>, count: '8', image: col1 },
  { id: 2, title: <>Luxury<br /> Shoes</>, count: '12', image: col2 },
  { id: 3, title: <>Sustainable <br /> Footwear</>, count: '5', image: col3 },
  { id: 4, title: <>Sandals & <br /> Slides</>, count: '15', image: col4 },
];

export default function CollectionSection() {
  return (
    <section className="bg-[#f8f8f8] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Header Content */}
        <div className="text-center mb-12">
          <p className="text-[13px] font-medium tracking-[2px] text-gray-500 uppercase mb-3">
            STYLISH AND COMFORTABLE FOR EVERY SEASON
          </p>
          <h2 className="text-4xl md:text-[42px] font-bold text-[#111111] mb-5">
            Boots & Booties
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">
            Explore our curated selection of premium footwear. Find the perfect balance of modern aesthetics and everyday comfort for any occasion.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth">

          {collections.map((item) => (
            <div
              key={item.id}
              className="relative group flex-shrink-0 
                w-[100%] sm:w-[48%] md:w-[32%] lg:w-[23%] 
                h-[300px] cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="collection"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay Box */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-4 shadow-md flex justify-between items-center gap-6 min-w-[65%] w-max max-w-[65%] group-hover:bg-[#AE3F4F] transition-all duration-700">
                <h3 className="font-semibold text-[#111111] text-[18px] whitespace-nowrap group-hover:text-white transition-all duration-500">
                  {item.title}
                </h3>
                <span className="text-gray-400 font-medium text-[14px]">
                  {item.count}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
