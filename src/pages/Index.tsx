
import React from 'react';
import HabeshaLogo from '@/components/HabeshaLogo';
import CountdownTimer from '@/components/CountdownTimer';
import NotificationForm from '@/components/NotificationForm';

const Index = () => {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.12) 0%, transparent 40%),
          radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.08) 0%, transparent 35%),
          linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 100%),
          transparent
        `
      }}
    >
      {/* Animated floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-tech-blue/10 to-tech-indigo/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-tech-indigo/8 to-purple-400/8 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-purple-400/6 to-tech-blue/6 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Small glowing dots */}
        <div className="absolute top-20 right-40 w-2 h-2 bg-tech-blue/40 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-20 w-3 h-3 bg-tech-indigo/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-60 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 left-60 w-4 h-4 bg-tech-blue/20 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-32 left-1/3 w-6 h-6 border border-tech-blue/20 rotate-45 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-48 right-1/4 w-8 h-8 border border-tech-indigo/15 rounded-full animate-pulse-glow" style={{ animationDelay: '3.5s' }}></div>
        
        {/* Flowing lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0,20 Q25,10 50,20 T100,20" 
              fill="none" 
              stroke="url(#gradient1)" 
              strokeWidth="0.2"
              className="animate-pulse"
            />
            <path 
              d="M0,80 Q25,70 50,80 T100,80" 
              fill="none" 
              stroke="url(#gradient2)" 
              strokeWidth="0.2"
              className="animate-pulse"
              style={{ animationDelay: '2s' }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.2)" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                <stop offset="50%" stopColor="rgba(99, 102, 241, 0.3)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Countdown Section - At Top */}
        <section className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 font-roboto">
            Launching Soon
          </h2>
          <CountdownTimer />
        </section>

        {/* Header Section with Logo */}
        <header className="text-center mb-16">
          <HabeshaLogo />
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Form Section */}
          <section className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-8 font-roboto">
              Be the First to Experience Our Platform
            </h3>
            <NotificationForm />
          </section>

          {/* Business Features */}
          <section className="text-center py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group cursor-default">
                <div className="w-16 h-16 mx-auto mb-4 bg-tech-blue/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-tech-blue rounded-full"></div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Networking</h4>
                <p className="text-muted-foreground text-sm">
                  Connect with professionals and expand your network
                </p>
              </div>
              
              <div className="group cursor-default">
                <div className="w-16 h-16 mx-auto mb-4 bg-tech-indigo/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-tech-indigo rounded-full"></div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Business</h4>
                <p className="text-muted-foreground text-sm">
                  Discover opportunities and grow your enterprise
                </p>
              </div>
              
              <div className="group cursor-default">
                <div className="w-16 h-16 mx-auto mb-4 bg-tech-slate/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-tech-slate rounded-full"></div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Community</h4>
                <p className="text-muted-foreground text-sm">
                  Build meaningful connections and collaborations
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-border">
        <p className="text-muted-foreground text-sm">
          © 2024 Habesha.com - Professional Networking Platform
        </p>
      </footer>
    </div>
  );
};

export default Index;
