import React, { useState } from 'react';

const MangoGallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const categories = [
    { id: 'all', name: 'সবগুলো' },
    { id: 'varieties', name: 'আমের প্রকারভেদ' },
    { id: 'farm', name: 'বাগান' },
    { id: 'harvest', name: 'ফসল সংগ্রহ' },
    { id: 'products', name: 'পণ্য' }
  ];
  
  // Default fallback image for errors
  const fallbackImage = 'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=800';
  
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/6157012/pexels-photo-6157012.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'হিমসাগর আম',
      category: 'varieties',
      size: 'large'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'ল্যাংড়া আম',
      category: 'varieties',
      size: 'small'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'আম বাগান',
      category: 'farm',
      size: 'medium'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/5945679/pexels-photo-5945679.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'আম সংগ্রহের সময়',
      category: 'harvest',
      size: 'medium'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/4195527/pexels-photo-4195527.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'গোপালভোগ আম',
      category: 'varieties',
      size: 'small'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'আম চাষি',
      category: 'farm',
      size: 'small'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'ফজলি আম',
      category: 'varieties',
      size: 'small'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/4022235/pexels-photo-4022235.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'আমের জুস',
      category: 'products',
      size: 'large'
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/4022227/pexels-photo-4022227.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'আম সংরক্ষণ',
      category: 'harvest',
      size: 'medium'
    }
  ];
  
  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section className="py-10 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <p className="inline-block bg-white text-mango-700 px-3 md:px-4 py-1 rounded-lg text-xs sm:text-sm font-medium mb-3 md:mb-4">গ্যালারি</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            আমাদের <span className="text-mango-600">ফটো গ্যালারি</span>
          </h2>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg">
            আমাদের বাগান, আম এবং পণ্যের দৃষ্টিনন্দন ছবি
          </p>
        </div>
        
        {/* Filter tabs - optimized for mobile with scrolling */}
        <div className="flex justify-start md:justify-center mb-8 md:mb-12 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
          <div className="inline-flex bg-white rounded-full p-1 shadow-mango">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === category.id 
                    ? 'bg-mango-500 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-mango-600'
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery grid - optimized for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8">
          {filteredItems.map((item) => {
            // Simplified sizing for mobile-first approach
            const sizeClasses = {
              small: 'col-span-1 row-span-1',
              medium: 'col-span-1 row-span-1',
              large: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2'
            };
            
            return (
              <div 
                key={item.id} 
                className={`${sizeClasses[item.size as keyof typeof sizeClasses]} group relative rounded-lg md:rounded-2xl overflow-hidden shadow-mango hover:shadow-mango-lg transition-shadow`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to a default mango image if loading fails
                    e.currentTarget.src = fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 md:p-6">
                    <h3 className="text-white font-bold text-sm md:text-lg">{item.title}</h3>
                    <p className="text-white/70 text-xs md:text-sm">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-10 md:py-16">
            <p className="text-gray-500 text-sm md:text-base mb-4">এই ক্যাটাগরিতে কোনো ছবি নেই।</p>
            <button 
              className="px-4 md:px-6 py-1.5 md:py-2 bg-mango-100 hover:bg-mango-200 text-mango-700 rounded-lg text-xs md:text-sm font-medium transition-colors"
              onClick={() => setActiveTab('all')}
            >
              সব ছবি দেখুন
            </button>
          </div>
        )}
        
        {/* Instagram link */}
        <div className="mt-10 md:mt-16 text-center">
          <p className="text-gray-700 text-sm md:text-base mb-4">আরও ছবি দেখতে আমাদের সোশ্যাল মিডিয়া ফলো করুন</p>
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-mango-600 to-mango-500 hover:from-mango-700 hover:to-mango-600 text-white text-xs md:text-sm font-medium rounded-full shadow-sm transition-colors"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            আমাদের ইন্সটাগ্রাম ফলো করুন
          </a>
        </div>
      </div>
    </section>
  );
};

export default MangoGallery; 