import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-mango-700 to-amber-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              বিশেষ <span className="text-mango-300">অফার</span>
            </h2>
            <p className="text-lg mb-6 text-amber-100 leading-relaxed">
              এখনই অর্ডার দিলে পাচ্ছেন ২০% ছাড়! আমাদের প্রিমিয়াম হিমসাগর আম, লাঙ্গড়া আম এবং আরও অনেক প্রকারের তাজা আমে এই অফার সীমিত সময়ের জন্য।
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="mr-2 text-2xl font-bold">২৩</div>
                <div className="text-xs text-amber-200">
                  <div>দিন</div>
                </div>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="mr-2 text-2xl font-bold">১৬</div>
                <div className="text-xs text-amber-200">
                  <div>ঘন্টা</div>
                </div>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="mr-2 text-2xl font-bold">৫৫</div>
                <div className="text-xs text-amber-200">
                  <div>মিনিট</div>
                </div>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="mr-2 text-2xl font-bold">০৪</div>
                <div className="text-xs text-amber-200">
                  <div>সেকেন্ড</div>
                </div>
              </div>
            </div>
            
            <button className="mt-8 px-8 py-3 bg-mango-400 hover:bg-mango-500 text-gray-900 font-medium rounded-full transition-colors">
              এখনই অর্ডার করুন
            </button>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-mango-300 rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1629119472511-7aa2e0d6b386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                alt="বিশেষ অফার" 
                className="rounded-3xl relative z-10"
              />
              <div className="absolute -right-4 -bottom-4 bg-mango-400 text-gray-900 font-bold text-xl p-4 rounded-full z-20 rotate-6">
                <div className="rotate-0">২০%</div>
                <div className="text-sm">ছাড়</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;