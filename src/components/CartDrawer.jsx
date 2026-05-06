import React, { useEffect } from 'react';
import { FiX, FiMinus, FiPlus, FiTrash2, FiEdit3, FiTag, FiTruck } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, cartCount, clearCart } = useShop();
  const navigate = useNavigate();
  const [isOrderPlaced, setIsOrderPlaced] = React.useState(false);

  const freeShippingThreshold = 1000;
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(String(item.price).replace('$', '')) || 0;
    return acc + price * item.quantity;
  }, 0);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - totalPrice);
  const progressPercent = Math.min(100, (totalPrice / freeShippingThreshold) * 100);

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

  const handleViewCart = () => {
    onClose();
    navigate('/cart');
  };

  const handleCheckout = () => {
    // Simulate order placement
    setIsOrderPlaced(true);
    // Optionally clear cart after success
    // clearCart(); 
  };

  const handleContinueShopping = () => {
    setIsOrderPlaced(false);
    onClose();
  };

  // Reset order status when drawer is closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setIsOrderPlaced(false), 500); // Wait for transition to finish
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[500px] bg-white z-[101] shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col font-poppins`}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-[#111111]">
            Cart <span className="ml-1 text-gray-400 font-normal">{cartCount}</span>
          </h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-800 hover:text-[#C06C84] transition-colors"
          >
            <FiX />
          </button>
        </div>

        {/* Content Area (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-5 py-4 custom-scrollbar flex flex-col">
          {!isOrderPlaced ? (
            <>
              {/* Free Shipping Progress */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
              <FiTruck className="text-[#C06C84]" />
              {remainingForFreeShipping > 0 ? (
                <span>
                  Spend <span className="font-bold text-[#111111]">${remainingForFreeShipping.toFixed(2)}</span> for Free Shipping
                </span>
              ) : (
                <span className="text-[#27D059] font-bold">You qualify for Free Shipping!</span>
              )}
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C06C84] transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items */}
          <div className="space-y-6">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-50 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-[15px] font-medium text-[#111111] leading-tight hover:text-[#C06C84] cursor-pointer transition-colors">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.title)}
                          className="text-gray-400 hover:text-[#C06C84] transition-colors text-sm underline underline-offset-4"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{item.brand}</p>
                      <p className="text-[14px] font-semibold text-[#C06C84] mt-1">
                        {item.price} x {item.quantity}
                      </p>
                    </div>
                    
                    <div className="flex items-center border border-gray-200 rounded-md w-fit mt-2">
                      <button
                        onClick={() => updateQuantity(item.title, item.quantity - 1)}
                        className="p-1.5 hover:text-[#b13156] transition-colors"
                      >
                        <FiMinus size={14} />
                      </button>
                      <span className="px-3 py-1 text-sm font-medium border-x border-gray-200 min-w-[32px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.title, item.quantity + 1)}
                        className="p-1.5 hover:text-[#bc2c55] transition-colors"
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">Your cart is empty.</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center animate-fadeIn">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#111111] mb-2">Order Placed!</h3>
          <p className="text-gray-500 mb-8 max-w-[280px]">
            Your order has been placed successfully. You will receive a confirmation email shortly.
          </p>
          <button 
            onClick={handleContinueShopping}
            className="bg-[#C06C84] text-white px-8 py-3 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-[#a55b70] transition-all shadow-lg shadow-[#C06C84]/20"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>

        {/* Bottom Section */}
        {!isOrderPlaced && (
          <div className="p-5 border-t border-gray-100 bg-[#F9F9F9]/50">
            {/* Options */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <button className="flex flex-col items-center gap-1.5 py-3 rounded-lg hover:bg-white transition-all text-gray-600 hover:text-[#C06C84]">
                <FiEdit3 size={18} />
                <span className="text-[11px] font-medium uppercase tracking-tight">Order Note</span>
              </button>
              <button className="flex flex-col items-center gap-1.5 py-3 rounded-lg hover:bg-white transition-all text-gray-600 hover:text-[#C06C84]">
                <FiTag size={18} />
                <span className="text-[11px] font-medium uppercase tracking-tight">Coupon</span>
              </button>
              <button className="flex flex-col items-center gap-1.5 py-3 rounded-lg hover:bg-white transition-all text-gray-600 hover:text-[#C06C84]">
                <FiTruck size={18} />
                <span className="text-[11px] font-medium uppercase tracking-tight">Shipping</span>
              </button>
            </div>

            {/* Total Section */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#111111]">Total:</span>
                <span className="text-xl font-bold text-[#111111]">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500">Taxes and shipping calculated at checkout</p>
            </div>

            {/* Checkout Button */}
            <div className="flex gap-2">
              <button 
                  onClick={handleViewCart}
                  className="w-full bg-black hover:bg-gray-800 text-white py-4 transition-colors tracking-widest text-sm uppercase font-bold"
              >
                View Cart
              </button>
              <button 
                onClick={handleCheckout}
                className="w-full bg-[#C06C84] hover:bg-[#a55b70] text-white py-4 transition-colors tracking-widest text-sm shadow-lg shadow-[#C06C84]/20 uppercase font-bold"
              >
                Check Out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
