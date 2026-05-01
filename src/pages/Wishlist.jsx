import React from 'react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

export default function Wishlist() {
    const { wishlistItems, removeFromWishlist, moveToCart } = useShop();

    return (
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-16 min-h-[60vh]">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-10">
                <Link to="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black">Wishlist</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold text-center mb-16">Wishlist</h1>

            {wishlistItems.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg mb-8">Your wishlist is currently empty.</p>
                    <Link
                        to="/"
                        className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-all uppercase tracking-widest"
                    >
                        Return to Shop
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {wishlistItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-6 group"
                        >
                            {/* Product Image */}
                            <div className="w-32 h-32 flex-shrink-0 bg-[#F5F5F5] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col justify-between h-full py-1">
                                <div>
                                    <h3 className="text-[18px] font-medium text-[#111111] mb-1 leading-tight group-hover:text-[#C06C84] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 font-medium">${parseFloat(item.price.replace('$', '')).toFixed(2)}</p>
                                </div>
                                
                                <div className="mt-4 flex flex-col gap-2">
                                    <button
                                        onClick={() => removeFromWishlist(item.title)}
                                        className="text-[12px] font-medium text-gray-400 hover:text-black underline underline-offset-4 transition-colors w-fit"
                                    >
                                        Remove
                                    </button>
                                    
                                    <button
                                        onClick={() => moveToCart(item)}
                                        className="text-[10px] font-bold tracking-[1px] text-[#111111] hover:text-[#C06C84] transition-colors uppercase flex items-center gap-2 mt-1"
                                    >
                                        <FiShoppingCart size={14} />
                                        Move to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
