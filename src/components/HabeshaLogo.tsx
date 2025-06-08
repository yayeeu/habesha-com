
import React from 'react';

const HabeshaLogo = () => {
  return (
    <div className="text-center animate-float">
      <div className="inline-flex items-center justify-center mb-4">
        <div className="relative">
          {/* Decorative geometric elements */}
          <div className="absolute -top-2 -left-2 w-3 h-3 bg-habesha-gold rounded-full opacity-60"></div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-habesha-red rounded-full opacity-80"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-habesha-green rounded-full opacity-70"></div>
          
          {/* Logo Image */}
          <img 
            src="/lovable-uploads/b341df92-37e8-4642-91dc-ec5b4f8a9bd6.png" 
            alt="Habesha.com Logo" 
            className="h-24 md:h-32 w-auto mx-auto"
          />
          
          {/* Decorative line */}
          <div className="w-full h-1 bg-gradient-to-r from-habesha-gold via-habesha-red to-habesha-green mt-2 rounded-full"></div>
        </div>
      </div>
      
      <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed font-medium">
        Your one-stop hub for the Habesha diaspora – culture, business & community
      </p>
    </div>
  );
};

export default HabeshaLogo;
