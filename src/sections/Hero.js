import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPixelating, setIsPixelating] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    // Start name entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Handle scroll for pixelation effect
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        const progress = Math.max(0, Math.min(1, (scrollTop - elementTop + windowHeight) / (elementHeight + windowHeight)));
        setScrollProgress(progress);
        
        // Trigger pixelation when user starts scrolling
        if (progress > 0.1 && !isPixelating) {
          setIsPixelating(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPixelating]);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-stripe-bg relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stripe-surface via-stripe-bg to-stripe-surface opacity-50"></div>
      
      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        {/* Main Name with Animation */}
        <div className={`${isVisible ? 'name-entrance' : 'opacity-0'} ${isPixelating ? 'pixelate' : ''}`}>
          <h1 className="heading-xl text-text-primary mb-8 relative">
            <span className="gradient-text">DIVLEEN LOTA</span>
            {/* Glitch effect overlay */}
            <span className="absolute inset-0 gradient-text opacity-0 glitch-effect" style={{ animationDelay: '1.5s' }}>
              DIVLEEN LOTA
            </span>
          </h1>
        </div>

        {/* Subtitle with delay and scroll-based opacity */}
        <div 
          className={`fade-in ${isVisible ? 'revealed' : ''}`} 
          style={{ 
            transitionDelay: '0.8s',
            opacity: isPixelating ? 0 : 1,
            transition: 'opacity 0.5s ease-out'
          }}
        >
          <p className="text-2xl sm:text-3xl text-text-secondary mb-16 font-light tracking-wide">
            Computer Science Student • Software Engineer Intern
          </p>
        </div>

        {/* CTA Buttons with scroll-based visibility */}
        <div 
          className={`fade-in ${isVisible ? 'revealed' : ''}`} 
          style={{ 
            transitionDelay: '1.2s',
            opacity: isPixelating ? 0 : 1,
            transition: 'opacity 0.5s ease-out'
          }}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#about"
              className="btn-primary text-lg focus-ring"
            >
              Learn More
            </a>
            <a
              href="mailto:divleen2@gmail.com"
              className="btn-secondary text-lg focus-ring"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator that fades out */}
        <div 
          className={`fade-in ${isVisible ? 'revealed' : ''}`} 
          style={{ 
            transitionDelay: '1.6s',
            opacity: isPixelating ? 0 : 1,
            transition: 'opacity 0.5s ease-out'
          }}
        >
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border border-text-muted rounded-full flex justify-center">
              <div className="w-1 h-3 bg-text-muted rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-stripe-blue to-stripe-pink rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
