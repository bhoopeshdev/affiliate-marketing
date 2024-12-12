import React from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';
import FeatureCard from './FeatureCard';
import Link from 'next/link';

const Hero = () => {
  const features = [
    {
      icon: Search,
      title: "Expert Curation",
      description: "We search across the web to find unique and innovative products."
    },
    {
      icon: Filter,
      title: "Quality Filter",
      description: "Each product is vetted for quality and value before being listed."
    },
    {
      icon: Sparkles,
      title: "Best Deals",
      description: "We ensure you get the best prices through our affiliate partners."
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <ol className='flex flex-row gap-8 bg-slate-100 px-4 w-full justify-center font-light'>
        <li className='py-4 px-2 hover:bg-slate-200'><Link href='/'>Tech Product</Link></li>
        <li className='py-4 px-2 hover:bg-slate-200'><Link href='/'>Home Decor</Link></li>
        <li className='py-4 px-2 hover:bg-slate-200'><Link href='/'>Utilities</Link></li>
      </ol>
      <div className="animated-gradient py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Discover Curated Products for Modern Living
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
              We handpick the best tech gadgets, home decor, and utilities from trusted retailers to help you make informed purchasing decisions.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;