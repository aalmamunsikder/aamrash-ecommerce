import React from 'react';
import { Leaf, Award, Clock, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-pink-500" />,
      title: 'সম্পূর্ণ প্রাকৃতিক',
      description: 'সেরা মানের আম থেকে প্রাকৃতিক উপাদান দিয়ে তৈরি, কোন কৃত্রিম রঙ বা স্বাদ ছাড়াই।'
    },
    {
      icon: <Award className="w-8 h-8 text-pink-500" />,
      title: 'সেরা মানের আম',
      description: 'দেশের সেরা আম দিয়ে তৈরি, যা সতর্কতার সাথে বাছাই করা হয়।'
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-500" />,
      title: 'দ্রুত সেবা',
      description: 'দ্রুত এবং সহজে অর্ডার করুন, আমরা আপনার দরজায় পৌঁছে দেব।'
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: 'গ্রাহক পরিষেবা',
      description: 'আমাদের দক্ষ গ্রাহক পরিষেবা দল সবসময় আপনাকে সাহায্য করতে প্রস্তুত।'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">কেন আমাদের</span>{' '}
            <span className="text-pink-600">বিশেষ সেবা</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            আমাদের সকল পণ্য প্রাকৃতিক উপাদান দিয়ে তৈরি, যা আপনার স্বাস্থ্যের জন্য ভালো।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300"
            >
              <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;