import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductGrid = ({ title, products, viewAll = true }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          {viewAll && (
            <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
              View All <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;