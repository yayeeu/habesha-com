
import React from 'react';

const HabeshaLogo = () => {
  return (
    <div className="text-center animate-float">
      <div className="inline-flex items-center justify-center mb-6">
        <div className="relative">
          {/* Logo Image */}
          <img 
            src="/lovable-uploads/34d83462-225a-4ff7-bd8a-1a866af08ad4.png" 
            alt="Habesha.com Logo" 
            className="h-20 md:h-24 w-auto object-contain filter drop-shadow-lg"
          />
          
          {/* Futuristic glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/20 via-tech-indigo/20 to-tech-blue/20 rounded-lg blur-xl opacity-50"></div>
        </div>
      </div>
      
      <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed font-medium">
        Your premier digital platform for business networking and community connections
      </p>
    </div>
  );
};

export default HabeshaLogo;
