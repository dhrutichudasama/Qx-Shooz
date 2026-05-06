import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategorySection from '../components/CategorySection';
import ProductSlider from '../components/ProductSlider';
import CollectionSection from '../components/CollectionSection';
import BannerSection from '../components/Section6';
import ProductsSection from '../components/Section7';
import BackToTop from '../components/BackToTop';

export default function Home() {
    return (
        <>
            <HeroSlider />
            <CategorySection />
            <ProductSlider />
            <CollectionSection />
            <BannerSection />
            <ProductsSection />
            <BackToTop />
        </>
    );
}
