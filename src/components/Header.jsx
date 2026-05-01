import React, { useState, useEffect } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/logo.webp';
import CartDrawer from './CartDrawer';
import { useShop } from '../context/ShopContext';

const Header = () => {
  const { wishlistCount, cartCount } = useShop();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Scroll visibility and state
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Control visibility (hide on scroll down, show on scroll up)
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Control height/background on scroll
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Scroll Lock when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* 1. Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* 2. Sidebar Menu (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-screen w-[80%] max-w-[300px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <img src={logoIcon} alt="Logo" className="h-6 w-auto object-contain" />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-2xl text-gray-800 hover:text-[#C06C84] transition-colors"
            >
              <FiX />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex-1 overflow-y-auto py-6 px-6">
            <ul className="flex flex-col gap-4 text-[16px] text-[#111111]">
              <li className="text-[#C06C84] flex justify-between items-center py-3 border-b border-gray-200">Home</li>
              {/* SHOP */}
              <li className="border-b border-gray-200">
                <div
                  onClick={() => toggleMenu("shop")}
                  className="flex justify-between items-center py-2 cursor-pointer hover:text-[#C06C84]"
                >
                  Shop
                  <FiChevronDown
                    className={`transition-transform ${openMenu === "shop" ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {openMenu === "shop" && (
                  <ul className="pl-4 pb-2 text-sm text-gray-600">
                    <li className="py-1">Layouts</li>
                    <li className="py-1">Features</li>
                    <li className="py-1">Hover style</li>
                  </ul>
                )}
              </li>

              {/* PRODUCT */}
              <li className="border-b border-gray-200">
                <div
                  onClick={() => toggleMenu("product")}
                  className="flex justify-between items-center py-2 cursor-pointer hover:text-[#C06C84]"
                >
                  Product <FiChevronDown
                    className={`transition-transform ${openMenu === "product" ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {openMenu === "product" && (
                  <ul className="pl-4 pb-2 text-sm text-gray-600">
                    <li className="py-1">Product Layout</li>
                    <li className="py-1">Product Hover </li>
                    <li className="py-1">Product Feature</li>
                  </ul>
                )}
              </li>

              {/* BLOG */}
              <li className="border-b border-gray-200">
                <div
                  onClick={() => toggleMenu("blog")}
                  className="flex justify-between items-center py-2 cursor-pointer hover:text-[#C06C84]"
                >
                  Blog <FiChevronDown
                    className={`transition-transform ${openMenu === "blog" ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {openMenu === "blog" && (
                  <ul className="pl-4 pb-2 text-sm text-gray-600">
                    <li className="py-1">List Layouts</li>
                    <li className="py-1">List Features</li>
                    <li className="py-1">Articles</li>
                  </ul>
                )}
              </li>

              {/* PAGES */}
              <li className="border-b border-gray-200">
                <div
                  onClick={() => toggleMenu("pages")}
                  className="flex justify-between items-center py-2 cursor-pointer hover:text-[#C06C84]"
                >
                  Pages <FiChevronDown
                    className={`transition-transform ${openMenu === "pages" ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {openMenu === "pages" && (
                  <ul className="pl-4 pb-2 text-sm text-gray-600">
                    <li className="py-1">About us</li>
                    <li className="py-1">Contact</li>
                    <li className="py-1">FAQ</li>
                    <li className="py-1">LookBook</li>
                    <li className="py-1">Size Guide</li>
                    <li className="py-1 hover:text-[#C06C84] cursor-pointer" onClick={() => { navigate('/wishlist'); setIsSidebarOpen(false); }}>Wishlist</li>
                    <li className="py-1 hover:text-[#C06C84] cursor-pointer" onClick={() => { navigate('/cart'); setIsSidebarOpen(false); }}>Cart</li>
                  </ul>
                )}
              </li>
              <li className="relative inline-block w-fit hover:text-[#C06C84] cursor-pointer py-2 border-b border-gray-200">
                Buy Now
                <span className="ml-2 bg-[#27D059] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold align-top">Sale</span>
              </li>
            </ul>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-100 bg-[#F9F9F9]">
            <div className="flex items-center gap-6 text-[#555555]">
              <FaFacebookF className="cursor-pointer hover:text-black transition-colors" />
              <FaTwitter className="cursor-pointer hover:text-black transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-black transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <header
        className={`w-full font-poppins fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
          } ${isScrolled ? 'shadow-lg backdrop-blur-md bg-white/95' : 'bg-white'
          }`}
      >
        {/* Top Announcement Bar (Hidden on scroll) */}
        <div className={`w-full bg-gradient-to-r from-[#702963] via-[#D10069] to-[#E31C25] text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0 py-0' : 'py-3'}`}>
          <div className="whitespace-nowrap animate-marquee flex items-center gap-10 text-[14px] font-medium tracking-wide">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-6">
                <span>Use code SHOE FRESH20.</span>
                <button className="underline hover:opacity-80">Dismiss</button>
                <span>Get 15% off your first purchase when you sign up for our newsletter.</span>
                <button className="underline hover:opacity-80">Dismiss</button>
                <span>Enjoy 20% off</span>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Top Bar (Desktop Only, Hidden on scroll) */}
        <div className={`hidden min-[1000px]:block w-full bg-[#F5F5F5] transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0 py-0 border-none' : 'py-3 border-b border-gray-200'}`}>
          <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center text-[12px] text-[#555555]">
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

        {/* Main Header Section */}
        <nav className={`w-full border-b border-gray-100 transition-all duration-300 relative ${isScrolled
          ? 'h-14 min-[1000px]:h-16'
          : 'h-16 min-[1000px]:h-22'
          }`}>
          <div className="max-w-[1400px] mx-auto w-full h-full px-4 min-[1000px]:px-10 flex items-center">
            {/* Mobile: Hamburger Menu (Left) */}
            <div className="min-[1000px]:hidden flex-1 flex items-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-2xl text-[#111111] hover:text-[#C06C84] transition-colors p-0 flex items-center"
              >
                <FiMenu />
              </button>
            </div>

            {/* Logo: Left on Desktop, Perfectly Centered on Mobile */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-[1000px]:static min-[1000px]:translate-x-0 min-[1000px]:translate-y-0 z-10">
              <a href="/" className="flex items-center group">
                <img
                  src={logoIcon}
                  alt="Logo"
                  className={`h-8 w-auto object-contain transform transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}
                />
              </a>
            </div>

            {/* Desktop Navigation Menu (Hidden below 1000px) */}
            <ul className="hidden min-[1000px]:flex items-center gap-10 text-[16px] text-[#111111] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <li className="relative group cursor-pointer text-[#C06C84]">
                <a href="/">Home</a>
                <span className="absolute -bottom-[6px] left-0 w-full h-[2px] bg-[#C06C84]"></span>
              </li>

              {/* Shop Mega Menu */}
              <li className="static group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#C06C84] transition-colors" onClick={() => navigate('/products')}>
                  Shop <FiChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
                </div>
                <div className="absolute left-0 w-screen bg-white shadow-xl opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 border-t border-gray-100 top-full">
                  <div className="max-w-[1400px] mx-auto px-10 py-12 grid grid-cols-4 gap-10">
                    <div>
                      <h3 className="font-semibold mb-4 text-[#C06C84]">Men</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer">Sneakers</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Boots</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Formal</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4 text-[#C06C84]">Women</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer">Heels</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Flats</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Sneakers</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4 text-[#C06C84]">Kids</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer">School Shoes</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Casual</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Sports</li>
                      </ul>
                    </div>
                    <div>
                      <img src="/images/shop1.webp" alt="menu" className="rounded-lg object-cover w-full h-[150px] shadow-md" />
                    </div>
                  </div>
                </div>
              </li>

              {/* Product Mega Menu */}
              <li className="static group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#C06C84] transition-colors" onClick={() => navigate('/products')}>
                  Product <FiChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
                </div>
                <div className="absolute left-0 w-screen bg-white shadow-xl opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 border-t border-gray-100 top-full">
                  <div className="max-w-[1400px] mx-auto px-10 py-12 grid grid-cols-4 gap-10">
                    <div>
                      <h3 className="font-semibold mb-4">Collections</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer">New Arrivals</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Best Sellers</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Trending</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Types</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer">Running</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Casual</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Luxury</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Brands</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer">Nike</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Adidas</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Puma</li>
                      </ul>
                    </div>
                    <div>
                      <img src="/images/header-product.webp" className="rounded-lg h-[150px] object-cover w-full shadow-md" />
                    </div>
                  </div>
                </div>
              </li>

              {/* Blog Mega Menu */}
               <li className="static group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#C06C84] transition-colors">
                  Blog <FiChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
                </div>
                <div className="absolute left-0 w-screen bg-white shadow-xl opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 border-t border-gray-100 top-full">
                  <div className="max-w-[1400px] mx-auto px-10 py-12 grid grid-cols-4 gap-10">
                    <div>
                      <h3 className="font-semibold mb-4">Collections</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer">New Arrivals</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Best Sellers</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Trending</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Types</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer">Running</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Casual</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Luxury</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Brands</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer">Nike</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Adidas</li>
                        <li className="hover:text-[#C06C84] cursor-pointer">Puma</li>
                      </ul>
                    </div>
                    <div>
                      <img src="/images/header-product.webp" className="rounded-lg h-[150px] object-cover w-full shadow-md" />
                    </div>
                  </div>
                </div>
              </li>

              <li className="relative group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#C06C84] transition-colors">
                  Pages <FiChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
                </div>
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 w-[200px] py-3 z-50 border border-gray-50">
                  <li className="px-4 py-2 hover:bg-gray-50 hover:text-[#C06C84] cursor-pointer transition-colors">About Us</li>
                  <li className="px-4 py-2 hover:bg-gray-50 hover:text-[#C06C84] cursor-pointer transition-colors">Contact Us</li>
                  <li className="px-4 py-2 hover:bg-gray-50 hover:text-[#C06C84] cursor-pointer transition-colors">FAQ</li>
                  <li className="px-4 py-2 hover:bg-gray-50 hover:text-[#C06C84] cursor-pointer transition-colors">LookBook</li>
                  <li className="px-4 py-2 hover:bg-gray-50 hover:text-[#C06C84] cursor-pointer transition-colors">SizeGuide</li>
                  <li className="px-4 py-2 hover:bg-gray-50 hover:text-[#C06C84] cursor-pointer transition-colors">Whishlist</li>
                </ul>
              </li>

              <li className="relative cursor-pointer hover:text-[#C06C84] transition-colors group">
                <span className="absolute -top-5 right-0 bg-[#27D059] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">Sale</span>
                Buy Now
              </li>
            </ul>

            {/* Right: Icons (Search, User, Heart, Cart) */}
            <div className="flex-1 flex items-center justify-end gap-4 min-[1000px]:gap-6 text-xl text-[#333333]">
              <FiSearch
                onClick={() => setSearchOpen(true)}
                className="cursor-pointer hover:text-[#C06C84] transition-colors"
              />
              <FiUser className="cursor-pointer hover:text-[#C06C84] transition-colors hidden min-[1000px]:block" />
              <div className="relative cursor-pointer group" onClick={() => navigate('/wishlist')}>
                <FiHeart className="group-hover:text-[#C06C84] transition-colors" />
                <span className="absolute -top-2 -right-2 bg-[#C06C84] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{wishlistCount}</span>
              </div>
              <div 
                className="flex items-center gap-1 cursor-pointer group"
                onClick={() => setIsCartOpen(true)}
              >
                <FiShoppingBag className="group-hover:text-[#C06C84] transition-colors" />
                <span className="text-[14px] font-bold group-hover:text-[#C06C84] transition-colors hidden sm:block">({cartCount})</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300 ${searchOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setSearchOpen(false)}
      ></div>

      {/* Search Bar */}
      <div
        className={`fixed top-0 left-0 w-full h-[100px] bg-white z-[9999] shadow-md transform transition-transform duration-300 ${searchOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex items-center justify-between px-60 py-10 h-full">

          <input
            type="text"
            placeholder="Search products..."
            className="w-full outline-none text-[24px] border-b border-[#919191]"
            autoFocus
          />

          <button
            onClick={() => setSearchOpen(false)}
            className="text-3xl ml-4"
          >
            ✕
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
