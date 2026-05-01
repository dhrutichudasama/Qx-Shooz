import React from "react";
import img1 from "../assets/product1.webp";
import img2 from "../assets/product2.webp";
import img3 from "../assets/product3.webp";
import img4 from "../assets/product4.webp";
import img5 from "../assets/product5.webp";
import img6 from "../assets/product6.webp";
import img7 from "../assets/product7.webp";
import img8 from "../assets/product8.webp";
import img9 from "../assets/product9.webp";
import videopic from "../assets/video-pic.webp";
import fb1 from "../assets/text-logo-1.avif";
import fb2 from "../assets/text-logo-2.avif";
import fb3 from "../assets/text-logo-3.avif";
import fb4 from "../assets/text-logo-4.avif";
import fb5 from "../assets/text-logo-5.avif";
import fb7 from "../assets/text-logo-7.avif";
import fb8 from "../assets/text-logo-8.avif";
import fb9 from "../assets/text-logo-9.avif";
import fb10 from "../assets/text-logo-10.avif";
import fb6 from "../assets/text-logo-2 (1).avif";
import blog2 from "../assets/blog-2.webp";
import blog3 from "../assets/blog-3.avif";
import blog4 from "../assets/blog-4.webp";
import blog5 from "../assets/blog-5.webp";
import banner from "../assets/five-col-banner-2.webp";
import { useShop } from "../context/ShopContext";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

const discountProducts = [
    { title: "Classic White Tennis Sneakers", price: "$25.00", image: img1, brand: "AirWalk" },
    { title: "Comfort Foam Runners", price: "$25.00", image: img2, brand: "SprintMax" },
    { title: "Urban Street Sneaks", price: "$25.00", image: img3, brand: "UrbanStep" },
    { title: "Waterproof Hiking Boots", price: "$25.00", image: img4, brand: "LuxeFeet" },
    { title: "Trail Master Boots", price: "$25.00", image: img5, brand: "BoldWalks" },
    { title: "Summit Trekker", price: "$25.00", image: img6, brand: "MoveOn" },
    { title: "Classic Leather Sneakers", price: "$21.00", image: img7, brand: "FastFit" },
    { title: "Premium Suede Sneaks", price: "$21.00", image: img8, brand: "SoftStep" },
    { title: "Retro Leather Kicks", price: "$21.00", image: img9, brand: "AirWalk" },
];

