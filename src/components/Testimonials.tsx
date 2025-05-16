import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Default fallback image
  const fallbackAvatar = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400';
  
  const testimonials = [
    {
      id: 1,
      name: 'সাদিয়া আহমেদ',
      role: 'নিয়মিত গ্রাহক',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'আমরসের আম অসাধারণ! আমি প্রতিবছর ওদের কাছ থেকে হিমসাগর আম কিনি। টাটকা, মিষ্টি এবং সময়মত ডেলিভারি হয়।',
      rating: 5
    },
    {
      id: 2,
      name: 'রাফি হাসান',
      role: 'খুচরা ব্যবসায়ী',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'আমি আমরসের পাইকারি গ্রাহক। ওদের আম সবসময় সেরা মানের হয়, কোন সময় খারাপ আম পাঠায় না। আমার গ্রাহকরাও খুব সন্তুষ্ট।',
      rating: 5
    },
    {
      id: 3,
      name: 'নুসরাত জাহান',
      role: 'বাসার গৃহিণী',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'আমার বাচ্চারা আমরসের আম খুব পছন্দ করে। বিশেষ করে ফজলি আম। সবসময় মিষ্টি এবং রসালো হয়। অনলাইন অর্ডার করার পরপরই ডেলিভারি দিয়ে দেয়।',
      rating: 4
    },
    {
      id: 4,
      name: 'তানভীর হোসেন',
      role: 'রেস্টুরেন্ট মালিক',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'আমাদের রেস্টুরেন্টের জন্য আমরা আমরসের আম ব্যবহার করি। ওদের আম থেকে আমরা মিষ্টি এবং ডেজার্ট তৈরি করি। গ্রাহকরা খুব পছন্দ করে।',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side */}
          <div className="lg:w-5/12 mb-10 lg:mb-0 relative">
            <div className="absolute inset-0 bg-mango-600 rounded-3xl blur-3xl opacity-30 transform -rotate-6"></div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                আমাদের <span className="text-mango-300">গ্রাহকদের</span> মতামত
              </h2>
              
              <p className="text-white/80 mb-8 max-w-lg">
                আমাদের অনেক সন্তুষ্ট গ্রাহক আছে যারা প্রতিবছর আমাদের কাছ থেকে আম কিনে থাকেন। তাদের কিছু মতামত এখানে তুলে ধরা হল।
              </p>
              
              <div className="flex space-x-4 mb-6">
                <button 
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index} 
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Testimonial cards */}
          <div className="lg:w-7/12 lg:pl-10">
            <div className="relative h-[440px]">
              {testimonials.map((testimonial, index) => {
                // Calculate position based on activeIndex
                let position = index - activeIndex;
                if (position < 0) position += testimonials.length;
                
                // Calculate styles based on position
                const styles = {
                  0: 'translate-x-0 scale-100 opacity-100 z-30',
                  1: 'translate-x-[15%] lg:translate-x-[10%] scale-90 opacity-60 z-20',
                  2: 'translate-x-[25%] lg:translate-x-[20%] scale-80 opacity-40 z-10',
                  3: 'translate-x-[35%] lg:translate-x-[30%] scale-70 opacity-0 z-0'
                };
                
                const positionClass = styles[position as keyof typeof styles] || styles[3];
                
                return (
                  <div 
                    key={testimonial.id}
                    className={`absolute top-0 left-0 w-full transition-all duration-500 ${positionClass}`}
                  >
                    <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-mango-100 rounded-full transform translate-x-20 -translate-y-20 opacity-70"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                            onError={(e) => {
                              e.currentTarget.src = fallbackAvatar;
                            }}
                          />
                          <div className="ml-4">
                            <h3 className="font-bold text-xl">{testimonial.name}</h3>
                            <p className="text-gray-600">{testimonial.role}</p>
                          </div>
                          <div className="ml-auto">
                            <Quote className="w-8 h-8 text-mango-200" />
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6 text-lg">
                          {testimonial.content}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-5 h-5 ${
                                  i < testimonial.rating 
                                    ? 'text-mango-400 fill-mango-400' 
                                    : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                          
                          <span className="text-sm text-gray-500">
                            {new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 lg:p-10">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">৫,০০০+</h3>
            <p className="text-white/70">সন্তুষ্ট গ্রাহক</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">১৫+</h3>
            <p className="text-white/70">আমের প্রজাতি</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">৯৯%</h3>
            <p className="text-white/70">ডেলিভারি সন্তুষ্টি</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">২৪</h3>
            <p className="text-white/70">ঘন্টা সেবা</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;