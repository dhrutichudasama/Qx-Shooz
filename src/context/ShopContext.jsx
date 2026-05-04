import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const ShopContext = createContext();

export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error('useShop must be used within a ShopProvider');
    }
    return context;
};

export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem('cartItems');
        return localData ? JSON.parse(localData) : [];
    });

    const [wishlistItems, setWishlistItems] = useState(() => {
        const localData = localStorage.getItem('wishlistItems');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToCart = (product) => {
        const addedQuantity = product.quantity || 1;
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.title === product.title);
            if (existingItem) {
                return prev.map((item) =>
                    item.title === product.title
                        ? { ...item, quantity: item.quantity + addedQuantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity: addedQuantity }];
        });
        
        const existingItem = cartItems.find((item) => item.title === product.title);
        if (existingItem) {
            toast.success(`Updated ${product.title} quantity in cart`);
        } else {
            toast.success(`${product.title} added to cart`);
        }
    };

    const removeFromCart = (title) => {
        setCartItems((prev) => prev.filter((item) => item.title !== title));
        toast.error('Removed from cart');
    };

    const updateQuantity = (title, quantity) => {
        if (quantity < 1) return;
        setCartItems((prev) =>
            prev.map((item) =>
                item.title === title ? { ...item, quantity } : item
            )
        );
    };

    const addToWishlist = (product) => {
        setWishlistItems((prev) => {
            const exists = prev.find((item) => item.title === product.title);
            if (exists) {
                return prev.filter(item => item.title !== product.title);
            }
            return [...prev, product];
        });
        
        const exists = wishlistItems.find((item) => item.title === product.title);
        if (exists) {
            toast.error(`Removed ${product.title} from wishlist`);
        } else {
            toast.success(`${product.title} added to wishlist`);
        }
    };

    const removeFromWishlist = (title) => {
        setWishlistItems((prev) => prev.filter((item) => item.title !== title));
        toast.error('Removed from wishlist');
    };

    const moveToCart = (product) => {
        removeFromWishlist(product.title);
        addToCart(product);
    };

    const wishlistCount = wishlistItems.length;
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <ShopContext.Provider
            value={{
                cartItems,
                wishlistItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                addToWishlist,
                removeFromWishlist,
                moveToCart,
                wishlistCount,
                cartCount,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};
