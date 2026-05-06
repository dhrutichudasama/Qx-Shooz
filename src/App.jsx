import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import ProductDetails from './pages/ProductDetails';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import './App.css';

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Toaster position="top-right" reverseOrder={false} />
          <ScrollToTop />
          <Header />
          <main className="pt-[80px] min-[1000px]:pt-[160px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Collection />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
