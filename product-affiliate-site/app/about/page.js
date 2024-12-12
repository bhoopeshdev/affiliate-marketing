import React from 'react';
import { ArrowRight, Grid, Layers, Star, Heart } from 'lucide-react';

export default function LandingPage() {

    const categories = [
    {
      title: "Tech Gadgets",
      description: "Smart home devices, productivity tools, and innovative electronics",
      items: ["Smart Home Automation", "Work-From-Home Essentials", "Entertainment Systems"]
    },
    {
      title: "Home Decor",
      description: "Contemporary designs that blend style with functionality",
      items: ["Modern Furniture", "Lighting Solutions", "Decorative Accents"]
    },
    {
      title: "Home Utilities",
      description: "Essential products that make daily life more efficient",
      items: ["Kitchen Innovations", "Organization Solutions", "Sustainable Products"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative animated-gradient">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Discover Curated Products for Modern Living
              </h1>
              <p className="text-xl text-white/90 mb-8">
                We handpick the finest tech gadgets and home essentials to enhance your lifestyle
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Product Showcase" 
                  className="rounded-lg w-full h-64 bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose Our Curated Selection
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Grid className="w-8 h-8 " />, title: 'Expert Selection' },
              { icon : <Heart className="w-8 h-8" />, title : 'User Focused'},
              { icon: <Layers className="w-8 h-8 " />, title: 'Quality Assured' },
              { icon: <Star className="w-8 h-8" />, title: 'Trusted Partners' },
            ].map((feature, i) => (
              <div className='m-2 p-4 bg-white rounded-lg shadow-lg' key={i}>
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">
                  Experience the best in modern living with our carefully selected products.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-blue-500">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                We curate products that enhance your lifestyle
              </h2>
              <p className="text-xl mb-8">
                From smart home devices to elegant decor, discover products that make a difference.
              </p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                View Collection
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i}>
                  <img 
                    src={`/api/placeholder/300/200`}
                    alt={`Showcase ${i}`}
                    className="w-full h-36 object-cover bg-gray-100 rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Categories Section */}
    <h2 className="text-3xl font-bold text-center my-16">
        Categories Covered
    </h2>
    <div className="my-8 mx-4 grid md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
        <div
            key={index}
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg transform transition-all duration-300 hover:shadow-xl"
        >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className='m-0'>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{category.title}</h2>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                    <li
                    key={itemIndex}
                    className="flex items-center text-gray-700 transition-all duration-300 hover:text-purple-600"
                    >
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    {item}
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
        ))}
    </div>

    </div>
  );
}