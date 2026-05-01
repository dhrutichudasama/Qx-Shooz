import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategorySection from '../components/CategorySection';
import ProductSlider from '../components/ProductSlider';
import CollectionSection from '../components/CollectionSection';
import BannerSection from '../components/section6';
import ProductsSection from '../components/section7';

export default function Home() {
    return (
        <>
            <HeroSlider />
            <CategorySection />
            <ProductSlider />
            <CollectionSection />
            <BannerSection />
            <ProductsSection />
        </>
    );
}
