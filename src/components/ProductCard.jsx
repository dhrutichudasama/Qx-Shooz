import React from 'react';
import { FiShoppingCart, FiEye, FiHeart, FiRepeat } from "react-icons/fi";
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
    const { addToCart, addToWishlist, wishlistItems } = useShop();
    const navigate = useNavigate();
    
    const isInWishlist = wishlistItems.some(item => item.title === product.title);

    const handleNavigate = () => {
        // Assuming ID is index+1 or similar if not provided, but we have it in data
        navigate(`/product/${product.id || 1}`);
    };

    return (
        <div className="group relative overflow-hidden bg-white">
            {/* Main Content Wrapper (Slides UP) */}
            <div 
                className="transition-transform duration-500 ease-in-out group-hover:-translate-y-14 cursor-pointer"
                onClick={handleNavigate}
            >
                {/* Image */}
                <div className="relative w-full h-[280px] overflow-hidden">
                    {/* TAG */}
                    {product.tag && (
                        <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 bg-white z-10 shadow-sm ${product.tag === 'SOLD OUT' ? 'text-gray-400' : 'text-red-500'}`}>
                            {product.tag}
                        </span>
                    )}

                    {/* DEFAULT IMAGE */}
                    <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />

                    {/* HOVER IMAGE */}
                    <img
                        src={product.hoverImage || product.image}
                        alt="hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                </div>

                {/* Info Container (Slides UP with image) */}
                <div className="mt-4 px-1">
                    <p className="text-sm text-gray-500 font-medium">
                        {product.price}
                        {product.oldPrice && (
                            <span className="line-through text-gray-300 ml-2">
                                {product.oldPrice}
                            </span>
                        )}
                    </p>

                    <h3 className="mt-1 text-[16px] font-medium text-[#111111] leading-tight group-hover:text-[#C06C84] transition-colors">
                        {product.title}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                        {product.brand}
                    </p>
                </div>
            </div>

            {/* Bottom Action Bar (Appears from BELOW) */}
            <div className="absolute bottom-0 left-0 w-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out px-1 py-4 flex justify-between items-center border-t border-dotted border-gray-200">
                {/* Add to Cart */}
                <button 
                    onClick={() => addToCart(product)}
                    disabled={product.tag === 'SOLD OUT'}
                    className={`flex items-center gap-2 text-[11px] font-bold tracking-[2px] text-[#111111] hover:text-[#C06C84] transition-colors uppercase ${product.tag === 'SOLD OUT' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <FiShoppingCart className="text-base" />
                    ADD TO CART
                </button>

                {/* Icons */}
                <div className="flex items-center gap-3 text-gray-400">
                    <FiEye className="cursor-pointer hover:text-black transition-colors text-[17px]" title="Quick View" />
                    <FiHeart 
                        onClick={() => addToWishlist(product)}
                        className={`cursor-pointer transition-colors text-[17px] ${isInWishlist ? 'text-red-500 fill-red-500' : 'hover:text-black'}`} 
                        title="Wishlist" 
                    />
                    <FiRepeat className="cursor-pointer hover:text-black transition-colors text-[15px]" title="Compare" />
                </div>
            </div>
        </div>
    );
}
