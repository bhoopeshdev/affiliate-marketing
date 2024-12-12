'use client'
import { useState, useEffect } from 'react'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'
import { useWishlist } from '../../context/WishlistContext'
import { products } from '../../data/product'

export default function ProductDetails({ params}) {

  // Access the dynamic route parameter `details` directly
  const { details: id } = React.use(params);
  
  const [product, setProduct] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const { addToWishlist, wishlist } = useWishlist()

  useEffect(() => {
    if (id) {
      console.log("id fetched is ",id)
      const foundProduct = products.find(item => item.id === parseInt(2));
      if (foundProduct) {
        setProduct(foundProduct);
        setIsLoading(false); // Stop loading once the product is found
      } else {
        setIsLoading(false); // Stop loading even if the product is not found
      }
    }
  }, [id]); // Trigger this effect whenever the `id` changes

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  // Check if the product exists before checking the wishlist
  const isInWishlist = product && wishlist && wishlist.some(item => item && item.id === product.id);

  const handleAddToWishlist = () => {
    if (!isInWishlist && product) {
      const wishlistItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        images: product.images || [], // Ensure images is an array
      };
      console.log("adding ",product.id)
      addToWishlist(wishlistItem)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-4">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/" className="text-blue-500 hover:text-blue-600">Home</Link>
            <span className="mx-2">&gt;</span>
          </li>
          <li className="flex items-center">
            <Link href="/tech" className="text-blue-500 hover:text-blue-600">Tech</Link>
            <span className="mx-2">&gt;</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-700">{product.category}</span>
          </li>
        </ol>
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="mb-4 relative h-[400px] w-[400px]">
            <img 
              src={product.images[currentImage]} 
              alt={product.name} 
              fill="true"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex space-x-2">
            {product.images.map((img, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentImage(index)}
                className={`border-2 ${index === currentImage ? 'border-blue-500' : 'border-gray-300'} rounded-md overflow-hidden`}
              >
                <img src={img} alt={`${product.name} thumbnail`} width={60} height={60} className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>
            <Button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span className="sr-only">Share</span>
            </Button>
          </div>
          <p className="text-gray-600 mb-4">{product.shortDescription}</p>
          <Button 
            className="mb-4 flex items-center"
            onClick={handleAddToWishlist}
            disabled={isInWishlist}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {isInWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
          </Button>
        </div>
      </div>

      {/* Full Description */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
        <p className="text-gray-700 mb-4">{product.fullDescription}</p>
        <Button>
          <Link href={product.affiliateLink}>
            View on Partner Site
          </Link>
        </Button>
      </div>

      {/* Customer Reviews */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">{review.user}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}