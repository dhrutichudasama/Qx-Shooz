import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShoppingCart, FiHeart, FiMinus, FiPlus } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const { addToCart, addToWishlist, wishlistItems } = useShop();
  const [quantity, setQuantity] = React.useState(1);
  const isInWishlist = wishlistItems.some(item => item.title === product?.title);

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md text-gray-800 hover:text-[#C06C84] transition-colors"
            >
              <FiX size={24} />
            </button>

            {/* Left Column: Image */}
            <div className="md:w-1/2 h-[300px] md:h-auto overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column: Details */}
            <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col">
              <div>
                <span className="text-xs font-bold text-[#C06C84] uppercase tracking-widest mb-2 block">
                  {product.brand}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-2 leading-tight">
                  {product.title}
                </h2>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-[#C06C84]">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-lg text-gray-300 line-through font-medium">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                
                <div className="h-px bg-gray-100 w-full mb-6" />
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {product.description || `Experience ultimate comfort and style with the ${product.title}. Crafted with premium materials and designed for durability, these ${product.category?.toLowerCase() || 'shoes'} are perfect for any occasion.`}
                </p>

                {/* Features (Dummy) */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C06C84]" />
                    Breathable mesh upper for ventilation
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C06C84]" />
                    Cushioned midsole for all-day comfort
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C06C84]" />
                    Durable rubber outsole for superior grip
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border-2 border-gray-100 rounded-lg overflow-hidden h-12">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="px-4 h-full hover:bg-gray-50 transition-colors text-gray-600"
                    >
                      <FiMinus />
                    </button>
                    <span className="w-12 text-center font-bold text-[#111111]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="px-4 h-full hover:bg-gray-50 transition-colors text-gray-600"
                    >
                      <FiPlus />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => {
                      addToCart({ ...product, quantity });
                      onClose();
                    }}
                    disabled={product.tag === 'SOLD OUT'}
                    className={`flex-1 min-w-[200px] h-12 bg-black text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-gray-800 transition-all rounded-lg ${product.tag === 'SOLD OUT' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <FiShoppingCart size={18} />
                    {product.tag === 'SOLD OUT' ? 'Sold Out' : 'Add to Cart'}
                  </button>

                  {/* Wishlist Toggle */}
                  <button
                    onClick={() => addToWishlist(product)}
                    className={`w-12 h-12 border-2 border-gray-100 rounded-lg flex items-center justify-center transition-all ${isInWishlist ? 'bg-red-50 border-red-100 text-red-500' : 'text-gray-400 hover:border-black hover:text-black'}`}
                  >
                    <FiHeart className={isInWishlist ? 'fill-current' : ''} size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
