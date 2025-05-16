import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mango-600 text-white pt-10 md:pt-16 pb-6 md:pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-mango-700 opacity-60"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-mango-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-mango-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-mango-300 rounded-full blur-sm opacity-40"></div>
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-mango-300 rounded-full blur-sm opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-mango-300 rounded-full blur-sm opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Top section with logo and description */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-10 md:mb-16 gap-8">
          <div className="lg:w-1/3">
            <div className="mb-4 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 flex items-center">
                <span className="text-white relative flex items-center">
                  <span className="mr-2 text-xl md:text-2xl">🥭</span>
                  আম<span className="text-mango-300">রস</span>
                </span>
              </h2>
              <p className="text-xs md:text-sm text-mango-200">বাংলাদেশের সেরা আম সরবরাহকারী</p>
            </div>
            
            <p className="text-white/90 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
              আমরা বাংলাদেশের সেরা আম সরবরাহকারী। আমাদের উচ্চমানের আম দেশের প্রত্যন্ত অঞ্চল থেকে সংগ্রহ করা হয়। আমরা আপনাকে সবচেয়ে মিষ্টি এবং রসালো আম সরবরাহ করতে প্রতিশ্রুতিবদ্ধ।
            </p>
            
            <div className="flex space-x-2 md:space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:shadow-lg hover:shadow-mango-700/20"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:shadow-lg hover:shadow-mango-700/20"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:shadow-lg hover:shadow-mango-700/20"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
          
          {/* Links and contact section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 w-full lg:w-2/3 mt-8 lg:mt-0">
            {/* Quick links */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white relative inline-block">
                দ্রুত লিঙ্ক
                <span className="absolute -bottom-2 left-0 w-10 md:w-12 h-0.5 md:h-1 bg-mango-300 rounded-full"></span>
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-mango-300 transition-colors flex items-center text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-mango-300 rounded-full mr-2"></span>
                    আমাদের সম্পর্কে
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-mango-300 transition-colors flex items-center text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-mango-300 rounded-full mr-2"></span>
                    আমের প্রজাতি
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-mango-300 transition-colors flex items-center text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-mango-300 rounded-full mr-2"></span>
                    আম চাষ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-mango-300 transition-colors flex items-center text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-mango-300 rounded-full mr-2"></span>
                    পাইকারি অর্ডার
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-mango-300 transition-colors flex items-center text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-mango-300 rounded-full mr-2"></span>
                    গ্রাহকদের মতামত
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact info */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white relative inline-block">
                যোগাযোগ
                <span className="absolute -bottom-2 left-0 w-10 md:w-12 h-0.5 md:h-1 bg-mango-300 rounded-full"></span>
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <span className="bg-mango-500/30 p-1.5 md:p-2 rounded-lg mr-2 md:mr-3 flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-mango-300" />
                  </span>
                  <span className="text-white/80 text-sm md:text-base">
                    ১২৩ আম বাগান রোড, চাপাইনবাবগঞ্জ, রাজশাহী, বাংলাদেশ
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="bg-mango-500/30 p-1.5 md:p-2 rounded-lg mr-2 md:mr-3 flex-shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-mango-300" />
                  </span>
                  <span className="text-white/80 text-sm md:text-base">+৮৮০ ১৭১২-৩৪৫৬৭৮</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-mango-500/30 p-1.5 md:p-2 rounded-lg mr-2 md:mr-3 flex-shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-mango-300" />
                  </span>
                  <span className="text-white/80 text-sm md:text-base">info@amros.com.bd</span>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white relative inline-block">
                নিউজলেটার
                <span className="absolute -bottom-2 left-0 w-10 md:w-12 h-0.5 md:h-1 bg-mango-300 rounded-full"></span>
              </h3>
              <p className="text-white/80 text-sm md:text-base mb-3 md:mb-4">
                আমাদের নতুন আম ও অফার সম্পর্কে সর্বপ্রথম জানতে সাবস্ক্রাইব করুন
              </p>
              <form className="space-y-2 md:space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="আপনার ইমেইল ঠিকানা"
                    className="w-full bg-white/10 py-2.5 md:py-3 px-3 md:px-4 rounded-lg md:rounded-xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-mango-300 placeholder-white/50 backdrop-blur-sm pr-10 md:pr-12"
                    required
                  />
                  <Mail className="w-4 h-4 md:w-5 md:h-5 absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-mango-300/70" />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-white hover:bg-mango-100 transition-colors text-mango-700 py-2.5 md:py-3 px-3 md:px-4 rounded-lg md:rounded-xl text-xs md:text-sm font-medium hover:shadow-lg hover:shadow-mango-700/20"
                >
                  সাবস্ক্রাইব করুন
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Divider with decorative element */}
        <div className="relative py-2 mb-6 md:mb-8">
          <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-10 md:w-12 h-4 bg-mango-600 flex items-center justify-center">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-mango-300 rounded-full opacity-60"></div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
          <p className="text-white/70 mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} আমরস। সর্বস্বত্ব সংরক্ষিত।
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-white/70 mb-4 md:mb-0">
            <a href="#" className="hover:text-mango-300 transition-colors">ব্যবহারের শর্তাবলী</a>
            <span className="hidden sm:block">•</span>
            <a href="#" className="hover:text-mango-300 transition-colors">গোপনীয়তা নীতি</a>
            <span className="hidden sm:block">•</span>
            <a href="#" className="hover:text-mango-300 transition-colors">কুকি নীতি</a>
          </div>
          
          <p className="text-white/70 mt-2 md:mt-0 flex items-center justify-center md:justify-start">
            <span>Made with</span> 
            <Heart className="w-3 h-3 md:w-4 md:h-4 mx-1 text-mango-300 fill-mango-300" /> 
            <span>in Bangladesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;