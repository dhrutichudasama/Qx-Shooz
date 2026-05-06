import React, { useState, useEffect } from 'react';
import shop1 from '../assets/shop1.webp';
import shop2 from '../assets/shop2.webp';
import product1 from '../assets/product5.webp';
import blog from '../assets/blog.webp';

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
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoIcon from '../assets/logo.webp';
import CartDrawer from './CartDrawer';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';

const Header = () => {
  const { wishlistCount, cartCount } = useShop();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null);
    setIsSidebarOpen(false);
    setSearchOpen(false);
    setIsLoginOpen(false);
  }, [pathname]);

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

  // Search Logic
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6); // Limit suggestions to 6
      setSuggestions(filtered);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery('');
    setSuggestions([]);
  };

  const handleSuggestionClick = (productId) => {
    navigate(`/product/${productId}`);
    handleSearchClose();
  };

  // Scroll Lock when sidebar or login is open
  useEffect(() => {
    if (isSidebarOpen || isLoginOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen, isLoginOpen]);

  return (
    <>
      {/* 1. Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 transition-opacity duration-300"
            onClick={() => setIsLoginOpen(false)}
          />
          <div className="relative bg-white w-full max-w-[500px] p-8 md:p-14 shadow-2xl rounded-sm">
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            >
              <FiX size={24} />
            </button>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-semibold text-[#111111] mb-4">Login</h2>
              <p className="text-gray-500">Please enter your e-mail and password:</p>
            </div>
            <form className="space-y-6">
              <input type="email" placeholder="Email" className="w-full border border-gray-100 px-4 py-4 focus:border-black outline-none placeholder:text-gray-400" />
              <div className="space-y-4">
                <input type="password" placeholder="Password" className="w-full border border-gray-100 px-4 py-4 focus:border-black outline-none placeholder:text-gray-400" />
                <div className="text-right">
                  <a href="#" className="text-sm text-gray-400 hover:text-black transition-colors underline underline-offset-4 decoration-gray-200">Forgot your password?</a>
                </div>
              </div>
              <button type="button" className="w-full bg-[#b92f56] text-white py-4 font-bold tracking-widest uppercase hover:bg-black transition-all duration-300 mt-4">LOGIN</button>
              <div className="text-center pt-6 text-gray-500">New customer? <a href="https://shopify.com/71465173218/account?locale=en&region_country=AU&buyer_flags=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJxeC1zaG9vei5teXNob3BpZnkuY29tIiwiZmxhZ3MiOltdLCJleHAiOjE3Nzg1MTc4NjYsIm5iZiI6MTc3NzkxMzA2Nn0.l0w38U8J48EoINmhEYhtIMX8B86siqT6jTSHg7J7Qoc" className="text-gray-400 hover:text-black transition-colors underline underline-offset-4 decoration-gray-200 ml-1">Register</a></div>
            </form>
          </div>
        </div>
      )}

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
              className="text-2xl text-gray-800 hover:text-[#C06C84] transition-colors cursor-pointer"
            >
              <FiX />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex-1 overflow-y-auto py-6 px-6 no-scrollbar">
            <ul className="flex flex-col gap-4 text-[16px] text-[#111111] cursor-pointer">
              <li className="text-[#C06C84] flex justify-between items-center py-3 border-b border-gray-200" onClick={() => { navigate('/'); setIsSidebarOpen(false); }}>Home</li>
              
              {/* SHOP */}
              <li className="border-b border-gray-200">
                <div
                  onClick={() => toggleMenu("shop")}
                  className="flex justify-between items-center py-2 cursor-pointer hover:text-[#C06C84] transition-colors"
                >
                  Shop
                  <FiChevronDown
                    className={`transition-transform duration-300 ${openMenu === "shop" ? "rotate-180 text-[#C06C84]" : ""
                      }`}
                  />
                </div>

                <div className={`grid transition-all duration-300 ease-in-out ${openMenu === "shop" ? "grid-rows-[1fr] opacity-100 mb-4" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <ul className="pl-6 pb-2 gap-y-2 flex flex-col text-sm text-gray-600 cursor-pointer">
                      <li className="py-1 hover:text-[#C06C84] transition-colors" onClick={() => { navigate('/products'); setIsSidebarOpen(false); }}>Layouts</li>
                      <li className="py-1 hover:text-[#C06C84] transition-colors" onClick={() => { navigate('/products'); setIsSidebarOpen(false); }}>Features</li>
                      <li className="py-1 hover:text-[#C06C84] transition-colors" onClick={() => { navigate('/products'); setIsSidebarOpen(false); }}>Hover style</li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* PRODUCT */}
              <li className="border-b border-gray-200">
                <div
                  onClick={() => toggleMenu("product")}
                  className="flex justify-between items-center py-2 cursor-pointer hover:text-[#C06C84] transition-colors"
                >
                  Product 
                  <FiChevronDown
                    className={`transition-transform duration-300 ${openMenu === "product" ? "rotate-180 text-[#C06C84]" : ""
                      }`}
                  />
                </div>

                <div className={`grid transition-all duration-300 ease-in-out ${openMenu === "product" ? "grid-rows-[1fr] opacity-100 mb-4" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <ul className="pl-6 pb-2 gap-y-2 flex flex-col text-sm text-gray-600 cursor-pointer">
                      <li className="py-1 hover:text-[#C06C84] transition-colors" onClick={() => { navigate('/products'); setIsSidebarOpen(false); }}>Product Layout</li>
                      <li className="py-1 hover:text-[#C06C84] transition-colors" onClick={() => { navigate('/products'); setIsSidebarOpen(false); }}>Product Hover </li>
                      <li className="py-1 hover:text-[#C06C84] transition-colors" onClick={() => { navigate('/products'); setIsSidebarOpen(false); }}>Product Feature</li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* BLOG */}
              <li className="border-b border-gray-200">
                <div
                  onClick={() => toggleMenu("blog")}
                  className="flex justify-between items-center py-2 cursor-pointer hover:text-[#C06C84] transition-colors"
                >
                  Blog 
                  <FiChevronDown
                    className={`transition-transform duration-300 ${openMenu === "blog" ? "rotate-180 text-[#C06C84]" : ""
                      }`}
                  />
                </div>

                <div className={`grid transition-all duration-300 ease-in-out ${openMenu === "blog" ? "grid-rows-[1fr] opacity-100 mb-4" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <ul className="pl-6 pb-2 gap-y-2 flex flex-col text-sm text-gray-600 cursor-pointer">
                      <li className="py-1 hover:text-[#C06C84] transition-colors" onClick={() => { navigate('/products'); setIsSidebarOpen(false); }}>List Layouts</li>
                      <li className="py-1 hover:text-[#C06C84] transition-colors" onClick={() => { navigate('/products'); setIsSidebarOpen(false); }}>List Features</li>
                      <li className="py-1 hover:text-[#C06C84] transition-colors" onClick={() => { navigate('/products'); setIsSidebarOpen(false); }}>Articles</li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* PAGES */}
              <li className="border-b border-gray-200">
                <div
                  onClick={() => toggleMenu("pages")}
                  className="flex justify-between items-center py-2 cursor-pointer hover:text-[#C06C84] transition-colors"
                >
                  Pages 
                  <FiChevronDown
                    className={`transition-transform duration-300 ${openMenu === "pages" ? "rotate-180 text-[#C06C84]" : ""
                      }`}
                  />
                </div>

                <div className={`grid transition-all duration-300 ease-in-out ${openMenu === "pages" ? "grid-rows-[1fr] opacity-100 mb-4" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <ul className="pl-6 pb-2 gap-y-2 flex flex-col text-sm text-gray-600 cursor-pointer">
                      <li className="py-1 hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => { navigate('/about'); setIsSidebarOpen(false); }}>About us</li>
                      <li className="py-1 hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => { navigate('/contact'); setIsSidebarOpen(false); }}>Contact</li>
                      <li className="py-1 hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => { navigate('/faq'); setIsSidebarOpen(false); }}>FAQ</li>
                      <li className="py-1 hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => { navigate('/wishlist'); setIsSidebarOpen(false); }}>Wishlist</li>
                      <li className="py-1 hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => { navigate('/cart'); setIsSidebarOpen(false); }}>Cart</li>
                    </ul>
                  </div>
                </div>
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
                <span onClick={() => setIsLoginOpen(true)}>Login</span> / <span><a href="https://shopify.com/71465173218/account?locale=en&region_country=AU&buyer_flags=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJxeC1zaG9vei5teXNob3BpZnkuY29tIiwiZmxhZ3MiOltdLCJleHAiOjE3Nzg1MTc4NjYsIm5iZiI6MTc3NzkxMzA2Nn0.l0w38U8J48EoINmhEYhtIMX8B86siqT6jTSHg7J7Qoc">Register</a></span>
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
          : 'h-16 min-[1000px]:h-24'
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
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-screen bg-white shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out border-t border-gray-50">
                  <div className="max-w-7xl mx-auto px-16 py-10 grid grid-cols-5 gap-12">
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                      <h3 className="font-semibold mb-6 text-[#C06C84] text-lg">Men</h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Sneakers</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Boots</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Formal</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>View All</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Collections</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>New Arrivals</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Best Sellers</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Coming Soon</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Sales & Offers</li>
                      </ul>
                    </div>
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-200">
                      <h3 className="font-semibold mb-6 text-[#C06C84] text-lg">Women</h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Heels</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Flats</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Sneakers</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>View All</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Collections</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>New Arrivals</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Best Sellers</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Coming Soon</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Sales & Offers</li>
                      </ul>
                    </div>
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-300">
                      <h3 className="font-semibold mb-6 text-[#C06C84] text-lg">Kids</h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>School Shoes</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Casual</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Sports</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>View All</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Collections</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>New Arrivals</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Best Sellers</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Coming Soon</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Sales & Offers</li>
                      </ul>
                    </div>
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-[400ms]">
                      <div className="relative overflow-hidden shadow-lg group/img">
                        <img src={shop1} alt="menu" className="object-cover w-full h-[200px] transform group-hover/img:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/40 transition-colors duration-300 flex items-center justify-center" onClick={() => navigate('/products')} >
                          <button className="bg-white text-black px-6 py-2 font-bold text-sm tracking-widest opacity-0 translate-y-4 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-300">SHOP NOW</button>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-[500ms]">
                      <div className="relative overflow-hidden shadow-lg group/img">
                        <img src={shop2} alt="menu" className="object-cover w-full h-[200px] transform group-hover/img:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/40 transition-colors duration-300 flex items-center justify-center" onClick={() => navigate('/products')}>
                          <button className="bg-white text-black px-6 py-2 font-bold text-sm tracking-widest opacity-0 translate-y-4 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-300">SHOP NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Product Mega Menu */}
              <li className="static group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#C06C84] transition-colors" onClick={() => navigate('/products')}>
                  Product <FiChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-screen bg-white shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out border-t border-gray-50">
                  <div className="max-w-7xl mx-auto px-16 py-10 grid grid-cols-4 gap-12">
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                      <h3 className="font-semibold mb-6 text-lg">Collections</h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>New Arrivals</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Best Sellers</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Trending</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>View All</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Collections</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Coming Soon</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Sales & Offers</li>
                      </ul>
                    </div>
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-200">
                      <h3 className="font-semibold mb-6 text-lg">Types</h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Running</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Casual</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Luxury</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>View All</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Collections</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>New Arrivals</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Best Sellers</li>
                      </ul>
                    </div>
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-300">
                      <h3 className="font-semibold mb-6 text-lg">Brands</h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Nike</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Adidas</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Puma</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>View All</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/products')}>Collections</li>
                      </ul>
                    </div>
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-[400ms]">
                      <div className="relative overflow-hidden group/img">
                        <img src={product1} alt="product" className="object-cover w-full h-[200px] transform group-hover/img:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <button className="bg-white text-black px-6 py-2 font-bold text-sm tracking-widest opacity-0 translate-y-4 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-300">VIEW PRODUCTS</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Blog Mega Menu */}
              <li className="static group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#C06C84] transition-colors" onClick={() => navigate('/blog')}>
                  Blog <FiChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-screen bg-white shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out border-t border-gray-50">
                  <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-24 xl:px-32 py-10 grid grid-cols-4 gap-12">
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                      <h3 className="font-semibold mb-6 text-lg">Featured Posts</h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/blog')}>Trend Report 2024</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/blog')}>Sneaker Care Guide</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/blog')}>Athletic Performance</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/blog')}>Street Style Inspiration</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/blog')}>Sustainable Footwear</li>
                      </ul>
                    </div>
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-200">
                      <h3 className="font-semibold mb-6 text-lg">Categories</h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/blog')}>Fashion News</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/blog')}>Tips & Tricks</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/blog')}>Expert Reviews</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/blog')}>Community Stories</li>
                      </ul>
                    </div>
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-300">
                      <h3 className="font-semibold mb-6 text-lg">Archive</h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/blog')}>Summer 2023</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/blog')}>Winter Essentials</li>
                        <li className="hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/blog')}>Tech Innovations</li>
                      </ul>
                    </div>
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-[400ms]">
                      <div className="relative overflow-hidden shadow-lg group/img">
                        <img src={blog} alt="blog" className="object-cover w-full h-[250px] transform group-hover/img:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/40 transition-colors duration-300 flex items-center justify-center" onClick={() => navigate('/blog')}>
                          <button className="bg-white text-black px-6 py-2 font-bold text-sm tracking-widest opacity-0 translate-y-4 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-300">READ BLOG</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="relative group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#C06C84] transition-colors">
                  Pages <FiChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
                </div>
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 w-[200px] py-3 z-50 border border-gray-50">
                  <li className="px-4 py-2 hover:bg-gray-50 hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/about')}>About Us</li>
                  <li className="px-4 py-2 hover:bg-gray-50 hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/about')}>About Us 2</li>
                  <li className="px-4 py-2 hover:bg-gray-50 hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/about')}>About Us 3</li>
                  <li className="px-4 py-2 hover:bg-gray-50 hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/contact')}>Contact Us</li>
                  <li className="px-4 py-2 hover:bg-gray-50 hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/faq')}>FAQ</li>
                  <li className="px-4 py-2 hover:bg-gray-50 hover:text-[#C06C84] cursor-pointer transition-colors" onClick={() => navigate('/wishlist')}>Whishlist</li>
                </ul>
              </li>

              <li className="relative cursor-pointer hover:text-[#C06C84] transition-colors group">
                <span className="absolute -top-5 right-0 bg-[#27D059] text-white text-[10px] px-1.5 py-0.5 rounded-full">Sale</span>
                Buy Now
              </li>
            </ul>

            {/* Right: Icons (Search, User, Heart, Cart) */}
            <div className="flex-1 flex items-center justify-end gap-4 min-[1000px]:gap-6 text-xl text-[#333333]">
              <FiSearch
                onClick={() => setSearchOpen(true)}
                className="cursor-pointer hover:text-[#C06C84] transition-colors"
              />
              <FiUser 
                onClick={() => setIsLoginOpen(true)}
                className="cursor-pointer hover:text-[#C06C84] transition-colors hidden min-[1000px]:block" 
              />
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
        onClick={handleSearchClose}
      ></div>

      {/* Search Bar */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-[9999] shadow-md transform transition-transform duration-300 ${searchOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-4xl mx-auto px-6 py-10 relative">
          <div className="flex items-center justify-between border-b border-[#919191] pb-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none text-[20px] md:text-[24px]"
              autoFocus={searchOpen}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearchClose}
              className="text-3xl ml-4 hover:text-[#C06C84] transition-colors"
            >
              <FiX />
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {(suggestions.length > 0 || (searchQuery.trim() !== '' && suggestions.length === 0)) && (
            <div className="absolute left-0 right-0 top-full bg-white shadow-xl max-h-[400px] overflow-y-auto rounded-b-lg border-t border-gray-100">
              {suggestions.length > 0 ? (
                <div className="p-4">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">Suggestions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {suggestions.map((product) => (
                      <div 
                        key={product.id}
                        onClick={() => handleSuggestionClick(product.id)}
                        className="flex items-center gap-4 p-3 hover:bg-gray-50 cursor-pointer rounded-md transition-colors group"
                      >
                        <div className="w-14 h-14 bg-gray-50 rounded overflow-hidden flex-shrink-0">
                          <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-medium text-[#111111] truncate group-hover:text-[#C06C84] transition-colors">{product.title}</h5>
                          <p className="text-xs text-gray-500">{product.brand}</p>
                          <p className="text-xs font-bold text-[#C06C84] mt-1">${product.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-10 text-center text-gray-400 italic">
                  No results found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
