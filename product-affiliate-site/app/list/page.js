"use client"
import React, { useState, useMemo } from 'react';
import { Sliders, SortDesc, Star } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/product'

const ProductListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [showTrending, setShowTrending] = useState(false);

  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: 'Over $100', value: '100-plus' }
  ];

  const categories = [
    { label: 'All Categories', value: 'all' },
    { label: 'Tech', value: 'tech' },
    { label: 'Home Decor', value: 'home-decor' },
    { label: 'Utilities', value: 'utilities' }
  ];

  const sortOptions = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Rating', value: 'rating' }
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        if (showTrending && !product.trending) return false;
        if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
        
        if (selectedPriceRange !== 'all') {
          const [min, max] = selectedPriceRange.split('-').map(Number);
          if (max) {
            if (product.price < min || product.price > max) return false;
          } else {
            if (min === 0 && product.price > 50) return false;
            if (min === 100 && product.price < 100) return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
  }, [products, selectedCategory, selectedPriceRange, sortBy, showTrending]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 ">
        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border">
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">Filters</span>
            </div>
            
            {/* Category Filter */}
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <div className="flex items-center gap-2">
              <SortDesc className="w-5 h-5 text-purple-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Trending Toggle */}
            <button
              onClick={() => setShowTrending(!showTrending)}
              className={`px-4 py-2 rounded-md transition-colors ${
                showTrending 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Trending Only
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product}/>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListingPage;