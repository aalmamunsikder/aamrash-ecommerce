import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutUs from './components/AboutUs';
import MangoSpecialties from './components/MangoSpecialties';
import Testimonials from './components/Testimonials';
import MangoGallery from './components/MangoGallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-mango-50 font-sans">
      <div className="fixed inset-0 z-0 bg-mango-pattern opacity-5 pointer-events-none"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative py-0 md:py-4">
          <div className="absolute inset-0 bg-gradient-to-b from-mango-50 to-white pointer-events-none"></div>
          <AboutUs />
        </div>
        
        <div className="relative">
          <div className="absolute top-0 left-0 w-1/3 h-32 bg-leaf-100 rounded-br-[10rem] -z-10 opacity-60"></div>
          <FeaturedProducts />
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-mango-100 rounded-full -translate-y-1/2 translate-x-1/3 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-leaf-50 rounded-tr-[20rem] -translate-x-1/4 translate-y-1/4 opacity-70"></div>
          <MangoSpecialties />
        </div>
        
        <div className="relative bg-gradient-to-r from-mango-100 to-mango-50 py-16 md:py-24">
          <MangoGallery />
        </div>
        
        <div className="relative z-10">
          <div className="absolute inset-0 bg-mango-600 skew-y-3 -z-10 transform origin-bottom-right"></div>
          <Testimonials />
        </div>
        
        <div className="relative my-32">
          <Newsletter />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;