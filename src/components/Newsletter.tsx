import React from 'react';
import { Send, Bell } from 'lucide-react';

const Newsletter = () => {
  // Fallback image in case the main one fails to load
  const fallbackImage = "https://images.pexels.com/photos/4195527/pexels-photo-4195527.jpeg?auto=compress&cs=tinysrgb&w=1200";
  
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-mango-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left content */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="w-12 h-12 bg-mango-100 rounded-2xl flex items-center justify-center mb-8">
                <Bell className="w-6 h-6 text-mango-600" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                আমাদের <span className="text-mango-600">নিউজলেটার</span> সাবস্ক্রাইব করুন
              </h2>
              
              <p className="text-gray-600 mb-8">
                নতুন আমের প্রজাতি, মৌসুমি অফার এবং বিশেষ ডিসকাউন্ট সম্পর্কে জানতে আমাদের নিউজলেটার সাবস্ক্রাইব করুন। আমরা স্প্যাম ইমেইল পাঠাই না।
              </p>
              
              <form className="mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow">
                    <input 
                      type="email" 
                      placeholder="আপনার ইমেইল এড্রেস" 
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mango-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="px-6 py-4 bg-gradient-to-r from-mango-600 to-mango-500 hover:from-mango-700 hover:to-mango-600 text-white font-medium rounded-xl flex items-center justify-center sm:justify-start gap-2 transition-colors"
                  >
                    <span>সাবস্ক্রাইব</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center -space-x-2">
                  <img 
                    src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Subscriber" 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Subscriber" 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Subscriber" 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <div className="w-8 h-8 rounded-full bg-mango-100 text-mango-600 flex items-center justify-center text-xs font-bold border-2 border-white">
                    +৫k
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">৫,০০০+</span> গ্রাহক ইতিমধ্যে সাবস্ক্রাইব করেছেন
                </p>
              </div>
            </div>
            
            {/* Right image */}
            <div className="relative bg-mango-600 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-mango-500 to-mango-700"></div>
              
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full opacity-20"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full opacity-20"></div>
                <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white rounded-full opacity-20"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white rounded-full opacity-20"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                <div className="aspect-square w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm p-5 animate-float mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/30">
                    <img 
                      src="https://images.pexels.com/photos/6157012/pexels-photo-6157012.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                      alt="Mango Newsletter" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <div className="text-center text-white">
                  <p className="text-white/80 mb-1">সাবস্ক্রাইব করলেই পাচ্ছেন</p>
                  <h3 className="text-xl font-bold mb-2">নিউজলেটার সাবস্ক্রাইবারদের জন্য</h3>
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 font-bold">
                    ১০% ছাড় আপনার প্রথম অর্ডারে
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer pattern */}
        <div className="flex justify-center mt-16">
          <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-20 h-full bg-mango-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 