import React from 'react';
import col1 from '../assets/col1.webp';
import col2 from '../assets/col2.webp';
import col3 from '../assets/col3.webp';
import col4 from '../assets/col4.webp';
import col5 from '../assets/col5.webp';

const categories = [
    { name: 'Athletic Footwear', img: col1 },
    { name: 'Boots for Every Occasion', img: col2 },
    { name: 'Luxury Leather Shoes', img: col3 },
    { name: 'Sandals & Slides', img: col4 },
    { name: 'Sneakerhead’s Haven', img: col5 },
];

export default function CategorySelection() {
    return (
        <section className="max-w-[1400px] mx-auto px-6 md:px-14 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {categories.map((cat, i) => (
                    <div key={i} className="group relative h-[300px] overflow-hidden cursor-pointer rounded-sm shadow-sm">
                        <img 
                            src={cat.img} 
                            alt={cat.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <h3 className="text-white text-xl font-semibold text-center leading-tight transition-transform duration-500 group-hover:scale-105">
                                {cat.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
