import React from 'react';
import Hero from './components/home/Hero';
import ProductGrid from './components/products/ProductGrid';
import { products } from './data/product';

const Home = () => {
  const trendingProducts = products.slice(0, 4);
  const techProducts = products.filter(p => p.category === 'tech');
  const homeDecorProducts = products.filter(p => p.category === 'home-decor');

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <ProductGrid title="Trending Products" products={trendingProducts} />
        <ProductGrid title="Tech Products" products={techProducts} />
        <ProductGrid title="Home Decor" products={homeDecorProducts} />
      </main>
    </div>
  );
};

export default Home;