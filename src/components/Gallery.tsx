import React from 'react';
import { ArrowRight } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'আম আইসক্রিম',
      featured: true
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'আম সরবত',
      featured: false
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1153372/pexels-photo-1153372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'মিষ্টি আম',
      featured: false
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'আম মিল্কশেক',
      featured: false
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'আম মিশ্রিত পানীয়',
      featured: false
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'আম কেক',
      featured: false
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'আম সসে পাস্তা',
      featured: false
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/7394818/pexels-photo-7394818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'আম সসে মাংস',
      featured: false
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-gray-800">আমাদের</span>{' '}
            <span className="text-pink-600">গ্যালারি</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            আমাদের বিভিন্ন ধরনের আম এবং আমের তৈরি বিভিন্ন খাবারের ছবি দেখুন।
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                src={item.image} 
                alt={item.category} 
                className="w-full h-48 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full">
                  <span className="text-white font-medium">{item.category}</span>
                  <button className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center float-right">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full transition-colors">
            আরও দেখুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;