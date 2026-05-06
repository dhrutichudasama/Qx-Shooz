import React, { useState } from 'react';
import logoF from '../assets/logo-f.webp';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const informationLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Privacy Policy', path: '#' },
        { name: 'Returns Policy', path: '#' },
        { name: 'Shipping Policy', path: '#' },
        { name: 'Terms & Conditions', path: '#' },
    ];

    const quickLinks = [
        { name: 'My Account', path: '#' },
        { name: 'My Cart', path: '/cart' },
        { name: 'Size Chart', path: '#' },
        { name: 'Wishlist', path: '/wishlist' },
        { name: 'Gift Card', path: '#' },
    ];

    const categoriesLinks = [
        { name: 'Athletic Footwear', path: '#' },
        { name: 'Boots for Occasion', path: '#' },
        { name: 'Luxury Leather Shoes', path: '#' },
        { name: 'Sandals & Slides', path: '#' },
        { name: 'Sneakerhead’s Haven', path: '#' },
    ];

    const supportLinks = [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Newsletter', path: '#' },
        { name: 'Gift Cards', path: '#' },
        { name: 'Sign In', path: '#' },
        { name: 'My Account', path: '#' },
    ];

    const paymentIcons = [
        { name: 'Amex', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg' },
        { name: 'Apple Pay', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg' },
        { name: 'Discover', url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg' },
        { name: 'JCB', url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg' },
        { name: 'Mastercard', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
    ];

    return (
        <footer className="bg-[#EAEAE2] pt-20 pb-6">
            <div className="max-w-[1400px] mx-auto px-6 md:px-20 pt-20">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-10">

                    {/* Column 1: INFORMATION */}
                    <div className="pb-4 lg:pb-0">
                        <div 
                            className="flex justify-between items-center cursor-pointer lg:cursor-default"
                            onClick={() => toggleSection('info')}
                        >
                            <h4 className="text-[15px] font-semibold  tracking-[0.1em] mb-0 lg:mb-8 text-[#1a1a1a]">
                                INFORMATION
                            </h4>
                            <span className={`lg:hidden text-2xl transition-transform duration-300 ${openSection === 'info' ? 'rotate-180' : ''}`}>
                                {openSection === 'info' ? '−' : '+'}
                            </span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'info' ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'}`}>
                            <ul className="space-y-3 flex flex-col items-start">
                                {informationLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-gray-500 hover:text-[#A14D4D] transition-all duration-300 text-[15px] hover:translate-x-1 inline-block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: QUICK LINKS */}
                    <div className="pb-4 lg:pb-0">
                        <div 
                            className="flex justify-between items-center cursor-pointer lg:cursor-default"
                            onClick={() => toggleSection('quick')}
                        >
                            <h4 className="text-[15px] font-semibold  tracking-[0.1em] mb-0 lg:mb-8 text-[#1a1a1a]">
                                QUICK LINKS
                            </h4>
                            <span className={`lg:hidden text-2xl transition-transform duration-300 ${openSection === 'quick' ? 'rotate-180' : ''}`}>
                                {openSection === 'quick' ? '−' : '+'}
                            </span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'quick' ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'}`}>
                            <ul className="space-y-3 flex flex-col items-start">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-gray-500 hover:text-[#A14D4D] transition-all duration-300 text-[15px] hover:translate-x-1 inline-block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: CENTER BRAND SECTION (Always Visible) */}
                    <div className="flex flex-col items-center text-center lg:px-4 py-6 lg:py-0">
                        <img src={logoF} alt="Shooz Logo" className="w-32 mb-8 opacity-90" />
                        <div className="space-y-3 text-gray-500 text-[15px] leading-[1.8]">
                            <p className="hover:text-black transition-colors cursor-pointer">T: + (08) 9055 0269</p>
                            <p className="hover:text-black transition-colors cursor-pointer">example@example.com</p>
                            <p className="hover:text-black transition-colors cursor-pointer text-center">
                                50 Porana Place, West Casuarinas,<br />
                                Western Australia, Australia.
                            </p>
                        </div>
                    </div>

                    {/* Column 4: CATEGORIES */}
                    <div className="pb-4 lg:pb-0">
                        <div 
                            className="flex justify-between items-center cursor-pointer lg:cursor-default"
                            onClick={() => toggleSection('categories')}
                        >
                            <h4 className="text-[15px] font-semibold  tracking-[0.1em] mb-0 lg:mb-8 text-[#1a1a1a]">
                                CATEGORIES
                            </h4>
                            <span className={`lg:hidden text-2xl transition-transform duration-300 ${openSection === 'categories' ? 'rotate-180' : ''}`}>
                                {openSection === 'categories' ? '−' : '+'}
                            </span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'categories' ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'}`}>
                            <ul className="space-y-3 flex flex-col items-start">
                                {categoriesLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-gray-500 hover:text-[#A14D4D] transition-all duration-300 text-[15px] hover:translate-x-1 inline-block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 5: SUPPORT */}
                    <div className="pb-4 lg:pb-0">
                        <div 
                            className="flex justify-between  cursor-pointer lg:cursor-default"
                            onClick={() => toggleSection('support')}
                        >
                            <h4 className="text-[15px] font-semibold uppercase tracking-[0.1em] mb-0 lg:mb-8 text-[#1a1a1a]">
                                SUPPORT
                            </h4>
                            <span className={`lg:hidden text-2xl transition-transform duration-300 ${openSection === 'support' ? 'rotate-180' : ''}`}>
                                {openSection === 'support' ? '−' : '+'}
                            </span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'support' ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'}`}>
                            <ul className="space-y-3 flex flex-col items-start">
                                {supportLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-gray-500 hover:text-[#A14D4D] transition-all duration-300 text-[15px] hover:translate-x-1 inline-block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-500 text-[14px] tracking-wide">
                        Copyright © 2024 <span className="text-[#A14D4D] font-bold">Shooz</span>. All rights reserved
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-5 opacity-70">
                        {paymentIcons.map((icon) => (
                            <img
                                key={icon.name}
                                src={icon.url}
                                alt={icon.name}
                                className="h-4 w-auto grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                                title={icon.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
