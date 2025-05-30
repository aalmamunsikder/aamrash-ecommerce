import React from 'react';
import { ShieldCheck, Clock, TrendingUp, Truck } from 'lucide-react';

const MobileAboutUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-leaf-500" />,
      title: '১০০% অর্গানিক',
      description: 'কোন কৃত্রিম রাসায়নিক ব্যবহার করা হয় না আমাদের আম চাষে।'
    },
    {
      icon: <Truck className="w-5 h-5 text-mango-500" />,
      title: 'ফ্রি ডেলিভারি',
      description: 'ঢাকা শহরের যেকোন স্থানে বিনামূল্যে হোম ডেলিভারি।'
    },
    {
      icon: <Clock className="w-5 h-5 text-mango-500" />,
      title: 'দ্রুত সেবা',
      description: 'অর্ডারের ২৪ ঘন্টার মধ্যে ডেলিভারি করা হয়।'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-leaf-500" />,
      title: 'উন্নত মান',
      description: 'সর্বাধিক সুস্বাদু ও উন্নত মানের আম।'
    }
  ];

  return (
    <section className="pt-0 pb-8 relative">
      <div className="container mx-auto px-4">
        {/* Mobile optimized section heading */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-2 flex flex-col items-center">
            <span className="bg-mango-100 text-mango-700 px-3 py-1 rounded-lg inline-block mb-2 text-sm">আমাদের সম্পর্কে</span>
            <span>কেন আমরাই <span className="text-mango-600">সেরা?</span></span>
          </h2>
          <p className="text-gray-600 text-sm">
            আমরা ১৯৯৫ সাল থেকে দেশি আম উৎপাদন এবং সরবরাহের সাথে জড়িত।
          </p>
        </div>

        {/* Mobile optimized featured stats - 2x2 grid */}
        <div className="bg-white rounded-lg shadow-sm p-3 grid grid-cols-2 gap-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-2 rounded-lg hover:bg-mango-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-2 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-xs">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile optimized image and story */}
        <div className="relative mb-4">
          <div className="rounded-lg overflow-hidden shadow-sm">
            <img 
              src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="আম বাগান" 
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.src = "https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=1200";
              }}
            />
          </div>
        </div>

        {/* Mobile optimized company story */}
        <div>
          <h3 className="text-lg font-bold mb-2">আমরা চাষিদের সাথে <span className="text-mango-600">সরাসরি কাজ করি</span></h3>
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">
            আমাদের কৃষকরা চার দশকের বেশি অভিজ্ঞতা নিয়ে আম চাষ করছেন। আমরা মিডলম্যান ছাড়াই সরাসরি কৃষকদের কাছ থেকে আম সংগ্রহ করি।
          </p>
          
          {/* Mobile optimized stats */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="bg-mango-50 p-2 rounded-lg text-center">
              <span className="block text-mango-700 text-lg font-bold">১৫+</span>
              <span className="text-gray-600 text-xs">আম বাগান</span>
            </div>
            <div className="bg-mango-50 p-2 rounded-lg text-center">
              <span className="block text-mango-700 text-lg font-bold">২০০+</span>
              <span className="text-gray-600 text-xs">কৃষক</span>
            </div>
            <div className="bg-mango-50 p-2 rounded-lg text-center">
              <span className="block text-mango-700 text-lg font-bold">১৫+</span>
              <span className="text-gray-600 text-xs">আমের প্রজাতি</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-leaf-500" />,
      title: '১০০% অর্গানিক',
      description: 'কোন কৃত্রিম রাসায়নিক ব্যবহার করা হয় না আমাদের আম চাষে।'
    },
    {
      icon: <Truck className="w-5 h-5 md:w-6 md:h-6 text-mango-500" />,
      title: 'ফ্রি ডেলিভারি',
      description: 'ঢাকা শহরের যেকোন স্থানে বিনামূল্যে হোম ডেলিভারি।'
    },
    {
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-mango-500" />,
      title: 'দ্রুত সেবা',
      description: 'অর্ডারের ২৪ ঘন্টার মধ্যে ডেলিভারি করা হয়।'
    },
    {
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-leaf-500" />,
      title: 'উন্নত মান',
      description: 'সর্বাধিক সুস্বাদু ও উন্নত মানের আম।'
    }
  ];

  return (
    <>
      {/* Show mobile version only on small screens */}
      <div className="md:hidden">
        <MobileAboutUs />
      </div>
      
      {/* Show desktop version only on medium and larger screens */}
      <section className="hidden md:block pt-0 pb-12 md:pb-16 lg:pb-24 relative">
        <div className="container mx-auto px-4">
          {/* Section heading */}
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 flex flex-col items-center">
              <span className="bg-mango-100 text-mango-700 px-3 md:px-4 py-1 rounded-lg inline-block mb-2 text-sm md:text-base">আমাদের সম্পর্কে</span>
              <span>কেন আমরাই <span className="text-mango-600">সেরা?</span></span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">
              আমরা ১৯৯৫ সাল থেকে দেশি আম উৎপাদন এবং সরবরাহের সাথে জড়িত। দেশের বিভিন্ন প্রান্ত থেকে সংগ্রহ করা সেরা মানের আম সরাসরি পৌঁছে দিচ্ছি আপনাদের দোরগোড়ায়।
            </p>
          </div>

          {/* Featured stats */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-mango p-4 md:p-6 lg:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-10 md:mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-mango-50 transition-colors">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center mb-3 md:mb-4 shadow-mango">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Company story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">আমরা চাষিদের সাথে <span className="text-mango-600">সরাসরি কাজ করি</span></h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                আমাদের কৃষকরা চার দশকের বেশি অভিজ্ঞতা নিয়ে আম চাষ করছেন। আমরা মিডলম্যান ছাড়াই সরাসরি কৃষকদের কাছ থেকে আম সংগ্রহ করি যাতে তারা ন্যায্য মূল্য পান এবং আপনিও সেরা মানের আম পান।
              </p>
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                আমরা বিশ্বাস করি পরিবেশ বান্ধব চাষাবাদই হল ভবিষ্যৎ। আমাদের কৃষকরা কোন ধরণের কৃত্রিম রাসায়নিক সার বা কীটনাশক ব্যবহার করেন না।
              </p>
              
              <div className="grid grid-cols-3 gap-2 md:gap-4 mt-6 md:mt-8">
                <div className="bg-mango-50 p-3 md:p-4 rounded-lg md:rounded-xl text-center">
                  <span className="block text-mango-700 text-xl md:text-2xl lg:text-3xl font-bold">১৫+</span>
                  <span className="text-gray-600 text-xs md:text-sm">আম বাগান</span>
                </div>
                <div className="bg-mango-50 p-3 md:p-4 rounded-lg md:rounded-xl text-center">
                  <span className="block text-mango-700 text-xl md:text-2xl lg:text-3xl font-bold">২০০+</span>
                  <span className="text-gray-600 text-xs md:text-sm">কৃষক</span>
                </div>
                <div className="bg-mango-50 p-3 md:p-4 rounded-lg md:rounded-xl text-center">
                  <span className="block text-mango-700 text-xl md:text-2xl lg:text-3xl font-bold">১৫+</span>
                  <span className="text-gray-600 text-xs md:text-sm">আমের প্রজাতি</span>
                </div>
              </div>
            </div>
            
            <div className="lg:order-1 relative">
              <div className="relative z-10">
                <div className="relative rounded-xl overflow-hidden shadow-mango-lg">
                  <img 
                    src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="আম বাগান" 
                    className="w-full h-auto"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=1200";
                    }}
                  />
                </div>
                
                {/* Mobile optimized quote box */}
                <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-full md:w-60 max-w-[260px] bg-white shadow-mango p-3 md:p-4 rounded-lg md:rounded-xl z-20">
                  <div className="flex items-center mb-1 md:mb-2">
                    <img 
                      src="https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                      alt="Farmer" 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-2 md:mr-3"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1200";
                      }}
                    />
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">আবদুল করিম</h4>
                      <p className="text-gray-500 text-xs md:text-sm">আম চাষি, রাজশাহী</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">"আমি তিন দশক ধরে আম চাষ করছি এবং আমরসের সাথে কাজ করে খুবই সন্তুষ্ট।"</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 md:-bottom-8 -right-6 md:-right-8 w-32 h-32 md:w-48 md:h-48 bg-leaf-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 md:-top-8 -left-6 md:-left-8 w-24 h-24 md:w-32 md:h-32 bg-mango-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs; 