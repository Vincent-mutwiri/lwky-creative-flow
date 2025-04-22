
import React from 'react';
import { cn } from "@/lib/utils";
import DashboardMockup from './DashboardMockup';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lwky-black via-lwky-black to-lwky-deep-blue z-0"></div>
      
      {/* Gold accent circles */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-lwky-gold/20 filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-lwky-gold/10 filter blur-3xl"></div>
      <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-lwky-blue/20 filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Power Your <span className="text-lwky-gold">Creative Journey</span> With Instant Funding
            </h1>
            <p className="text-xl text-white/80 max-w-xl">
              Get loans of up to KES 5M at flexible interest rates. Tailored for Kenyan creatives and content creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#waitlist" className={cn(
                "btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
              )}>
                Join the Waitlist
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a href="#features" className={cn(
                "btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
              )}>
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
