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
import ProductCard from "./ProductCard";


const products = [
    { id: 1, image: p1, hoverImage: p10, title: "Breathable Mesh Slip-Ons", brand: "AirWalk", price: "$25.00" },
    { id: 2, image: p2, hoverImage: p6, title: "Premium Leather Chelsea Boots", brand: "LuxeFeet", price: "$25.00" },
    { id: 3, image: p3, hoverImage: p7, title: "Chunky Platform Sandals", brand: "BoldWalks", price: "$25.00", oldPrice: "$32.00", tag: "-21%" },
    { id: 4, image: p4, hoverImage: p8, title: "Lightweight Running Shoes", brand: "SprintMax", price: "$0.00", tag: "SOLD OUT" },
    { id: 5, image: p5, hoverImage: p9, title: "Classic Sneakers", brand: "UrbanStep", price: "$30.00" },
    { id: 6, image: p8, hoverImage: p10, title: "Sport Shoes", brand: "FastFit", price: "$40.00" },
    { id: 7, image: p7, hoverImage: p1, title: "Daily Walk Shoes", brand: "MoveOn", price: "$28.00" },
    { id: 8, image: p8, hoverImage: p2, title: "Comfort Sandals", brand: "SoftStep", price: "$22.00" },
];

export default function ProductSlider() {
    const sliderRef = useRef(null);

    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeTab, setActiveTab] = useState("featured");

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

    const getFilteredProducts = () => {
        switch (activeTab) {
            case "new":
                return [...products].reverse(); // newest first

            case "best":
                return [...products]
                    .sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)))
                    .slice(0, 4); // highest price = best seller (example logic)

            default: // featured
                return [...products]
                    .sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)))
                    .slice(0, 8); // lowest price = featured
        }
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

                    <div className="flex justify-center gap-8 text-sm cursor-pointer">

                        <span
                            onClick={() => setActiveTab("featured")}
                            className={`pb-1 ${activeTab === "featured"
                                ? "border-b-2 border-black text-black"
                                : "text-gray-400"
                                }`}
                        >
                            FEATURED
                        </span>

                        <span
                            onClick={() => setActiveTab("new")}
                            className={`pb-1 ${activeTab === "new"
                                ? "border-b-2 border-black text-black"
                                : "text-gray-400"
                                }`}
                        >
                            NEW ARRIVALS
                        </span>

                        <span
                            onClick={() => setActiveTab("best")}
                            className={`pb-1 ${activeTab === "best"
                                ? "border-b-2 border-black text-black"
                                : "text-gray-400"
                                }`}
                        >
                            BEST SELLER
                        </span>

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
                    {getFilteredProducts().map((item, i) => (
                        <div key={i} className="min-w-[70%] sm:min-w-[45%] md:min-w-[23%] flex-shrink-0">
                            <ProductCard product={item} />
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

                        <button className="bg-red-500 text-white px-6 py-3 text-sm font-medium hover:bg-black transition-all" onClick={() => { navigate('/products'); }}>
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



