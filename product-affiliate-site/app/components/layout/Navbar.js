"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import WishlistPopup from './WishListPopup';
import { useWishlist } from '../../context/WishlistContext';

const Navbar = () => {
  const [activePath, setActivePath] = useState('/');
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { wishlist } = useWishlist();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" onClick={() => setActivePath('/')}>
              <span className="text-xl font-bold text-indigo-600">
                BDCoolHub
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path} onClick={() => setActivePath(item.path)}>
                <span
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activePath === item.path
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 text-gray-700 hover:text-indigo-600"
            >
              <Heart className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <WishlistPopup isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </nav>
  );
};

export default Navbar;