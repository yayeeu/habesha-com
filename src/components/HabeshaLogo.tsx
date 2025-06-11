
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
            className="h-20 md:h-24 w-auto object-contain filter drop-shadow-2xl"
          />
          
          {/* Enhanced glow effect for visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/30 via-tech-indigo/30 to-tech-blue/30 rounded-lg blur-xl opacity-70"></div>
        </div>
      </div>
      
      <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg backdrop-blur-sm bg-black/20 rounded-lg p-4">
        Your premier digital platform for business networking and community connections
      </p>
    </div>
  );
};

export default HabeshaLogo;
