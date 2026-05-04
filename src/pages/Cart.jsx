import React from 'react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity } = useShop();

    const subtotal = cartItems.reduce((acc, item) => {
        const price = parseFloat(String(item.price).replace('$', '')) || 0;
        return acc + price * item.quantity;
    }, 0);

    return (
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-16 min-h-[60vh]">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-10">
                <Link to="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black">Shopping Cart</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold text-center mb-16">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg mb-8">Your cart is currently empty.</p>
                    <Link
                        to="/"
                        className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-all uppercase tracking-widest"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="hidden md:grid grid-cols-6 border-b border-gray-200 pb-4 mb-8 text-xs font-bold tracking-[2px] uppercase text-gray-400">
                            <div className="col-span-3">Product</div>
                            <div className="text-center">Price</div>
                            <div className="text-center">Quantity</div>
                            <div className="text-right">Total</div>
                        </div>

                        <div className="flex flex-col gap-8">
                            {cartItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center pb-8 border-b border-gray-100 last:border-0"
                                >
                                    {/* Product */}
                                    <div className="col-span-3 flex items-center gap-6">
                                        <div className="w-24 h-24 flex-shrink-0 bg-gray-50">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-[16px] font-medium text-[#111111] mb-1">{item.title}</h3>
                                            <button
                                                onClick={() => removeFromCart(item.title)}
                                                className="text-[10px] font-bold tracking-[1px] text-gray-400 hover:text-black uppercase"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="md:text-center text-gray-500">
                                        <span className="md:hidden font-bold mr-2 text-xs text-gray-400 uppercase tracking-wider">Price:</span>
                                        {item.price}
                                    </div>

                                    {/* Quantity */}
                                    <div className="flex justify-start md:justify-center">
                                        <div className="flex items-center border border-gray-200 h-10">
                                            <button
                                                onClick={() => updateQuantity(item.title, item.quantity - 1)}
                                                className="px-3 hover:text-[#C06C84] transition-colors"
                                            >
                                                <FiMinus size={12} />
                                            </button>
                                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.title, item.quantity + 1)}
                                                className="px-3 hover:text-[#C06C84] transition-colors"
                                            >
                                                <FiPlus size={12} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Total */}
                                    <div className="text-right font-medium text-[#111111]">
                                        <span className="md:hidden float-left font-bold text-xs text-gray-400 uppercase tracking-wider">Total:</span>
                                        ${(parseFloat(String(item.price).replace('$', '')) * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-8">
                            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                            
                            <div className="flex justify-between items-center mb-4 text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-medium text-[#111111]">${subtotal.toFixed(2)}</span>
                            </div>
                            
                            <div className="flex justify-between items-center mb-8 text-gray-600">
                                <span>Shipping</span>
                                <span className="text-xs uppercase font-bold text-green-600 tracking-wider">Free</span>
                            </div>

                            <div className="border-t border-gray-200 pt-6 mb-8">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold">Total</span>
                                    <span className="text-2xl font-bold">${subtotal.toFixed(2)}</span>
                                </div>
                                <p className="text-[11px] text-gray-400 mt-2 uppercase tracking-wider italic text-center">
                                    Shipping & taxes calculated at checkout
                                </p>
                            </div>

                            <button className="w-full bg-black text-white py-4 text-sm font-bold tracking-[2px] hover:bg-gray-800 transition-all uppercase mb-4">
                                Proceed to Checkout
                            </button>
                            
                            <Link
                                to="/"
                                className="block text-center text-xs font-bold tracking-[1px] text-gray-400 hover:text-black uppercase underline"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
