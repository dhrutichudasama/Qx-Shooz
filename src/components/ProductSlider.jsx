import p1 from "../assets/product1.webp";
import p2 from "../assets/product2.webp";
import p3 from "../assets/product3.webp";
import p4 from "../assets/product4.webp";
import p5 from "../assets/product5.webp";
import p6 from "../assets/product6.webp";
import p7 from "../assets/product7.webp";
import p8 from "../assets/product8.webp";
import p9 from "../assets/product9.webp";
import p10 from "../assets/product10.webp";
import banner from "../assets/wide-banner.webp";

import { useRef, useState } from "react";
import { FiShoppingCart, FiEye, FiHeart, FiRepeat } from "react-icons/fi";


const products = [
    { image: p1, title: "Breathable Mesh Slip-Ons", brand: "AirWalk", price: "$25.00" },
    { image: p2, title: "Premium Leather Chelsea Boots", brand: "LuxeFeet", price: "$25.00" },
    { image: p3, title: "Chunky Platform Sandals", brand: "BoldWalks", price: "$25.00", oldPrice: "$32.00", tag: "-21%" },
    { image: p4, title: "Lightweight Running Shoes", brand: "SprintMax", price: "$0.00", tag: "SOLD OUT" },
    { image: p5, title: "Classic Sneakers", brand: "UrbanStep", price: "$30.00" },
    { image: p6, title: "Sport Shoes", brand: "FastFit", price: "$40.00" },
    { image: p7, title: "Daily Walk Shoes", brand: "MoveOn", price: "$28.00" },
    { image: p8, title: "Comfort Sandals", brand: "SoftStep", price: "$22.00" },
    { image: p9, title: "Running Pro Shoes", brand: "RunX", price: "$50.00" },
    { image: p10, title: "Street Sneakers", brand: "HypeWalk", price: "$35.00" },
];

export default function ProductSlider() {
    const sliderRef = useRef(null);

    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Mouse events
    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDown(false);
    const handleMouseUp = () => setIsDown(false);

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // speed control
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <>

            <section className="py-16 px-6 md:px-14">

                {/* Heading */}
                <div className="text-center mb-10">
                    <p className="text-xs tracking-[3px] text-gray-500 uppercase mb-3">
                        THE LATEST TRENDS IN ATHLETIC FOOTWEAR
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                        Sneakers & Kicks
                    </h2>

                    <div className="flex justify-center gap-8 text-sm">
                        <span className="border-b-2 border-black pb-1">FEATURED</span>
                        <span className="text-gray-400">NEW ARRIVALS</span>
                        <span className="text-gray-400">BEST SELLER</span>
                    </div>
                </div>

                {/* SLIDER */}
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-scroll scroll-smooth"
                    style={{ scrollbarWidth: "none" }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {products.map((item, i) => (
                        <div
                            key={i}
                            className="min-w-[70%] sm:min-w-[45%] md:min-w-[23%] flex-shrink-0 group relative overflow-hidden bg-white"
                        >
                            {/* Main Content Wrapper (Slides UP) */}
                            <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-14 cursor-pointer">
                                {/* Image */}
                                <div className="relative w-full h-[280px] overflow-hidden">

                                    {/* TAG / DISCOUNT */}
                                    {item.tag && (
                                        <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 bg-white text-red-500 z-10 shadow-sm">
                                            {item.tag}
                                        </span>
                                    )}

                                    {/* IMAGE FULL COVER */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500"
                                    />
                                </div>

                                {/* Info Container (Slides UP with image) */}
                                <div className="mt-4 px-1">
                                    <p className="text-sm text-gray-500 font-medium">
                                        {item.price}
                                        {item.oldPrice && (
                                            <span className="line-through text-gray-300 ml-2">
                                                {item.oldPrice}
                                            </span>
                                        )}
                                    </p>

                                    <h3 className="mt-1 text-[16px] font-medium text-[#111111] leading-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                                        {item.brand}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Action Bar (Appears from BELOW) */}
                            <div className="absolute bottom-0 left-0 w-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out px-1 py-4 flex justify-between items-center border-t border-dotted border-gray-200">
                                {/* Add to Cart */}
                                <button className="flex items-center gap-2 text-[11px] font-bold tracking-[2px] text-[#111111] hover:text-[#C06C84] transition-colors uppercase">
                                    <FiShoppingCart className="text-base" />
                                    ADD TO CART
                                </button>

                                {/* Icons */}
                                <div className="flex items-center gap-3 text-gray-400">
                                    <FiEye className="cursor-pointer hover:text-black transition-colors text-[17px]" title="Quick View" />
                                    <FiHeart className="cursor-pointer hover:text-black transition-colors text-[17px]" title="Wishlist" />
                                    <FiRepeat className="cursor-pointer hover:text-black transition-colors text-[15px]" title="Compare" />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Hide scrollbar */}
                <style>
                    {`
                        div::-webkit-scrollbar {
                        display: none;
                        }
                    `}
                </style>
            </section>

            {/* ================= HERO BANNER ================= */}
            <section className="relative w-full h-[90vh] overflow-hidden">

                <img
                    src={banner}
                    alt="banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* <div className="absolute inset-0 bg-white/20"></div> */}

                <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-16">
                    <div className="max-w-xl text-right">

                        <p className="text-xs tracking-[3px] text-gray-700 uppercase mb-4">
                            COMFORT MEETS FASHION
                        </p>

                        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
                            Discover shoes that look great <br />
                            and feel even better
                        </h1>

                        <p className="text-gray-700 mb-6 text-sm md:text-base">
                            Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.
                        </p>

                        <button className="bg-red-500 text-white px-6 py-3 text-sm font-medium hover:bg-black transition-all">
                            SHOP NOW →
                        </button>

                    </div>
                </div>
            </section>

            {/* ================= MOVING STRIP ================= */}
            <section className="bg-gradient-to-r from-yellow-500 to-red-500 py-5 overflow-hidden">

                <div className="whitespace-nowrap animate-marquee-bottom text-white text-[18px] font-medium flex gap-16">
                    <span>🔥 Use code BOGO50</span>
                    <span>• Enjoy 20% off with code SHOEFRESH20</span>
                    <span>• Get 15% off your first purchase</span>
                    <span>• Free shipping on all orders</span>
                </div>

                <style>
                    {`
                    @keyframes marquee-bottom {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }

                    .animate-marquee-bottom {
                        animation: marquee-bottom 20s linear infinite;
                    }
                    `}
                </style>
            </section>

        </>
    )
}



