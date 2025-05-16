import React from 'react';
import { Leaf, Award, TrendingUp } from 'lucide-react';

const MangoSpecialties = () => {
  const fallbackImage = "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=1200";
  
  const varieties = [
    {
      id: 1,
      name: 'হিমসাগর',
      icon: <Leaf className="w-5 h-5 text-leaf-500" />,
      color: 'bg-gradient-to-br from-mango-400 to-mango-300',
      image: 'https://images.pexels.com/photos/6157012/pexels-photo-6157012.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: [
        {
          name: 'স্বাদ',
          value: 'মিষ্টি এবং সুগন্ধযুক্ত'
        },
        {
          name: 'ওজন',
          value: '২০০-৩০০ গ্রাম'
        },
        {
          name: 'উৎপত্তি',
          value: 'যশোর'
        }
      ],
      description: 'হিমসাগর বাংলাদেশের সবচেয়ে জনপ্রিয় আম। এর রং হলুদ, মিষ্টি স্বাদ এবং আকর্ষণীয় গন্ধ।'
    },
    {
      id: 2,
      name: 'ল্যাংড়া',
      icon: <Award className="w-5 h-5 text-mango-600" />,
      color: 'bg-gradient-to-br from-leaf-400 to-leaf-300',
      image: 'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: [
        {
          name: 'স্বাদ',
          value: 'মিষ্টি এবং টক'
        },
        {
          name: 'ওজন',
          value: '১৮০-২৫০ গ্রাম'
        },
        {
          name: 'উৎপত্তি',
          value: 'রাজশাহী'
        }
      ],
      description: 'ল্যাংড়া আম মিষ্টি এবং বিশেষ গন্ধযুক্ত। এর আকার মাঝারি এবং রঙ হলুদ।'
    },
    {
      id: 3,
      name: 'গোপালভোগ',
      icon: <TrendingUp className="w-5 h-5 text-amber-600" />,
      color: 'bg-gradient-to-br from-amber-400 to-amber-300',
      image: 'https://images.pexels.com/photos/4195527/pexels-photo-4195527.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: [
        {
          name: 'স্বাদ',
          value: 'অত্যন্ত মিষ্টি'
        },
        {
          name: 'ওজন',
          value: '২৫০-৩৫০ গ্রাম'
        },
        {
          name: 'উৎপত্তি',
          value: 'ফরিদপুর'
        }
      ],
      description: 'গোপালভোগ আম তার মিষ্টি স্বাদের জন্য বিখ্যাত। এর আকার বড় এবং রঙ হলুদ।'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="inline-block bg-mango-100 text-mango-700 px-4 py-1 rounded-lg text-sm font-medium mb-4">আমের প্রকারভেদ</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            আমাদের <span className="text-mango-600">বিশেষ আম</span> সমূহ
          </h2>
          <p className="text-gray-600 md:text-lg">
            বাংলাদেশের সেরা এবং সবচেয়ে জনপ্রিয় আমের প্রজাতিসমূহ
          </p>
        </div>

        {/* Varieties */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {varieties.map((variety) => (
            <div key={variety.id} className="bg-white rounded-2xl shadow-mango overflow-hidden group hover:shadow-mango-lg transition-all flex flex-col h-full">
              {/* Header */}
              <div className={`${variety.color} p-6 relative overflow-hidden h-48`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-x-16 -translate-y-20 opacity-30"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                      {variety.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{variety.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mt-6">
                    {variety.features.map((feature, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white">
                        <p className="text-white/70 text-xs">{feature.name}</p>
                        <p className="font-medium text-sm">{feature.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Body */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex -mt-16 mb-6 relative">
                  <div className="w-24 h-24 rounded-xl overflow-hidden border-4 border-white shadow-lg bg-white">
                    <img 
                      src={variety.image}
                      alt={variety.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {variety.description}
                </p>
                
                <div className="flex justify-between items-center mt-auto">
                  <a href="#" className="text-mango-600 font-medium hover:underline">
                    বিস্তারিত দেখুন
                  </a>
                  
                  <button className="px-4 py-2 bg-mango-100 hover:bg-mango-200 text-mango-700 rounded-lg font-medium transition-colors">
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Details section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              আমের <span className="text-mango-600">সেরা পুষ্টি</span> ও স্বাস্থ্যগত উপকারিতা
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              আম ভিটামিন A, C এবং অন্যান্য পুষ্টি উপাদানে ভরপুর একটি ফল। এটি রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি, হজম প্রক্রিয়া উন্নত করতে এবং ত্বকের স্বাস্থ্য উন্নত করতে সাহায্য করে।
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-mango-100 rounded-xl flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-xl">🌟</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">ভিটামিন সমৃদ্ধ</h4>
                  <p className="text-gray-600 text-sm">আমে ভিটামিন A, C, E, K সহ অনেক ভিটামিন রয়েছে।</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-leaf-100 rounded-xl flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-xl">🌱</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">অ্যান্টিঅক্সিডেন্ট</h4>
                  <p className="text-gray-600 text-sm">আমে অ্যান্টিঅক্সিডেন্ট থাকে যা ফ্রি র‍্যাডিকেলের বিরুদ্ধে লড়াই করে।</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-xl">💪</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">রোগ প্রতিরোধ ক্ষমতা বাড়ায়</h4>
                  <p className="text-gray-600 text-sm">নিয়মিত আম খাওয়া শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়াতে সাহায্য করে।</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-mango h-64 sm:h-auto relative group">
              <img 
                src="https://images.pexels.com/photos/4022235/pexels-photo-4022235.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Mango Juice" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-white text-xl font-bold mb-2">আমের জুস</h4>
                  <p className="text-white/80 text-sm">
                    তাজা আমের রস থেকে তৈরি। এক গ্লাস আমের জুস আপনাকে দিনভর তাজা রাখবে।
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-mango h-64 sm:h-auto relative group">
              <img 
                src="https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Mango Festival" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-white text-xl font-bold mb-2">আমের উৎসব</h4>
                  <p className="text-white/80 text-sm">
                    রাজশাহীতে প্রতিবছর আম উৎসব হয়। সেখানে নানা প্রজাতির আম পাওয়া যায়।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default MangoSpecialties; 