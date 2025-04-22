
import React from 'react';

export const ImageGallery: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-lwky-deep-blue/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-lwky-gold">LWKY</span> Experience
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Take a look at our intuitive dashboard designed specifically for creatives to manage their finances.
          </p>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-5xl mx-auto animate-fade-in">
          <img 
            src="/lovable-uploads/b7c4de74-ce60-4a60-ad1a-e9d5a3b3574f.png" 
            alt="LWKY Dashboard Interface" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
