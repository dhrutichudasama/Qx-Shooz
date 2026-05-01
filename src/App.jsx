import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Toaster position="top-right" reverseOrder={false} />
          <Header />
          <main className="pt-[80px] min-[1000px]:pt-[160px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Collection />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
