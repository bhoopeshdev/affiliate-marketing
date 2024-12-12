"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      try {
        const parsedWishlist = JSON.parse(storedWishlist);
        setWishlist(Array.isArray(parsedWishlist) ? parsedWishlist : []);
      } catch (error) {
        console.error('Error parsing wishlist from localStorage:', error);
        setWishlist([]); // Fallback to empty array
      }
    } else {
      setWishlist([]); // Fallback to empty array if nothing in localStorage
    }
  }, []);

  const addToWishlist = (product) => {
    if (!product || typeof product !== 'object' || !product.id || !Array.isArray(product.images)) {
      console.error('Invalid product object:', product);
      return;
    }
    setWishlist((prevWishlist) => {
      const newWishlist = [...prevWishlist, product];
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  const removeFromWishlist = (productId) => {
    if (!productId) {
      console.error('Invalid productId:', productId);
      return;
    }
    setWishlist((prevWishlist) => {
      const newWishlist = prevWishlist.filter((item) => item && item.id !== productId);
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};