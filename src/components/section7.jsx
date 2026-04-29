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
import fb6 from "../assets/text-logo-2 (1).avif"; // Using as fallback for 6


export default function ProductsSection() {
    return (
        <>
            <section class="bg-white py-12">
                <div class="max-w-[1400px] mx-auto px-6 md:px-14">

                    {/* Heading */}
                    <div class="text-center mb-10">
                        <h2 class="text-3xl md:text-5xl font-semibold mb-3">
                            Huge discounts on last season’s styles
                        </h2>
                        <p class="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                            Himenaeos nascetur tristique consequat mus ad. Accumsan fringilla in laoreet id bibendum et.
                        </p>
                    </div>

                    {/* Products */}
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Item */}
                        <div class="flex items-center gap-4 border-b pb-4">
                            <img src={img1} class="w-16 h-16 object-cover rounded" />
                            <div>
                                <h4 class="text-[16px] font-medium">Classic White Tennis Sneakers</h4>
                                <p class="text-gray-500 text-sm">$25.00</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 border-b pb-4">
                            <img src={img2} class="w-16 h-16 object-cover rounded" />
                            <div>
                                <h4 class="text-[16px] font-medium">Classic White Tennis Sneakers</h4>
                                <p class="text-gray-500 text-sm">$25.00</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 border-b pb-4">
                            <img src={img3} class="w-16 h-16 object-cover rounded" />
                            <div>
                                <h4 class="text-[16px] font-medium">Classic White Tennis Sneakers</h4>
                                <p class="text-gray-500 text-sm">$25.00</p>
                            </div>
                        </div>

                        {/* <!-- Row 2 --> */}
                        <div class="flex items-center gap-4 border-b pb-4">
                            <img src={img4} class="w-16 h-16 object-cover rounded" />
                            <div>
                                <h4 class="text-[16px] font-medium">Waterproof Hiking Boots</h4>
                                <p class="text-gray-500 text-sm">$25.00</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 border-b pb-4">
                            <img src={img5} class="w-16 h-16 object-cover rounded" />
                            <div>
                                <h4 class="text-[16px] font-medium">Waterproof Hiking Boots</h4>
                                <p class="text-gray-500 text-sm">$25.00</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 border-b pb-4">
                            <img src={img6} class="w-16 h-16 object-cover rounded" />
                            <div>
                                <h4 class="text-[16px] font-medium">Waterproof Hiking Boots</h4>
                                <p class="text-gray-500 text-sm">$25.00</p>
                            </div>
                        </div>

                        {/* <!-- Row 3 --> */}
                        <div class="flex items-center gap-4">
                            <img src={img7} class="w-16 h-16 object-cover rounded" />
                            <div>
                                <h4 class="text-[16px] font-medium">Classic Leather Sneakers</h4>
                                <p class="text-gray-500 text-sm">$21.00</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4">
                            <img src={img8} class="w-16 h-16 object-cover rounded" />
                            <div>
                                <h4 class="text-[16px] font-medium">Classic Leather Sneakers</h4>
                                <p class="text-gray-500 text-sm">$21.00</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4">
                            <img src={img9} class="w-16 h-16 object-cover rounded" />
                            <div>
                                <h4 class="text-[16px] font-medium">Classic Leather Sneakers</h4>
                                <p class="text-gray-500 text-sm">$21.00</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-white py-16 px-4">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div>
                        <p className="uppercase text-xs tracking-widest text-gray-400 mb-4">
                            OUR MOST POPULAR STYLES
                        </p>

                        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
                            Save big on shoes <br /> from last season
                        </h2>

                        <p className="text-gray-600 mb-4 text-[16px] leading-relaxed">
                            Morbi natoque id finibus natoque sapien turpis elementum maximus. Sociosqu auctor a urna consequat laoreet nisi accumsan magna. Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est habitant lacus sagittis vitae.
                        </p>

                        <p className="text-gray-600 mb-6 text-[16px] leading-relaxed">
                            Molestie dolor mus vitae penatibus sed lectus convallis ut neque. Leo elementum euismod penatibus cras sociosqu aliquet tellus.
                        </p>

                        <button className="bg-[#A14D4D] text-white px-6 py-3 text-sm tracking-wide hover:bg-black transition">
                            SHOP NOW →
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full">

                        {/* Image */}
                        <img
                            src={videopic}
                            className="w-full h-[400px] md:h-[450px] object-cover"
                        />

                        {/* Play Button (same position) */}
                        <div className="absolute top-[40%] left-2/3 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-28 h-28 border border-white rounded-full flex items-center justify-center cursor-pointer">
                                <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-2"></div>
                            </div>
                        </div>

                        {/* Text Circle (RIGHT SIDE with gap) */}
                        <div className="absolute top-1/2 left-[35%] -translate-x-20 -translate-y-1/2 group">

                            <div className="relative w-52 h-52 rounded-full flex items-center justify-center">

                                {/* Rotating Text */}
                                <div className="absolute w-full h-full group-hover:animate-[spin_10s_linear_infinite]">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <defs>
                                            <path
                                                id="circlePath"
                                                d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                            />
                                        </defs>

                                        <text fontSize="7" fill="white" letterSpacing="2">
                                            <textPath href="#circlePath">
                                                • FASHION • STYLE • STORE • FASHION •
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                {/* Announcement Bar */}
                <div className="w-full bg-gradient-to-r from-[#9b4dca] via-[#c2185b] to-[#e91e63] text-white py-10 overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <h3 className="text-xl md:text-3xl font-medium tracking-tight">
                                Discover Our Stores: Your Local Shoe Haven
                            </h3>
                        </div>
                        <div className="flex items-center gap-6">
                            <button className="bg-[#4E4991] hover:bg-[#3f3a75] transition-colors py-4 px-12 text-white text-sm font-bold tracking-[0.2em] uppercase">
                                Find Store
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* feedback section */}
            <section className="bg-white py-24">
                <div className="max-w-[1400px] mx-auto px-6 md:px-14">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#1a1a1a]">
                            Customer Feedback Highlights
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            Laoreet ridiculus congue magna malesuada <br className="hidden md:block" /> phasellus condimentum taciti mus primis.
                        </p>
                    </div>

                    {/* Logos Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {[fb1, fb2, fb3, fb4, fb5, fb6, fb7, fb8, fb9, fb10].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center p-8 hover:bg-gray-50 transition-all duration-300 group h-34">
                                <img 
                                    src={logo} 
                                    alt={`Brand Logo ${index + 1}`} 
                                    className="max-h-16 w-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}