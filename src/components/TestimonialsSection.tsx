
import React from 'react';
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  delay: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, delay }) => {
  return (
    <div 
      className={cn(
        "bg-gradient-to-br from-lwky-deep-blue to-lwky-blue/80 p-6 rounded-xl border border-white/10",
        "flex flex-col animate-slide-up opacity-0"
      )}
      style={{ animationDelay: delay }}
    >
      <div className="mb-4">
        {/* Quotation mark */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-lwky-gold/40">
          <path d="M18.3333 15H10V23.3333C10 27.0152 13.9848 30 17.6667 30H18.3333C20.1743 30 21.6667 28.5076 21.6667 26.6667V18.3333C21.6667 16.4924 20.1743 15 18.3333 15ZM36.6667 15H28.3333V23.3333C28.3333 27.0152 32.3181 30 36 30H36.6667C38.5076 30 40 28.5076 40 26.6667V18.3333C40 16.4924 38.5076 15 36.6667 15Z" fill="currentColor"/>
        </svg>
      </div>
      
      <p className="text-white/80 mb-6 flex-grow">{quote}</p>
      
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lwky-blue to-lwky-gold flex items-center justify-center text-lwky-black font-bold">
          {author[0]}
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-white/60">{role}</p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-lwky-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-lwky-gold">Creatives</span> Are Saying
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join these Kenyan creatives who are already excited about LWKY's potential to transform their financial journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="LWKY is the financial freedom I never knew I needed. As a videographer, I can finally invest in better equipment without waiting months to save up."
            author="Daniel M."
            role="Kenyan Videographer"
            delay="0.1s"
          />
          
          <Testimonial 
            quote="I've struggled to get traditional banks to understand my income stream as a content creator. LWKY actually gets how my business works."
            author="Aisha W."
            role="Instagram Influencer"
            delay="0.3s"
          />
          
          <Testimonial 
            quote="The analytics dashboard will be a game-changer. Having all my creative income in one place will help me make better financial decisions."
            author="Kevin O."
            role="Music Producer"
            delay="0.5s"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
