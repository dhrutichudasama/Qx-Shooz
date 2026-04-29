import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import CategorySection from './components/CategorySection';
import CollectionSection from './components/CollectionSection';
import ProductSlider from './components/ProductSlider';
import BannerSection from './components/section6';
import ProductsSection from './components/section7';

import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <CategorySection />
      <ProductSlider />
      <CollectionSection />
      <BannerSection />
      <ProductsSection />
    </div>
  );
}

export default App;

