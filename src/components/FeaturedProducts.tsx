import React, { useState } from 'react';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('popular');
  
  // Default fallback image for any broken image
  const fallbackImage = 'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=800';
  
  const products = {
    popular: [
      {
        id: 1,
        name: 'হিমসাগর আম',
        description: 'মিষ্টি, সুগন্ধযুক্ত এবং রসালো। বাংলাদেশের সবচেয়ে জনপ্রিয় আম।',
        price: '৳ ৩৯৯',
        oldPrice: '৳ ৪৫০',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/6157012/pexels-photo-6157012.jpeg?auto=compress&cs=tinysrgb&w=800',
        available: true,
        discount: '-11%',
        weight: '১ কেজি'
      },
      {
        id: 2,
        name: 'ল্যাংড়া আম',
        description: 'অত্যন্ত মিষ্টি এবং সুস্বাদু, বিশেষ গন্ধযুক্ত।',
        price: '৳ ৪৪৯',
        oldPrice: '৳ ৫২০',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=800',
        available: true,
        discount: '-14%',
        weight: '১ কেজি'
      },
      {
        id: 3,
        name: 'গোপালভোগ আম',
        description: 'আকারে বড়, রসালো এবং মিষ্টি।',
        price: '৳ ৩৭৯',
        oldPrice: '৳ ৪৩০',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/4195527/pexels-photo-4195527.jpeg?auto=compress&cs=tinysrgb&w=800',
        available: true,
        discount: '-12%',
        weight: '১ কেজি'
      },
      {
        id: 4,
        name: 'ফজলি আম',
        description: 'আকারে সবচেয়ে বড়, মিষ্টি এবং রসালো।',
        price: '৳ ৪১৯',
        oldPrice: '৳ ৪৯০',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=800',
        available: false,
        discount: '-15%',
        weight: '১ কেজি'
      }
    ],
    seasonal: [
      {
        id: 5,
        name: 'আম্রপালি আম',
        description: 'ভারতীয় প্রজাতি, মিষ্টি এবং সুস্বাদু।',
        price: '৳ ৪২৯',
        oldPrice: '৳ ৪৯০',
        rating: 4.6,
        image: 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=800',
        available: true,
        discount: '-12%',
        weight: '১ কেজি'
      },
      {
        id: 6,
        name: 'মালদহ আম',
        description: 'বাংলার ঐতিহ্যবাহী আম। রসালো ও মিষ্টি।',
        price: '৳ ৪৫৯',
        oldPrice: '৳ ৫১০',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/4022220/pexels-photo-4022220.jpeg?auto=compress&cs=tinysrgb&w=800',
        available: true,
        discount: '-10%',
        weight: '১ কেজি'
      },
      {
        id: 7,
        name: 'বোম্বাই আম',
        description: 'আকারে বড়, মিষ্টি এবং রসালো।',
        price: '৳ ৪৯৯',
        oldPrice: '৳ ৫৮০',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg?auto=compress&cs=tinysrgb&w=800',
        available: true,
        discount: '-14%',
        weight: '১ কেজি'
      },
      {
        id: 8,
        name: 'হাড়িভাঙ্গা আম',
        description: 'দারুণ সুগন্ধযুক্ত, মিষ্টি এবং রসালো।',
        price: '৳ ৪৩৯',
        oldPrice: '৳ ৫১০',
        rating: 4.5,
        image: 'https://images.pexels.com/photos/4185789/pexels-photo-4185789.jpeg?auto=compress&cs=tinysrgb&w=800',
        available: false,
        discount: '-14%',
        weight: '১ কেজি'
      }
    ]
  };
  
  return (
    <section className="py-10 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            আমাদের <span className="text-mango-600">ফিচার্ড আম</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg">
            বাংলাদেশের বিভিন্ন অঞ্চল থেকে সংগৃহীত সেরা মানের আম
          </p>
        </div>
        
        {/* Product tabs */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button 
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'popular' 
                  ? 'bg-mango-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-mango-600'
              }`}
              onClick={() => setActiveTab('popular')}
            >
              জনপ্রিয় আম
            </button>
            
            <button 
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'seasonal' 
                  ? 'bg-mango-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-mango-600'
              }`}
              onClick={() => setActiveTab('seasonal')}
            >
              মৌসুমী আম
            </button>
          </div>
        </div>
        
        {/* Products grid - adjusted for better mobile experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products[activeTab as keyof typeof products].map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg md:rounded-2xl overflow-hidden shadow-mango hover:shadow-mango-lg transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to a default mango image if loading fails
                    e.currentTarget.src = fallbackImage;
                  }}
                />
                
                {product.discount && (
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-mango-500 text-white text-xs font-bold rounded-full px-2 py-1">
                    {product.discount}
                  </div>
                )}
                
                {!product.available && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="bg-white/90 px-3 md:px-4 py-1 md:py-2 rounded-lg font-medium text-sm md:text-base text-gray-800">
                      স্টক শেষ
                    </div>
                  </div>
                )}
                
                <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/90 rounded-full p-1 shadow-sm flex items-center px-2">
                  <Star className="w-3 h-3 text-mango-400 fill-mango-400" />
                  <span className="text-xs font-medium ml-1">
                    {product.rating}
                  </span>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 md:p-5">
                <div className="flex justify-between items-start mb-1 md:mb-2">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 group-hover:text-mango-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xs md:text-sm bg-leaf-50 text-leaf-700 px-1.5 md:px-2 py-0.5 md:py-1 rounded">
                    {product.weight}
                  </span>
                </div>
                
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-mango-600 font-bold text-base md:text-lg">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-xs md:text-sm ml-1 md:ml-2">{product.oldPrice}</span>
                    )}
                  </div>
                  
                  <button 
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors ${
                      product.available 
                        ? 'bg-mango-100 hover:bg-mango-200 text-mango-600' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!product.available}
                    aria-label={product.available ? `Add ${product.name} to cart` : `${product.name} out of stock`}
                  >
                    <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all button */}
        <div className="mt-8 md:mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 border-2 border-mango-500 text-mango-600 hover:bg-mango-50 font-medium rounded-full transition-colors text-sm md:text-base"
          >
            সকল আম দেখুন
            <ArrowRight className="ml-1.5 md:ml-2 w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 