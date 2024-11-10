import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';

const ProductCard = ({ title, description, price, rating, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-3 aspect-h-2">
        <img
          src="/api/placeholder/400/300"
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-2">
          {category}
        </span>
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${price}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <button className="mt-3 w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
          View Deal <ArrowUpRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;