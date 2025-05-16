import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="font-bold text-2xl text-mango-600">
              আম<span className="text-mango-500">রস</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium hover:text-mango-600 transition-colors">হোম</a>
            <a href="#" className="font-medium hover:text-mango-600 transition-colors">আমাদের পণ্য</a>
            <a href="#" className="font-medium hover:text-mango-600 transition-colors">দোকান</a>
            <a href="#" className="font-medium hover:text-mango-600 transition-colors">ব্লগ</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-1 hover:text-mango-600 transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            
            <button className="p-1 hover:text-mango-600 transition-colors" aria-label="Account">
              <User size={20} />
            </button>
            
            <button className="p-1 hover:text-mango-600 transition-colors" aria-label="Cart">
              <ShoppingBag size={20} />
            </button>
            
            <button 
              className="md:hidden p-1 hover:text-mango-600 transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 py-4 px-6 absolute w-full">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="font-medium hover:text-mango-600 transition-colors">হোম</a>
            <a href="#" className="font-medium hover:text-mango-600 transition-colors">আমাদের পণ্য</a>
            <a href="#" className="font-medium hover:text-mango-600 transition-colors">দোকান</a>
            <a href="#" className="font-medium hover:text-mango-600 transition-colors">ব্লগ</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;