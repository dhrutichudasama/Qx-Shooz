import React from 'react';
import { FiTruck, FiRotateCcw, FiShield, FiTag, FiPhone, FiMail, FiMapPin, FiStar } from 'react-icons/fi';
import col3 from '../assets/col3.webp';
import about2 from '../assets/about2.webp';
import about3 from '../assets/about3.webp';
import about4 from '../assets/about4.webp';

export default function AboutUs() {
    return (
        <div className="bg-white">
            {/* Breadcrumbs */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-6 text-sm text-gray-400 flex items-center gap-2">
                <a href="/" className="hover:text-black transition-colors">Home</a>
                <span>/</span>
                <span className="text-black">About Us</span>
            </div>

            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-3/5 space-y-14 text-center md:text-left flex flex-col items-center">
                    <p className="text-xs uppercase tracking-[3px] text-gray-400 font-bold">BEST FOR YOU ALWAYS</p>
                    <h1 className="text-3xl md:text-5xl font-medium text-center leading-relaxed text-[#111111]">
                        Upgrade Your Wardrobe <br /> for <br /> the Season
                    </h1>
                    <button className="bg-[#C06C84] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-black transition-all">
                        Shop Now
                    </button>
                </div>
                <div className="md:w-1/2">
                    <img src={col3} alt="Hero" className="w-full object-cover rounded-sm" />
                </div>
            </section>

            {/* Style Section */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-14 py-24 flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2 relative">
                    <img src={about2} alt="Style" className="w-[85%] rounded-sm shadow-xl" />
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 z-10 shadow-2xl rounded-sm">
                        <img src={about3} alt="Detail" className="w-full" />
                    </div>
                </div>
                <div className="lg:w-1/2 space-y-8">
                    <p className="text-xs uppercase tracking-[3px] text-gray-400 font-bold underline underline-offset-[10px]">CHIC STYLES FOR THE MODERN</p>
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] leading-tight">
                        Style that Speaks Comfort <br /> and Glamour
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-lg">
                        Step into a world where fashion meets function. Our collections are curated with the modern individual in mind, blending contemporary trends with timeless elegance to ensure you look and feel your best, no matter the occasion.
                    </p>
                    <button className="bg-[#C06C84] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-black transition-all">
                        Discover Now
                    </button>
                </div>
            </section>

            {/* Features Row */}
            <section className="bg-[#F9F9F9] py-16">
                <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {[
                        { icon: <FiTruck size={35} />, title: "Free Shipping", desc: "For all orders over $100" },
                        { icon: <FiShield size={35} />, title: "Quality Support", desc: "24/7 dedicated support" },
                        { icon: <FiRotateCcw size={35} />, title: "Return & Refund", desc: "Return money within 30 days" },
                        { icon: <FiTag size={35} />, title: "Gift Voucher", desc: "20% off when you shop over $100" }
                    ].map((feature, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="text-[#111111] mb-6">{feature.icon}</div>
                            <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Elegance & Flair Section */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-14 py-24 flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/2 space-y-10">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[3px] text-gray-400 font-bold underline underline-offset-[10px]">UNMATCHED CRAFTSMANSHIP & DESIGN</p>
                        <h2 className="text-5xl font-semibold text-[#111111] leading-tight">
                            Timeless Elegance, <br /> Modern Flair
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                            Every piece in our collection tells a story of dedication to quality. We source the finest materials and work with skilled artisans to bring you footwear that doesn't just complete an outfit, but elevates your entire presence.
                        </p>
                    </div>
                    <div className="w-full max-w-md">
                        <img src={about4} alt="Design" className="w-full rounded-sm shadow-lg" />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop" alt="Team" className="w-full h-full object-cover rounded-sm shadow-xl" />
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-white py-24 border-t border-gray-100">
                <div className="max-w-[1400px] mx-auto px-6 md:px-14">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: "Emily Johnson", role: "Fashion Enthusiast", text: "The quality of these shoes is beyond my expectations. They are not only stylish but incredibly comfortable for all-day wear.", stars: 5, avatar: "https://i.pravatar.cc/150?u=emily" },
                            { name: "David Smith", role: "Tech Director", text: "Finally, a brand that gets both sizing and durability right. These have become my go-to for both work and weekend outings.", stars: 5, avatar: "https://i.pravatar.cc/150?u=david" },
                            { name: "Sarah Anderson", role: "Fashion Blogger", text: "I've featured many brands on my blog, but the craftsmanship here is truly standout. The attention to detail is evident in every stitch.", stars: 5, avatar: "https://i.pravatar.cc/150?u=sarah" }
                        ].map((t, i) => (
                            <div key={i} className="flex flex-col gap-6 group">
                                <div className="flex items-center gap-4">
                                    <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-bold text-[#111111]">{t.name}</h4>
                                        <p className="text-sm text-gray-400">{t.role}</p>
                                        <div className="flex text-yellow-400 mt-1">
                                            {[...Array(t.stars)].map((_, i) => <FiStar key={i} size={14} className="fill-current" />)}
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <span className="text-6xl text-gray-100 font-serif absolute -top-4 -left-2 z-0">“</span>
                                    <p className="text-gray-500 leading-relaxed italic relative z-10">"{t.text}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="relative h-[600px] w-full bg-gray-200 overflow-hidden">
                <div className="w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-1000 border-t border-gray-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821873!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1714815000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="max-w-4xl mx-auto px-6 py-24 text-center">
                <p className="text-xs uppercase tracking-[3px] text-gray-400 font-bold mb-4">QUICK CONTACT</p>
                <h2 className="text-5xl font-semibold mb-16">Send us an email</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="space-y-2">
                        <input type="text" placeholder="Name" className="w-full border-b border-gray-200 py-4 focus:border-black outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                        <input type="email" placeholder="Email*" className="w-full border-b border-gray-200 py-4 focus:border-black outline-none transition-all" required />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <input type="text" placeholder="Phone number" className="w-full border-b border-gray-200 py-4 focus:border-black outline-none transition-all" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <textarea placeholder="Message" rows="4" className="w-full border-b border-gray-200 py-4 focus:border-black outline-none transition-all resize-none"></textarea>
                    </div>
                    <div className="md:col-span-2 flex justify-center mt-8">
                        <button type="submit" className="bg-[#C06C84] text-white px-12 py-4 font-bold uppercase tracking-widest hover:bg-black transition-all">
                            Send
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
