import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute right-0 top-1/3 w-1/2 h-1/2 bg-mango-100 rounded-l-full blur-3xl opacity-60"></div>
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-leaf-100 rounded-full blur-3xl opacity-50 -translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} className="text-mango-400 fill-mango-400 mr-1" />
                ))}
              </div>
              <span className="ml-2 text-gray-600 text-sm md:text-base">৫০০০+ সন্তুষ্ট গ্রাহক</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6">
              <div className="inline-flex">
                <span className="text-green-600">বাংলা</span>
                <span className="text-red-600">দেশের</span>
              </div>
              <br />
              <span className="bg-gradient-to-r from-mango-600 to-mango-500 bg-clip-text text-transparent">
                সেরা আম
              </span>
              <br />
              <span className="text-leaf-700">আপনার দোরগোড়ায়</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl leading-relaxed">
              প্রিমিয়াম বাংলাদেশি আম সরাসরি তাজা অবস্থায় পৌঁছে যাবে আপনার বাসায়। সম্পূর্ণ প্রাকৃতিক উপায়ে চাষ করা, কোন রাসায়নিক ছাড়া।
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-mango-600 to-mango-500 hover:from-mango-700 hover:to-mango-600 text-white font-bold rounded-full shadow-mango transition-all hover:shadow-mango-lg flex items-center justify-center group">
                <span>এখনই কিনুন</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-5 md:px-6 py-3 md:py-4 border-2 border-mango-500 text-mango-600 hover:bg-mango-50 font-medium rounded-full transition-colors">
                আমাদের সম্পর্কে জানুন
              </button>
            </div>
            
            <div className="flex items-center mt-8 md:mt-12 space-x-4 md:space-x-6">
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Delivery User" 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Delivery User" 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md -ml-4 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
                <img 
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Delivery User" 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md -ml-4 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
              </div>
              <div>
                <div className="font-semibold text-base md:text-lg">৩০+ ডেলিভারি কর্মী</div>
                <div className="text-gray-500 text-xs md:text-sm">দ্রুত ডেলিভারি সেবা</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Images */}
          <div className="relative mt-10 md:mt-0">
            <div className="relative z-20 bg-white p-2 md:p-3 rounded-2xl shadow-mango-lg overflow-visible mb-16 md:mt-6">
              <img 
                src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=1974"
                alt="প্রিমিয়াম আম" 
                className="w-full h-auto rounded-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://images.pexels.com/photos/4185789/pexels-photo-4185789.jpeg?auto=compress&cs=tinysrgb&w=1200";
                }}
              />
              
              {/* Price tag */}
              <div className="absolute top-3 md:top-6 right-3 md:right-6 bg-mango-500 text-white font-bold text-base md:text-xl px-3 md:px-4 py-1 md:py-2 rounded-full shadow-lg transform rotate-6">
                <div className="rotate-0">২০% ছাড়</div>
              </div>
              
              {/* Stats cards - Mobile optimized with flex layout on small screens */}
              <div className="absolute md:hidden flex justify-between w-full left-0 -bottom-16 px-4">
                <div className="flex-1 mr-2 bg-white shadow-lg p-2 rounded-xl transition-transform border border-leaf-100 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-leaf-500 to-leaf-600 rounded-lg flex items-center justify-center mr-2 shadow-md">
                    <span className="text-white text-base font-bold">🥭</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-leaf-700 text-sm">১০০%</h4>
                    <p className="text-xs text-leaf-600 font-medium">অর্গানিক</p>
                  </div>
                </div>
                
                <div className="flex-1 ml-2 bg-white shadow-lg p-2 rounded-xl transition-transform border border-mango-100 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-mango-500 to-mango-600 rounded-lg flex items-center justify-center mr-2 shadow-md">
                    <span className="text-white text-base font-bold">🚚</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-mango-700 text-sm">২৪ ঘন্টা</h4>
                    <p className="text-xs text-mango-600 font-medium">দ্রুত ডেলিভারি</p>
                  </div>
                </div>
              </div>
              
              {/* Desktop stats cards */}
              <div className="hidden md:block absolute left-4 -bottom-14 bg-white shadow-lg p-3 md:p-4 rounded-xl max-w-[180px] animate-float transform hover:scale-105 transition-transform border border-leaf-100">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-leaf-500 to-leaf-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                    <span className="text-white text-xl font-bold">🥭</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-leaf-700">১০০%</h4>
                    <p className="text-xs text-leaf-600 font-medium">অর্গানিক</p>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block absolute right-4 -bottom-14 bg-white shadow-lg p-3 md:p-4 rounded-xl max-w-[180px] animate-float transform hover:scale-105 transition-transform border border-mango-100" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-mango-500 to-mango-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                    <span className="text-white text-xl font-bold">🚚</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-mango-700">২৪ ঘন্টা</h4>
                    <p className="text-xs text-mango-600 font-medium">দ্রুত ডেলিভারি</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -bottom-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-br from-leaf-100 to-leaf-200 rounded-full -z-10 blur-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Brands */}
      <div className="container mx-auto px-4 mt-8 md:mt-12">
        <div className="border-t border-gray-200 pt-6 md:pt-8">
          <h3 className="text-center text-gray-500 mb-4 md:mb-6 text-xs md:text-sm uppercase font-medium tracking-wider">বিশ্বস্ত অংশীদার</h3>
          <div className="flex justify-center flex-wrap items-center gap-4 md:gap-8 lg:gap-16 opacity-70">
            {/* Partner logos with text fallbacks */}
            <div className="flex flex-col items-center">
              <div className="h-7 md:h-8 w-20 md:w-24 bg-orange-50 rounded flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm md:text-base">Daraz</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-7 md:h-8 w-28 md:w-32 bg-pink-50 rounded flex items-center justify-center">
                <span className="text-pink-500 font-bold text-sm md:text-base">foodpanda</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-7 md:h-8 w-20 md:w-24 bg-blue-50 rounded flex items-center justify-center">
                <span className="text-blue-700 font-bold text-sm md:text-base">Pathao</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-7 md:h-8 w-20 md:w-24 bg-orange-50 rounded flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm md:text-base">Nagad</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-7 md:h-8 w-20 md:w-24 bg-pink-50 rounded flex items-center justify-center">
                <span className="text-pink-700 font-bold text-sm md:text-base">bKash</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;