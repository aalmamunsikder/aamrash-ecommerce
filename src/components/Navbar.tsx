import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md py-2 md:py-3' 
        : 'bg-transparent py-3 md:py-5'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl md:text-2xl mr-1.5 md:mr-2">🥭</span>
              <span className="font-bold text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-mango-600 to-mango-500 bg-clip-text text-transparent">
                আম<span className="text-leaf-600">রস</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-mango-600 font-medium transition-colors">
              হোম
            </a>
            
            <div className="relative group">
              <button 
                className="px-3 py-2 text-gray-700 hover:text-mango-600 font-medium transition-colors flex items-center"
                onClick={() => toggleDropdown('products')}
              >
                আমের প্রকারভেদ
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-mango p-4 min-w-[200px] grid gap-2">
                  <a href="#" className="px-3 py-2 hover:bg-mango-50 rounded-md transition-colors">হিমসাগর</a>
                  <a href="#" className="px-3 py-2 hover:bg-mango-50 rounded-md transition-colors">ল্যাংড়া</a>
                  <a href="#" className="px-3 py-2 hover:bg-mango-50 rounded-md transition-colors">গোপালভোগ</a>
                  <a href="#" className="px-3 py-2 hover:bg-mango-50 rounded-md transition-colors">ফজলি</a>
                  <a href="#" className="px-3 py-2 hover:bg-mango-50 rounded-md transition-colors">আম্রপালি</a>
                </div>
              )}
            </div>
            
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-mango-600 font-medium transition-colors">
              আমাদের সম্পর্কে
            </a>
            
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-mango-600 font-medium transition-colors">
              গ্যালারি
            </a>
            
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-mango-600 font-medium transition-colors">
              যোগাযোগ
            </a>
          </nav>

          {/* Right Side Items */}
          <div className="flex items-center">
            <button className="p-1.5 md:p-2 text-gray-600 hover:text-mango-600 transition-colors relative group">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
              <span className="absolute inset-0 rounded-full group-hover:bg-mango-100/50 scale-0 group-hover:scale-100 transition-transform"></span>
            </button>
            
            <button className="p-1.5 md:p-2 text-gray-600 hover:text-mango-600 transition-colors relative group ml-1">
              <User className="w-4 h-4 md:w-5 md:h-5" />
              <span className="absolute inset-0 rounded-full group-hover:bg-mango-100/50 scale-0 group-hover:scale-100 transition-transform"></span>
            </button>
            
            <button className="p-1.5 md:p-2 text-gray-600 hover:text-mango-600 transition-colors relative group ml-1">
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              <span className="absolute inset-0 rounded-full group-hover:bg-mango-100/50 scale-0 group-hover:scale-100 transition-transform"></span>
              <span className="absolute -top-1 -right-1 bg-mango-500 text-white text-xs rounded-full w-3.5 h-3.5 md:w-4 md:h-4 flex items-center justify-center text-[10px] md:text-xs">
                2
              </span>
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="ml-3 p-1 text-gray-600 hover:text-mango-600 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation - Fullscreen slide-in menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 pt-16 pb-4 px-4 md:hidden overflow-y-auto">
          <nav className="flex flex-col space-y-3 mb-4">
            <a 
              href="#" 
              className="px-3 py-2.5 text-gray-700 active:bg-mango-50 font-medium rounded-md text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              হোম
            </a>
            
            <div>
              <button 
                className="w-full flex justify-between items-center px-3 py-2.5 text-gray-700 font-medium rounded-md text-lg"
                onClick={() => toggleDropdown('mobile-products')}
              >
                <span>আমের প্রকারভেদ</span>
                <ChevronDown className={`ml-1 w-5 h-5 transition-transform ${activeDropdown === 'mobile-products' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'mobile-products' && (
                <div className="pl-4 mt-1 border-l-2 border-mango-200 ml-3 space-y-1">
                  <a 
                    href="#" 
                    className="block px-3 py-2 text-gray-600 active:bg-mango-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    হিমসাগর
                  </a>
                  <a 
                    href="#" 
                    className="block px-3 py-2 text-gray-600 active:bg-mango-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ল্যাংড়া
                  </a>
                  <a 
                    href="#" 
                    className="block px-3 py-2 text-gray-600 active:bg-mango-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    গোপালভোগ
                  </a>
                  <a 
                    href="#" 
                    className="block px-3 py-2 text-gray-600 active:bg-mango-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ফজলি
                  </a>
                  <a 
                    href="#" 
                    className="block px-3 py-2 text-gray-600 active:bg-mango-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    আম্রপালি
                  </a>
                </div>
              )}
            </div>
            
            <a 
              href="#" 
              className="px-3 py-2.5 text-gray-700 active:bg-mango-50 font-medium rounded-md text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              আমাদের সম্পর্কে
            </a>
            
            <a 
              href="#" 
              className="px-3 py-2.5 text-gray-700 active:bg-mango-50 font-medium rounded-md text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              গ্যালারি
            </a>
            
            <a 
              href="#" 
              className="px-3 py-2.5 text-gray-700 active:bg-mango-50 font-medium rounded-md text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              যোগাযোগ
            </a>
          </nav>
          
          <div className="grid grid-cols-3 gap-1 mt-auto pt-5 border-t border-gray-100">
            <button className="flex flex-col items-center justify-center py-3 active:bg-mango-50 rounded-md transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
              <span className="text-xs mt-1 text-gray-600">খুঁজুন</span>
            </button>
            
            <button className="flex flex-col items-center justify-center py-3 active:bg-mango-50 rounded-md transition-colors">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-xs mt-1 text-gray-600">অ্যাকাউন্ট</span>
            </button>
            
            <button className="flex flex-col items-center justify-center py-3 active:bg-mango-50 rounded-md transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              <span className="absolute top-2 right-8 bg-mango-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
              <span className="text-xs mt-1 text-gray-600">কার্ট</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 