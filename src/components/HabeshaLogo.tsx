
import React from 'react';

const HabeshaLogo = () => {
  return (
    <div className="text-center animate-float">
      <div className="inline-flex items-center justify-center mb-6">
        <div className="relative">
          {/* Logo Image - using original size */}
          <img 
            src="/lovable-uploads/c455a299-6186-4f8f-9523-265ec177ef0e.png" 
            alt="Habesha.com Logo" 
            className="w-auto h-auto object-contain filter drop-shadow-2xl"
          />
          
          {/* Enhanced glow effect for visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-lg blur-xl opacity-70"></div>
        </div>
      </div>
      
      <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg backdrop-blur-sm bg-background/20 rounded-lg p-4">
        Your premier digital platform for business networking and community connections
      </p>
    </div>
  );
};

export default HabeshaLogo;
