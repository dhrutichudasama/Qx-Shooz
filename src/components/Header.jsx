import React, { useState } from 'react';
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiChevronDown,
  FiMenu,
  FiX
} from 'react-icons/fi';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';
import logoIcon from '../assets/logo.webp';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full font-poppins">
      {/* 1. Top Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-[#702963] via-[#D10069] to-[#E31C25] text-white py-3 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-10 text-[14px] font-medium tracking-wide">

          {/* Repeat content twice for seamless loop */}
          <div className="flex items-center gap-6">
            <span>Use code SHOE FRESH20.</span>
            <button className="underline hover:opacity-80">Dismiss</button>

            <span>Get 15% off your first purchase when you sign up for our newsletter.</span>
            <button className="underline hover:opacity-80">Dismiss</button>

            <span>Enjoy 20% off</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Use code SHOE FRESH20.</span>
            <button className="underline hover:opacity-80">Dismiss</button>

            <span>Get 15% off your first purchase when you sign up for our newsletter.</span>
            <button className="underline hover:opacity-80">Dismiss</button>

            <span>Enjoy 20% off</span>
          </div>

        </div>
      </div>

      {/* 2. Secondary Top Bar */}
      <div className="w-full bg-[#F5F5F5] py-3 px-4 md:px-10 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-[12px] text-[#555555]">
          <div className="font-medium">One Day Delivery Available</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
              <span>Login / Register</span>
            </div>
            <div className="flex items-center gap-4">
              <FaFacebookF className="cursor-pointer hover:text-black transition-colors" />
              <FaTwitter className="cursor-pointer hover:text-black transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-black transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Header Section */}
      <nav className="w-full bg-white border-b border-gray-100 py-5 px-4 md:px-10 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">

          {/* Left: Logo */}
          <div className="flex items-center gap-1 group cursor-pointer">
            <img src={logoIcon} alt="Logo" className="h-8 w-auto object-contain transform group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Center: Navigation Menu (Desktop) */}
          <ul className="hidden lg:flex items-center gap-8 text-[16px] text-[#111111]">

            {/* Home */}
            <li className="relative group cursor-pointer text-[#C06C84]">
              Home
              <span className="absolute -bottom-[22px] left-0 w-full h-[2px] bg-[#C06C84]"></span>
            </li>

            {/* SHOP MEGA MENU */}
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#C06C84]">
                Shop
                <FiChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
              </div>

              {/* Mega Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[100vw] bg-white shadow-xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 grid grid-cols-4 gap-10">

                {/* Column 1 */}
                <div>
                  <h3 className="font-semibold mb-4">Men</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="hover:text-[#C06C84] cursor-pointer">Sneakers</li>
                    <li className="hover:text-[#C06C84] cursor-pointer">Boots</li>
                    <li className="hover:text-[#C06C84] cursor-pointer">Formal</li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="font-semibold mb-4">Women</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="hover:text-[#C06C84] cursor-pointer">Heels</li>
                    <li className="hover:text-[#C06C84] cursor-pointer">Flats</li>
                    <li className="hover:text-[#C06C84] cursor-pointer">Sneakers</li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h3 className="font-semibold mb-4">Kids</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="hover:text-[#C06C84] cursor-pointer">School Shoes</li>
                    <li className="hover:text-[#C06C84] cursor-pointer">Casual</li>
                    <li className="hover:text-[#C06C84] cursor-pointer">Sports</li>
                  </ul>
                </div>

                {/* Column 4 (Image) */}
                <div>
                  <img
                    src="/images/shop1.webp"
                    alt="menu"
                    className="rounded-lg object-cover w-full h-[200px]"
                  />
                </div>

              </div>
              </div>
            </li>

            {/* PRODUCT MEGA MENU (same structure reuse) */}
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#C06C84]">
                Product
                <FiChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[100vw] bg-white shadow-xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 grid grid-cols-4 gap-10">
                <div>
                  <h3 className="font-semibold mb-4">Collections</h3>
                  <ul className="space-y-2 text-sm">
                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                    <li>Trending</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Types</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Running</li>
                    <li>Casual</li>
                    <li>Luxury</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Brands</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Nike</li>
                    <li>Adidas</li>
                    <li>Puma</li>
                  </ul>
                </div>

                <div>
                  <img src="/images/header-product.webp" className="rounded-lg h-[200px] object-cover" />
                </div>
              </div>
              </div>
            </li>

            {/* BLOG MEGA MENU */}
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#C06C84]">
                Blog
                <FiChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[100vw] bg-white shadow-xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 grid grid-cols-4 gap-10">
                <div>
                  <h3 className="font-semibold mb-4">Latest Posts</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Fashion Trends</li>
                    <li>Styling Tips</li>
                    <li>Streetwear</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Guides</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Shoe Care</li>
                    <li>Buying Guide</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">News</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Brand Updates</li>
                    <li>Launches</li>
                  </ul>
                </div>

                <div>
                  <img src="/images/header-blog.webp" className="rounded-lg h-[200px] object-cover" />
                </div>
              </div>
              </div>
            </li>

            {/* PAGES DROPDOWN */}
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#C06C84]">
                Pages
                <FiChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
              </div>

              <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[200px] py-3 z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About Us</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact Us</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Privacy Policy</li>
              </ul>
            </li>

            {/* BUY NOW */}
            <li className="relative cursor-pointer hover:text-[#C06C84] transition-colors group">
              <span className="absolute -top-5 right-0 bg-[#27D059] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                Sale
              </span>
              Buy Now
            </li>
          </ul>

          {/* Right: Icons */}
          <div className="flex items-center gap-5 text-xl text-[#333333]">
            <FiSearch className="cursor-pointer hover:text-black transition-colors" />
            <FiUser className="cursor-pointer hover:text-black transition-colors hidden sm:block" />
            <div className="relative cursor-pointer group">
              <FiHeart className="group-hover:text-black transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#C06C84] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer group">
              <FiShoppingBag className="group-hover:text-black transition-colors" />
              <span className="text-[14px] font-bold group-hover:text-black transition-colors">(0)</span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-6 px-10 animate-slide-down">
            <ul className="flex flex-col gap-4 text-lg font-bold text-[#111111]">
              <li className="text-[#C06C84]">Home</li>
              <li className="flex justify-between items-center">Shop <FiChevronDown /></li>
              <li className="flex justify-between items-center">Product <FiChevronDown /></li>
              <li className="flex justify-between items-center">Blog <FiChevronDown /></li>
              <li className="flex justify-between items-center">Pages <FiChevronDown /></li>
              <li className="relative inline-block w-fit">
                Buy Now
                <span className="ml-2 bg-[#27D059] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold align-top">Sale</span>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
