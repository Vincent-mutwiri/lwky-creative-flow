import React, { useEffect } from 'react';
import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';
import AnimationProvider from '@/components/AnimationProvider';
import ImageGallery from '@/components/ImageGallery';

const Index = () => {
  // Scroll to section if URL has hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
  
  return (
    <AnimationProvider>
      <div className="min-h-screen flex flex-col bg-lwky-black">
        <NavigationBar />
        <main>
          <HeroSection />
          <ImageGallery />
          <FeaturesSection />
          <TestimonialsSection />
          <WaitlistForm />
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  );
};

export default Index;
