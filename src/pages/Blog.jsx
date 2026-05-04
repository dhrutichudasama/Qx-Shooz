import React, { useState, useEffect } from 'react';
import { blogs } from '../data/blogs';
import { FiSearch, FiChevronRight, FiCalendar, FiUser, FiClock, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Image Imports
import blog2 from '../assets/blog-2.webp';
import blog3 from '../assets/blog-3.avif';
import blog4 from '../assets/blog-4.webp';

const BlogCard = ({ blog }) => (
    <div className="group bg-white overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-xl transition-all duration-500 rounded-lg">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
            <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
                <span className="bg-[#C06C84] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {blog.category}
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-4 text-[12px] text-gray-400 mb-4 uppercase tracking-widest font-medium">
                <div className="flex items-center gap-1.5">
                    <FiUser size={12} className="text-[#C06C84]" />
                    <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <FiCalendar size={12} className="text-[#C06C84]" />
                    <span>{blog.date}</span>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-[#111111] mb-4 group-hover:text-[#C06C84] transition-colors line-clamp-2 leading-tight">
                {blog.title}
            </h3>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {blog.excerpt}
            </p>

            <div className="mt-auto pt-6 border-t border-gray-50">
                <Link to={`/blog/${blog.id}`} className="text-xs font-bold uppercase tracking-widest text-[#111111] hover:text-[#C06C84] transition-all flex items-center gap-2 group/btn">
                    Read More 
                    <FiChevronRight className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
            </div>
        </div>
    </div>
);

const Sidebar = ({ categories, recentPosts, tags, onSearch }) => (
    <aside className="space-y-12">
        {/* Search */}
        <div>
            <h3 className="text-lg font-bold mb-6 border-b pb-2 uppercase tracking-wider">Search</h3>
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Search articles..." 
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full bg-[#F9F9F9] border-none py-4 pl-6 pr-12 text-sm focus:ring-1 focus:ring-[#C06C84] rounded-md transition-all"
                />
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
        </div>

        {/* Categories */}
        <div>
            <h3 className="text-lg font-bold mb-6 border-b pb-2 uppercase tracking-wider">Categories</h3>
            <ul className="space-y-4">
                {categories.map(cat => (
                    <li key={cat} className="flex justify-between items-center group cursor-pointer">
                        <span className="text-sm text-gray-600 group-hover:text-[#C06C84] transition-colors">{cat}</span>
                        <span className="w-6 h-6 bg-[#F9F9F9] flex items-center justify-center text-[10px] font-bold rounded-full group-hover:bg-[#C06C84] group-hover:text-white transition-all text-gray-400">
                            {blogs.filter(b => b.category === cat).length}
                        </span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Recent Posts */}
        <div>
            <h3 className="text-lg font-bold mb-6 border-b pb-2 uppercase tracking-wider">Recent Posts</h3>
            <div className="space-y-6">
                {recentPosts.map(post => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-4 group">
                        <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
                            <img src={post.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="recent" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-[#111111] group-hover:text-[#C06C84] transition-colors line-clamp-2 leading-snug mb-1">
                                {post.title}
                            </h4>
                            <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                <FiCalendar size={10} /> {post.date}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        {/* Tags */}
        <div>
            <h3 className="text-lg font-bold mb-6 border-b pb-2 uppercase tracking-wider">Tags</h3>
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-[#F9F9F9] text-[11px] font-bold text-gray-500 uppercase tracking-widest hover:bg-[#C06C84] hover:text-white cursor-pointer transition-all rounded-md">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </aside>
);

const BlogHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            subtitle: "LATEST BLOG",
            title: "Eco-Friendly Footwear: Sustainable Style",
            description: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate...",
            image: blog2,
        },
        {
            subtitle: "TRENDING POST",
            title: "The Ultimate Guide to Premium Comfort",
            description: "Discover the secrets behind our most comfortable designs. We combine ergonomics with high-end aesthetics for the modern urban explorer. Experience the next level of footwear.",
            image: blog3,
        },
        {
            subtitle: "FASHION NEWS",
            title: "Minimalism in Modern Shoemaking",
            description: "Less is more. Explore our new collection of minimalist sneakers that define elegance through simplicity and quality materials. Perfect for any occasion.",
            image: blog4,
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[450px] lg:h-[450px] overflow-hidden group">
            <div 
                className="flex h-full transition-transform duration-1000 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full flex flex-col lg:flex-row">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-white flex items-center justify-center px-6 lg:px-24 order-2 lg:order-1">
                            <div className="max-w-xl text-center lg:text-left">
                                <span className="text-[#C06C84] font-bold text-xs lg:text-sm tracking-[0.3em] uppercase mb-4 block">
                                    {slide.subtitle}
                                </span>
                                <h1 className="text-2xl lg:text-3xl font-semibold text-[#111111] mb-6 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                                    {slide.description}
                                </p>
                                <button className="bg-[#111111] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C06C84] transition-all duration-500 shadow-xl hover:shadow-[#C06C84]/20 transform hover:-translate-y-1">
                                    Read More
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/2 h-1/2 lg:h-full order-1 lg:order-2 overflow-hidden">
                            <img 
                                src={slide.image} 
                                alt={slide.title} 
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button 
                onClick={prevSlide}
                className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 hover:bg-white flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 hover:scale-110 active:scale-95"
            >
                <FiChevronLeft className="text-xl text-[#111111]" />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 hover:bg-white flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 hover:scale-110 active:scale-95"
            >
                <FiChevronRight className="text-xl text-[#111111]" />
            </button>
        </section>
    );
};

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const filteredBlogs = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categories = [...new Set(blogs.map(b => b.category))];
    const allTags = [...new Set(blogs.flatMap(b => b.tags))];
    const recentPosts = blogs.slice(0, 3);

    return (
        <div className="bg-white min-h-screen">
            {/* Page Hero Slider */}
            <BlogHero />

            {/* Blog Content */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-20 flex flex-col lg:flex-row gap-16">
                {/* Main Grid */}
                <div className="lg:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {filteredBlogs.map(blog => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>

                    {filteredBlogs.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400 text-lg">No articles found matching your search.</p>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/4">
                    <Sidebar 
                        categories={categories} 
                        recentPosts={recentPosts} 
                        tags={allTags}
                        onSearch={setSearchTerm}
                    />
                </div>
            </div>
        </div>
    );
}
