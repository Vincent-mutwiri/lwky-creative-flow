
import React, { useEffect, useRef } from 'react';

interface AnimationProviderProps {
  children: React.ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize IntersectionObserver
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the element is in the viewport
        if (entry.isIntersecting) {
          // Add the visible class to trigger the animation
          entry.target.classList.remove('opacity-0');
          
          // Unobserve the element after it's animated
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); // Trigger when at least 10% of the element is visible

    // Select all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in, .animate-slide-in-right');
    
    // Observe each element
    animatedElements.forEach(element => {
      observerRef.current?.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return <>{children}</>;
};

export default AnimationProvider;
