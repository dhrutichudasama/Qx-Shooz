import React from 'react';
import bg from '../assets/product-bg.webp';
import { Link } from 'react-router-dom';

export default function CollectionHero() {
    return (
        <section className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
            <img 
                src={bg} 
                alt="Products Header" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl md:text-7xl font-semibold mb-4">Products</h1>
                <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium">
                    <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
                    <span>/</span>
                    <span className="opacity-80">Products</span>
                </div>
            </div>
        </section>
    );
}
