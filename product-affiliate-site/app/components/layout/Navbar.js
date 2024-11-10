"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activePath, setActivePath] = useState('/');
  
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
                BdCoolHub
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
