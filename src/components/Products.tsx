import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'হিমসাগর আম',
      price: '৳ ৩৯৯',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
    },
    {
      id: 2,
      name: 'লাঙ্গড়া আম',
      price: '৳ ৪৪৯',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1501746877-14782df58970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    {
      id: 3,
      name: 'গোপালভোগ আম',
      price: '৳ ৩৭৯',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1623930754458-3426d5e9ee0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
    },
    {
      id: 4,
      name: 'ফজলি আম',
      price: '৳ ৪১৯',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1592452320159-e63da9c2e053?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-mango-600">জনপ্রিয়</span> <span className="text-gray-800">আম</span>
            </h2>
            <p className="text-gray-600">
              আমাদের সেরা বিক্রিত আমগুলি থেকে বেছে নিন আপনার পছন্দের রাজাধিরাজ ফল।
            </p>
          </div>
          
          <a 
            href="#" 
            className="text-mango-600 font-medium hover:underline hidden md:block"
          >
            সবগুলো দেখুন →
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
                  <Star className="w-4 h-4 text-mango-400 fill-mango-400" />
                  <span className="absolute -right-6 top-0.5 text-xs font-medium">
                    {product.rating}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-800">{product.name}</h3>
                
                <div className="flex justify-between items-center">
                  <span className="text-mango-600 font-bold">{product.price}</span>
                  
                  <button className="w-10 h-10 bg-mango-100 hover:bg-mango-200 rounded-full flex items-center justify-center transition-colors">
                    <ShoppingCart className="w-5 h-5 text-mango-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 md:hidden">
          <a 
            href="#" 
            className="inline-block px-6 py-3 border border-mango-600 text-mango-600 hover:bg-mango-50 font-medium rounded-full transition-colors"
          >
            সবগুলো দেখুন
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;