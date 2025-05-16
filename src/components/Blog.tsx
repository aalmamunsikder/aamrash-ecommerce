import React from 'react';
import { CalendarDays } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'আমের স্বাস্থ্য উপকারিতা',
      excerpt: 'আমের পাঁচটি স্বাস্থ্য উপকারিতা জেনে নিন...',
      author: 'রহিম আহমেদ',
      date: '১৫ জুন, ২০২৫',
      image: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      authorImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'আমের আইসক্রিম বানানোর পদ্ধতি',
      excerpt: 'বাড়িতে সহজেই আমের আইসক্রিম বানান...',
      author: 'করিম খান',
      date: '২০ মে, ২০২৫',
      image: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'বাংলাদেশের সেরা আমের জাত',
      excerpt: 'বাংলাদেশের সেরা আমের জাতগুলো সম্পর্কে জানুন...',
      author: 'জাহিদ হাসান',
      date: '২৫ এপ্রিল, ২০২৫',
      image: 'https://images.pexels.com/photos/693795/pexels-photo-693795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      authorImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'আমের চাষ করার পদ্ধতি',
      excerpt: 'আমের চাষ করার পদ্ধতি এবং যত্ন নেওয়ার উপায়...',
      author: 'কামাল হোসেন',
      date: '১০ মার্চ, ২০২৫',
      image: 'https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      authorImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gray-800">আমাদের</span>{' '}
              <span className="text-pink-600">ব্লগ</span>
            </h2>
            <p className="text-gray-600">
              আমের সম্পর্কে জানতে এবং আমের বিভিন্ন ব্যবহার সম্পর্কে জানতে আমাদের ব্লগ পড়ুন।
            </p>
          </div>
          
          <a 
            href="#" 
            className="text-pink-600 font-medium hover:underline hidden md:block"
          >
            সব ব্লগ দেখুন →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-gray-800 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={post.authorImage} 
                      alt={post.author} 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  
                  <a 
                    href="#" 
                    className="text-pink-600 text-sm font-medium hover:underline"
                  >
                    আরও পড়ুন
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 md:hidden">
          <a 
            href="#" 
            className="inline-block px-6 py-3 border border-pink-600 text-pink-600 hover:bg-pink-50 font-medium rounded-full transition-colors"
          >
            সব ব্লগ দেখুন
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;