export default function ProductsSection() {
    const { addToCart, addToWishlist } = useShop();

    return (
        <>
            <section className="bg-white py-12">
                <div className="max-w-[1400px] mx-auto px-6 md:px-14">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-3">
                            Huge discounts on last season’s styles
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                            Himenaeos nascetur tristique consequat mus ad. Accumsan fringilla in laoreet id bibendum et.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {discountProducts.map((product, idx) => (
                            <div key={idx} className="flex items-center gap-4 border-b pb-4 group relative">
                                <img src={product.image} className="w-16 h-16 object-cover rounded" alt={product.title} />
                                <div className="flex-grow">
                                    <h4 className="text-[16px] font-medium group-hover:text-[#C06C84] transition-colors">{product.title}</h4>
                                    <p className="text-gray-500 text-sm">{product.price}</p>
                                </div>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button 
                                        onClick={() => addToWishlist(product)}
                                        className="p-2 hover:text-red-500 transition-colors"
                                        title="Add to Wishlist"
                                    >
                                        <FiHeart size={16} />
                                    </button>
                                    <button 
                                        onClick={() => addToCart(product)}
                                        className="p-2 hover:text-[#C06C84] transition-colors"
                                        title="Add to Cart"
                                    >
                                        <FiShoppingCart size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rest of the file remains same... (truncated for brevity in write_to_file, but I should provide the full content if I'm overwriting) */}
            {/* I'll provide the full content to avoid breaking the layout */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="uppercase text-xs tracking-widest text-gray-400 mb-4">OUR MOST POPULAR STYLES</p>
                        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">Save big on shoes <br /> from last season</h2>
                        <p className="text-gray-600 mb-4 text-[16px] leading-relaxed">Morbi natoque id finibus natoque sapien turpis elementum maximus. Sociosqu auctor a urna consequat laoreet nisi accumsan magna.</p>
                        <p className="text-gray-600 mb-6 text-[16px] leading-relaxed">Molestie dolor mus vitae penatibus sed lectus convallis ut neque.</p>
                        <button className="bg-[#A14D4D] text-white px-6 py-3 text-sm tracking-wide hover:bg-black transition">SHOP NOW →</button>
                    </div>
                    <div className="relative w-full">
                        <img src={videopic} className="w-full h-[400px] md:h-[450px] object-cover" alt="video" />
                        <div className="absolute top-[40%] left-2/3 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-28 h-28 border border-white rounded-full flex items-center justify-center cursor-pointer">
                                <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div className="w-full bg-gradient-to-r from-[#6C59A6] via-[#B0308E] to-[#B73D48] text-white py-6 overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-10 md:px-14 flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center px-20">
                            <h3 className="text-[18px] md:text-[18px] tracking-tight">Discover Our Stores: Your Local Shoe Haven</h3>
                        </div>
                        <div className="flex items-center gap-6 px-20">
                            <button className="bg-[#4E4991] hover:bg-[#3f3a75] transition-colors py-4 px-12 text-white text-sm font-bold tracking-[0.2em] uppercase">Find Store</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="max-w-[1400px] mx-auto px-6 md:px-14">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-semibold mb-6 text-[#1a1a1a]">Customer Feedback Highlights</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">Laoreet ridiculus congue magna malesuada <br className="hidden md:block" /> phasellus condimentum taciti mus primis.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {[fb1, fb2, fb3, fb4, fb5, fb6, fb7, fb8, fb9, fb10].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center p-8 hover:bg-gray-50 transition-all duration-300 group h-34">
                                <img src={logo} alt={`Brand Logo ${index + 1}`} className="max-h-16 w-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="max-w-[1400px] mx-auto px-6 md:px-14">
                    <div className="mb-16">
                        <h2 className="text-5xl font-semibold mb-6 text-[#1a1a1a]">Recently Our Posts</h2>
                        <p className="text-gray-500 max-w-xl text-lg md:text-xl leading-relaxed">Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-6 group cursor-pointer">
                            <div className="relative overflow-hidden aspect-[16/11] mb-6">
                                <img src={blog2} alt="Feature Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute bottom-8 left-8 text-white z-10">
                                    <div className="flex items-center gap-4 text-sm mb-4"><span>Oct 28 2024</span><span>0 comments</span></div>
                                    <h3 className="text-2xl md:text-2xl font-semibold leading-tight">The Future Of Footwear: <br /> A Look Ahead</h3>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex flex-col gap-10">
                            {[
                                { img: blog3, date: "Oct 28 2024", title: "Eco-Friendly Footwear: Sustainable Style" },
                                { img: blog4, date: "Oct 17 2024", title: "The Ultimate Guide to Sneaker Care" },
                                { img: blog5, date: "Oct 17 2024", title: "How to Style Your Favorite Sneakers" }
                            ].map((post, idx) => (
                                <div key={idx} className="grid grid-cols-1 md:grid-cols-5 gap-6 group cursor-pointer items-center">
                                    <div className="md:col-span-2 overflow-hidden aspect-[5/3]">
                                        <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="md:col-span-3">
                                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3"><span>{post.date}</span><span>0 comments</span></div>
                                        <h4 className="text-xl md:text-[20px] font-semibold group-hover:text-gray-600 transition-colors leading-snug">{post.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative z-10">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-14 -mb-28">
                        <div className="relative overflow-hidden border-2 border-black">
                            <div className="grid grid-cols-1 lg:grid-cols-12">
                                <div className="col-span-1 lg:col-span-5 bg-[#AE3F4F] h-[220px] md:h-[260px] lg:h-[240px]" />
                                <div className="hidden lg:block lg:col-span-7 h-[240px]">
                                    <img src={banner} alt="newsletter" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
                                <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4 max-w-2xl">SUBSCRIBE TO OUR NEWS ARTICLES</h2>
                                <div className="flex w-full max-w-md md:max-w-xl">
                                    <input type="email" placeholder="Your email" className="w-full px-4 py-2 outline-none text-gray-700 text-sm" />
                                    <button className="bg-black text-white px-6 text-sm font-medium">SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}