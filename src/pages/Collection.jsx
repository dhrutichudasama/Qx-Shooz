import React, { useState, useEffect, useMemo } from 'react';
import CollectionHero from '../components/CollectionHero';
import CategoryCards from '../components/CategoryCards';
import { products as allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { FiGrid, FiList, FiChevronDown } from 'react-icons/fi';

export default function Collection() {
    // State
    const [products, setProducts] = useState(allProducts);
    const [sortOption, setSortOption] = useState('featured');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
    const [gridCols, setGridCols] = useState(3);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    // Derived Data
    const categories = useMemo(() => [...new Set(allProducts.map(p => p.category))], []);
    const brands = useMemo(() => [...new Set(allProducts.map(p => p.brand))], []);

    // Filter and Sort Logic
    useEffect(() => {
        let result = [...allProducts];

        // Price Filter
        result = result.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);

        // Category Filter
        if (selectedCategories.length > 0) {
            result = result.filter(p => selectedCategories.includes(p.category));
        }

        // Brand Filter
        if (selectedBrands.length > 0) {
            result = result.filter(p => selectedBrands.includes(p.brand));
        }

        // Sorting
        switch (sortOption) {
            case 'a-z':
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'z-a':
                result.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'featured':
            default:
                result = result.filter(p => p.featured).concat(result.filter(p => !p.featured));
                break;
        }

        setProducts(result);
        setCurrentPage(1);
    }, [sortOption, priceRange, selectedCategories, selectedBrands]);

    // Pagination Logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const toggleCategory = (cat) => {
        setSelectedCategories(prev => 
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const toggleBrand = (brand) => {
        setSelectedBrands(prev => 
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    return (
        <div className="bg-white min-h-screen">
            <CollectionHero />
            <CategoryCards />

            <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-12 flex flex-col lg:flex-row gap-12">
                
                {/* SIDEBAR */}
                <aside className="lg:w-1/4">
                    <div className="sticky top-40 space-y-10">
                        {/* Sale */}
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">Filter</span>
                        </div>
                        {/* Category Filter */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 border-b pb-2 uppercase tracking-wider">Collection</h3>
                            <ul className="space-y-3">
                                {categories.map(cat => (
                                    <li key={cat} className="flex items-center gap-3">
                                        <input 
                                            type="checkbox" 
                                            id={cat}
                                            checked={selectedCategories.includes(cat)}
                                            onChange={() => toggleCategory(cat)}
                                            className="w-4 h-4 accent-[#C06C84] cursor-pointer"
                                        />
                                        <label htmlFor={cat} className="text-[15px] text-gray-600 cursor-pointer hover:text-black transition-colors flex-grow">
                                            {cat}
                                        </label>
                                        <span className="text-xs text-gray-400">({allProducts.filter(p => p.category === cat).length})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price Filter */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 border-b pb-2 uppercase tracking-wider">Price</h3>
                            <div className="space-y-4">
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C06C84]"
                                />
                                <div className="flex justify-between text-sm font-medium text-gray-500">
                                    <span>$0</span>
                                    <span>${priceRange.max}</span>
                                </div>
                            </div>
                        </div>

                        {/* Brand Filter */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 border-b pb-2 uppercase tracking-wider">Brand</h3>
                            <ul className="space-y-3">
                                {brands.map(brand => (
                                    <li key={brand} className="flex items-center gap-3">
                                        <input 
                                            type="checkbox" 
                                            id={brand}
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => toggleBrand(brand)}
                                            className="w-4 h-4 accent-[#C06C84] cursor-pointer"
                                        />
                                        <label htmlFor={brand} className="text-[15px] text-gray-600 cursor-pointer hover:text-black transition-colors flex-grow">
                                            {brand}
                                        </label>
                                        <span className="text-xs text-gray-400">({allProducts.filter(p => p.brand === brand).length})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </aside>

                {/* MAIN CONTENT */}
                <main className="lg:w-3/4">
                    
                    {/* TOOLBAR */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 border-b border-gray-100 pb-6">
                        <div className="flex items-center gap-6">
                            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Filter:</span>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => setGridCols(2)}
                                    className={`p-2 transition-colors ${gridCols === 2 ? 'text-black' : 'text-gray-300 hover:text-gray-500'}`}
                                >
                                    <div className="grid grid-cols-2 gap-0.5 w-4 h-4 border border-current p-0.5">
                                        <div className="bg-current"></div><div className="bg-current"></div>
                                        <div className="bg-current"></div><div className="bg-current"></div>
                                    </div>
                                </button>
                                <button 
                                    onClick={() => setGridCols(3)}
                                    className={`p-2 transition-colors ${gridCols === 3 ? 'text-black' : 'text-gray-300 hover:text-gray-500'}`}
                                >
                                    <FiGrid size={20} />
                                </button>
                                <button 
                                    onClick={() => setGridCols(4)}
                                    className={`p-2 transition-colors ${gridCols === 4 ? 'text-black' : 'text-gray-300 hover:text-gray-500 hidden md:block'}`}
                                >
                                    <div className="grid grid-cols-2 gap-0.5 w-5 h-5 border border-current p-0.5">
                                        <div className="bg-current"></div><div className="bg-current"></div><div className="bg-current"></div><div className="bg-current"></div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest whitespace-nowrap">Sort By:</span>
                            <div className="relative group">
                                <select 
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                    className="appearance-none bg-transparent pr-8 pl-2 py-1 text-sm font-semibold focus:outline-none cursor-pointer border-b border-black"
                                >
                                    <option value="featured">Featured</option>
                                    <option value="most-relevant">Most Relevant</option>
                                    <option value="a-z">Alphabetically, A-Z</option>
                                    <option value="z-a">Alphabetically, Z-A</option>
                                    <option value="price-low">Price, Low to High</option>
                                    <option value="price-high">Price, High to Low</option>
                                </select>
                                <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                            <span className="text-sm text-gray-400 ml-4 whitespace-nowrap">{products.length} Products</span>
                        </div>
                    </div>

                    {/* PRODUCT GRID */}
                    <div className={`grid gap-x-6 gap-y-12 transition-all duration-500 ${
                        gridCols === 2 ? 'grid-cols-2' : 
                        gridCols === 3 ? 'grid-cols-2 md:grid-cols-3' : 
                        'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                    }`}>
                        {currentProducts.map((product) => (
                            <ProductCard key={product.id} product={{...product, price: `$${product.price.toFixed(2)}`}} />
                        ))}
                    </div>

                    {/* PAGINATION */}
                    {products.length > productsPerPage && (
                        <div className="mt-20 flex justify-center items-center gap-4">
                            {currentPage > 1 && (
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-black hover:text-black transition-colors"
                                >
                                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            )}
                            {[...Array(totalPages)].map((_, index) => (
                                <button 
                                    key={index + 1}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`w-10 h-10 flex items-center justify-center border border-gray-200 font-semibold transition-colors ${
                                        currentPage === index + 1 
                                        ? 'bg-gray-100 text-black border-black' 
                                        : 'text-gray-400 hover:border-black hover:text-black'
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            {currentPage < totalPages && (
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-black hover:text-black transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    )}

                    {products.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400 text-lg">No products match your filters.</p>
                            <button 
                                onClick={() => {
                                    setSelectedCategories([]);
                                    setSelectedBrands([]);
                                    setPriceRange({ min: 0, max: 100 });
                                }}
                                className="mt-4 text-black underline underline-offset-4 font-semibold"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
}
