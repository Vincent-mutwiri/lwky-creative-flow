
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

export const NavigationBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav className="w-full py-4 px-8 md:px-12 backdrop-blur-md bg-opacity-90 fixed top-0 left-0 right-0 z-50 bg-lwky-black border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/lwky-logo.svg" alt="LWKY Logo" className="h-10" />
          </a>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="text-white/80 hover:text-lwky-gold transition-colors duration-300">Features</a>
          <a href="#testimonials" className="text-white/80 hover:text-lwky-gold transition-colors duration-300">Testimonials</a>
          <a href="#waitlist" className="text-white/80 hover:text-lwky-gold transition-colors duration-300">Join Now</a>
          <a href="#waitlist" className={cn(
            "btn-primary"
          )}>
            Join Waitlist
          </a>
        </div>
        
        <div className="md:hidden">
          <button 
            className="text-white hover:text-lwky-gold"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-lwky-black border-b border-white/10 animate-fade-in">
          <div className="container mx-auto px-8 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-white/80 hover:text-lwky-gold transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-white/80 hover:text-lwky-gold transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#waitlist" 
              className="text-white/80 hover:text-lwky-gold transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Now
            </a>
            <a 
              href="#waitlist" 
              className="btn-primary inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
