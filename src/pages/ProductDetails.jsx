import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import { FiHeart, FiShoppingBag, FiMinus, FiPlus, FiChevronRight, FiChevronLeft, FiShare2, FiTruck, FiRotateCcw, FiShield, FiTag, FiChevronDown, FiPlusCircle, FiMinusCircle, FiRepeat, FiEye } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import wideBanner from '../assets/wide-banner.webp';
import banner1 from '../assets/banner-1.webp';
import banner2 from '../assets/banner-2.webp';
import banner3 from '../assets/banner-3.webp';

export default function ProductDetails() {
    const { id } = useParams();
    const { addToCart, addToWishlist, wishlistItems } = useShop();
    const product = products.find(p => p.id === parseInt(id)) || products[0];

    const [selectedImage, setSelectedImage] = useState(product.image);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('Purple');
    const [activeTab, setActiveTab] = useState('description');
    const [openFaq, setOpenFaq] = useState(null);

    const isInWishlist = wishlistItems.some(item => item.title === product.title);

    const thumbnails = [product.image, product.hoverImage || product.image, products[5].image, products[6].image, products[10].image].filter(Boolean);

    useEffect(() => {
        setSelectedImage(product.image);
    }, [product]);

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handlePrevImage = () => {
        const currentIndex = thumbnails.indexOf(selectedImage);
        const newIndex = currentIndex <= 0 ? thumbnails.length - 1 : currentIndex - 1;
        setSelectedImage(thumbnails[newIndex]);
    };

    const handleNextImage = () => {
        const currentIndex = thumbnails.indexOf(selectedImage);
        const newIndex = currentIndex === thumbnails.length - 1 ? 0 : currentIndex + 1;
        setSelectedImage(thumbnails[newIndex]);
    };

    return (
        <div className="bg-white">
            {/* Breadcrumbs */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-6 text-sm text-gray-400 flex items-center gap-2">
                <Link to="/" className="hover:text-black transition-colors">Home</Link>
                <FiChevronRight size={14} />
                <Link to="/products" className="hover:text-black transition-colors">Products</Link>
                <FiChevronRight size={14} />
                <span className="text-black">{product.title}</span>
            </div>

            {/* Main Product Section */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-14 pb-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Left: Gallery */}
                    <div className="lg:w-1/2">
                        <div className="relative group overflow-hidden bg-[#F9F9F9] aspect-square flex items-center justify-center">
                            <img 
                                src={selectedImage} 
                                alt={product.title} 
                                className="w-full h-full object-contain p-10 transition-transform duration-700 group-hover:scale-110"
                            />
                            <button onClick={handlePrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <FiChevronLeft />
                            </button>
                            <button onClick={handleNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <FiChevronRight />
                            </button>
                        </div>
                        <div className="flex gap-4 mt-6 overflow-x-auto pb-2 no-scrollbar">
                            {thumbnails.map((img, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => setSelectedImage(img)}
                                    className={`w-24 h-24 flex-shrink-0 cursor-pointer border-2 transition-all p-2 bg-[#F9F9F9] ${selectedImage === img ? 'border-[#C06C84]' : 'border-transparent hover:border-gray-200'}`}
                                >
                                    <img src={img} className="w-full h-full object-contain" alt="thumb" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl font-bold text-[#111111] mb-2">{product.title}</h1>
                        <p className="text-2xl font-semibold text-[#111111] mb-6">${product.price.toFixed(2)}</p>
                        
                        <div className="space-y-6 border-t border-gray-100 py-6">
                            {/* Size Selection */}
                            <div>
                                <h4 className="text-sm font-medium text-gray-500 mb-4">Size : <span className="text-black">{selectedSize}</span></h4>
                                <div className="flex gap-2">
                                    {['S', 'M', 'L'].map(size => (
                                        <button 
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-12 flex items-center justify-center border text-sm font-medium transition-all ${selectedSize === size ? 'border-black bg-white shadow-inner' : 'border-gray-200 hover:border-black text-gray-600'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Selection */}
                            <div>
                                <h4 className="text-sm font-medium text-gray-500 mb-4">Color : <span className="text-black">{selectedColor}</span></h4>
                                <div className="flex flex-wrap gap-3">
                                    {['Black', 'Navy', 'Maroon', 'Tan', 'Rust', 'Teal', 'Magenta', 'Grey', 'Red', 'Beige', 'Orange', 'Burgundy', 'Brown', 'White'].map(color => (
                                        <div 
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-all p-0.5 ${selectedColor === color ? 'border-black' : 'border-transparent'}`}
                                        >
                                            <div className={`w-full h-full rounded-full border border-gray-200 shadow-sm`} style={{ backgroundColor: color.toLowerCase() === 'beige' ? '#F5F5DC' : color.toLowerCase() }}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Size Guide */}
                            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors underline underline-offset-4">
                                <FiTag className="rotate-90" size={14} /> Size Guide
                            </button>

                            {/* Quantity + Buttons Row */}
                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <div className="flex items-center border border-gray-200 h-12 w-32 justify-between px-2 bg-white">
                                    <button onClick={() => handleQuantityChange(-1)} className="p-2 hover:text-[#C06C84] transition-colors"><FiMinus /></button>
                                    <span className="font-semibold">{quantity}</span>
                                    <button onClick={() => handleQuantityChange(1)} className="p-2 hover:text-[#C06C84] transition-colors"><FiPlus /></button>
                                </div>
                                <button 
                                    onClick={() => addToCart({...product, quantity})}
                                    className="flex-grow bg-[#C06C84] text-white h-12 px-6 font-bold tracking-widest uppercase hover:bg-black transition-all flex items-center justify-center gap-2 text-[12px]"
                                >
                                    Add to Cart
                                </button>
                                <button className="flex-grow bg-[#111111] text-white h-12 px-6 font-bold tracking-widest uppercase hover:bg-[#333333] transition-all text-[12px]">
                                    Buy It Now
                                </button>
                            </div>

                            {/* Wishlist + Compare */}
                            <div className="flex items-center gap-6 text-sm py-2">
                                <button 
                                    onClick={() => addToWishlist(product)}
                                    className={`flex items-center gap-2 transition-colors ${isInWishlist ? 'text-red-500' : 'text-gray-600 hover:text-black'}`}
                                >
                                    <FiHeart className={isInWishlist ? 'fill-current' : ''} /> {isInWishlist ? 'In Wishlist' : 'Go To Wishlist'}
                                </button>
                                <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                                    <FiRepeat /> Compare
                                </button>
                            </div>

                            {/* Product Meta Info */}
                            <div className="pt-6 space-y-3 text-sm">
                                <div className="flex gap-4">
                                    <span className="text-gray-400 w-24">Vendor:</span>
                                    <span className="text-gray-600">{product.brand}</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-gray-400 w-24">Type:</span>
                                    <span className="text-gray-600">{product.category}</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-gray-400 w-24">SKU:</span>
                                    <span className="text-gray-600">null</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-gray-400 w-24">Availability:</span>
                                    <span className="text-green-600 font-medium">Available</span>
                                </div>
                            </div>

                            {/* Sale Timer Box */}
                            <div className="border border-gray-300 p-4 flex items-center justify-between mt-8">
                                <div className="flex items-center gap-2 font-bold text-[16px]">
                                    🔥 Sale ends in !
                                </div>
                                <div className="flex gap-4 font-bold text-xl">
                                    <div className="flex flex-col items-center">
                                        <span className="leading-tight">1619</span>
                                        <span className="text-[10px] text-gray-400 font-normal">D</span>
                                    </div>
                                    <span className="text-gray-300">:</span>
                                    <div className="flex flex-col items-center">
                                        <span className="leading-tight">22</span>
                                        <span className="text-[10px] text-gray-400 font-normal">H</span>
                                    </div>
                                    <span className="text-gray-300">:</span>
                                    <div className="flex flex-col items-center">
                                        <span className="leading-tight">33</span>
                                        <span className="text-[10px] text-gray-400 font-normal">M</span>
                                    </div>
                                    <span className="text-gray-300">:</span>
                                    <div className="flex flex-col items-center">
                                        <span className="leading-tight">44</span>
                                        <span className="text-[10px] text-gray-400 font-normal">S</span>
                                    </div>
                                </div>
                            </div>

                            {/* Accordions */}
                            <div className="border-t border-gray-200 mt-8">
                                <button className="w-full flex items-center justify-between py-4 text-sm font-medium text-gray-700 hover:text-black border-b border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <FiTruck className="text-gray-400" /> Shipping information
                                    </div>
                                    <FiPlus className="text-gray-400" />
                                </button>
                                <button className="w-full flex items-center justify-between py-4 text-sm font-medium text-gray-700 hover:text-black border-b border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <FiRotateCcw className="text-gray-400" /> Care Guide
                                    </div>
                                    <FiPlus className="text-gray-400" />
                                </button>
                            </div>

                            {/* Extra Info */}
                            <div className="space-y-4 text-sm text-gray-600 py-6">
                                <div className="flex items-center gap-3">
                                    <FiTag className="text-gray-400" /> 
                                    <span>55% Linen, 45% Rayon</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiShield className="text-gray-400" /> 
                                    <span>Secure payment</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiRotateCcw className="text-gray-400" /> 
                                    <span>2 Year Warranty</span>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="space-y-6 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-3 text-sm">
                                    <FiEye className="text-gray-400" size={18} />
                                    <span className="text-[#C06C84] font-bold">18</span>
                                    <span className="text-gray-600">customers are viewing this product</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <span>🔥</span>
                                    <span className="text-gray-600 uppercase text-[11px] font-bold tracking-widest">30 SOLD IN LAST 18 HOURS</span>
                                </div>

                                {/* Free Shipping Progress */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <FiTruck className="text-gray-400" />
                                        <span>Spend <span className="font-bold text-black">$950.00</span> for Free Shipping</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="w-[15%] h-full bg-[#111111] transition-all duration-1000"></div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8 py-4">
                                    <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors font-medium">
                                        <FiShare2 size={16} /> Share
                                    </button>
                                    <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors font-medium">
                                        <FiShare2 size={16} /> Tweet
                                    </button>
                                    <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors font-medium">
                                        <FiShare2 size={16} /> Pin it
                                    </button>
                                </div>

                                {/* Safe Checkout */}
                                <div className="border border-gray-100 p-6 rounded-md bg-white shadow-sm text-center">
                                    <p className="text-sm font-bold text-gray-700 mb-6">Guarantee safe checkout</p>
                                    <div className="flex justify-center gap-3 opacity-80 grayscale hover:grayscale-0 transition-all">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-6 w-auto object-contain" alt="visa" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-6 w-auto object-contain" alt="mastercard" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" className="h-6 w-auto object-contain" alt="paypal" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg/1200px-Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg.png" className="h-6 w-auto object-contain" alt="gpay" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-14 border-t border-gray-100 py-16">
                <div className="flex justify-center gap-10 mb-12 border-b border-gray-100 pb-4">
                    {['description', 'material', 'review'].map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-sm font-bold uppercase tracking-widest pb-4 relative transition-all ${activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            {tab}
                            {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></span>}
                        </button>
                    ))}
                </div>
                <div className="max-w-4xl mx-auto text-gray-500 leading-relaxed text-center">
                    {activeTab === 'description' && (
                        <p>
                            Product details and additional information go here. This section provides a detailed look at the craftsmanship, history, and key features of the product. Morbi natoque id finibus natoque sapien turpis elementum maximus. Sociosqu auctor a urna consequat laoreet nisi accumsan magna. Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est habitant lacus sagittis vitae.
                        </p>
                    )}
                    {activeTab === 'material' && <p>Premium high-quality breathable mesh upper with lightweight synthetic overlays. Durable rubber outsole for traction and stability.</p>}
                    {activeTab === 'review' && <p>No reviews yet. Be the first to review this product!</p>}
                </div>
            </section>

            {/* Chic Styles Banner */}
            <section className="relative h-[600px] w-full overflow-hidden flex items-center px-6 md:px-20">
                <img src={banner1} className="absolute inset-0 w-full h-full object-cover" alt="banner" />
                <div className="relative z-10 max-w-xl text-white">
                    <p className="text-xs uppercase tracking-widest mb-4 font-medium opacity-80 underline underline-offset-8">THE TRENDY FOOTWEAR STYLE</p>
                    <h2 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">Chic Styles For The Modern Woman</h2>
                    <p className="mb-10 text-lg opacity-90 leading-relaxed">Discover a world of elegance and comfort with our curated collection of footwear designed for every occasion.</p>
                    <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">Shop Collection</button>
                </div>
            </section>

            {/* Features Row */}
            <section className="bg-[#F9F9F9] py-16">
                <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                    {[
                        { icon: <FiTruck size={30} />, title: "Free Shipping", desc: "On all orders over $100" },
                        { icon: <FiRotateCcw size={30} />, title: "Quality Support", desc: "24/7 dedicated support" },
                        { icon: <FiShield size={30} />, title: "Secure & Return", desc: "30 days money back" },
                        { icon: <FiTag size={30} />, title: "Gift Voucher", desc: "Special offers & discounts" }
                    ].map((feature, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="text-[#C06C84] mb-6">{feature.icon}</div>
                            <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeless Styles Section */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-14 py-24 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 relative">
                    <img src={banner2} className="w-full rounded-md shadow-2xl" alt="style" />
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-white rounded-md hidden lg:block">
                        <img src={products[3].image} className="w-full h-full object-cover" alt="small" />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <p className="text-xs uppercase tracking-widest mb-4 font-medium text-gray-400">UNMATCHED CRAFTSMANSHIP & DESIGN</p>
                    <h2 className="text-5xl font-semibold leading-tight mb-8">Timeless Styles With A Modern Edge</h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-10">Our shoes are more than just footwear; they are a statement of style and comfort. We combine traditional techniques with modern technology to create products that stand the test of time.</p>
                    <button className="bg-[#C06C84] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-black transition-all">Discover More</button>
                </div>
            </section>

            {/* For the Explorers Banner */}
            <section className="relative h-[500px] w-full overflow-hidden flex flex-col items-center justify-center text-center px-6">
                <img src={banner3} className="absolute inset-0 w-full h-full object-cover" alt="explorers" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-white">
                    <p className="text-xs uppercase tracking-widest mb-4 font-medium opacity-80">BUILT FOR EVERY TERRAIN</p>
                    <h2 className="text-6xl font-semibold mb-8">For the Explorers.</h2>
                    <p className="max-w-2xl text-lg opacity-80 mb-10">Explore the great outdoors with confidence and style. Our adventure collection is designed to keep you going no matter where the trail leads.</p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <h2 className="text-4xl font-bold text-center mb-16">FAQs</h2>
                <div className="space-y-4">
                    {[
                        { q: "Is the shipping free?", a: "Yes, we offer free shipping on all orders over $100. For orders under $100, a flat rate of $10 applies." },
                        { q: "Where is the best quality?", a: "All our products are crafted from premium materials and undergo rigorous quality checks to ensure they meet our high standards." },
                        { q: "Can I manage counts of my item?", a: "Yes, you can easily update the quantity of items in your cart at any time before proceeding to checkout." }
                    ].map((faq, i) => (
                        <div key={i} className="border-b border-gray-100 pb-4">
                            <button 
                                onClick={() => toggleFaq(i)}
                                className="w-full flex justify-between items-center py-4 text-left font-semibold text-lg hover:text-[#C06C84] transition-colors"
                            >
                                {faq.q}
                                {openFaq === i ? <FiMinusCircle /> : <FiPlusCircle />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 py-4' : 'max-h-0 opacity-0'}`}>
                                <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sale Banner */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-14 pb-24">
                <div className="bg-[#111111] text-white p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-4">Sale Event</h2>
                        <p className="text-gray-400 max-w-md">Don't miss out on our seasonal sale event! Get up to 50% off on selected styles for a limited time only.</p>
                    </div>
                    <div className="relative z-10 flex flex-col items-center md:items-end gap-4">
                        <div className="text-6xl font-bold text-white/10 absolute -top-10 -right-10 md:static md:opacity-100 md:text-7xl">50% OFF</div>
                        <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#C06C84] hover:text-white transition-all whitespace-nowrap">Shop Now</button>
                    </div>
                </div>
            </section>

            {/* You May Also Like */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-14 pb-24">
                <h2 className="text-3xl font-bold text-center mb-16">You may also like</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.slice(0, 4).map(p => (
                        <ProductCard key={p.id} product={{...p, price: `$${p.price.toFixed(2)}`}} />
                    ))}
                </div>
            </section>
        </div>
    );
}
