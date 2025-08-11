import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, animation = 'slide-in-up', delay = 0, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const animationClasses = {
    'slide-in-up': 'slide-in-up',
    'slide-in-left': 'slide-in-left',
    'slide-in-right': 'slide-in-right',
    'fade-in': 'opacity-0 transition-opacity duration-1000',
    'scale-in': 'scale-95 opacity-0 transition-all duration-700',
    'bounce-in': 'transform translate-y-10 opacity-0 transition-all duration-700'
  };

  const getAnimationClass = () => {
    if (!isVisible) return animationClasses[animation] || animationClasses['slide-in-up'];
    
    switch (animation) {
      case 'fade-in':
        return 'opacity-100 transition-opacity duration-1000';
      case 'scale-in':
        return 'scale-100 opacity-100 transition-all duration-700';
      case 'bounce-in':
        return 'transform translate-y-0 opacity-100 transition-all duration-700';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      className={getAnimationClass()}
      style={{ animationDelay: isVisible ? `${delay}s` : '0s' }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
