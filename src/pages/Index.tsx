
import React from 'react';
import HabeshaLogo from '@/components/HabeshaLogo';
import CountdownTimer from '@/components/CountdownTimer';
import NotificationForm from '@/components/NotificationForm';

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background geometric-overlay cultural-motif relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-background/70"></div>
      
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-habesha-gold/5 via-transparent to-habesha-red/5 animate-gradient-shift"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-habesha-gold/20 rotate-45 animate-geometric-rotate"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-habesha-red/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-20 w-8 h-8 bg-habesha-green/15 rotate-12 animate-pulse"></div>
      <div className="absolute bottom-20 right-32 w-20 h-20 border border-habesha-gold/15 rounded-full animate-pulse-glow"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <header className="text-center mb-16 md:mb-20">
          <HabeshaLogo />
        </header>

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
          {/* Form Section */}
          <section className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-8 font-playfair">
              Be the First to Experience Habesha.com
            </h3>
            <NotificationForm />
          </section>

          {/* Countdown Section */}
          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 font-playfair">
              Launching Soon
            </h2>
            <CountdownTimer />
          </section>

          {/* Cultural Elements */}
          <section className="text-center py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group cursor-default">
                <div className="w-16 h-16 mx-auto mb-4 bg-habesha-gold/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-habesha-gold rounded-full"></div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Culture</h4>
                <p className="text-muted-foreground text-sm">
                  Celebrate our rich heritage and traditions
                </p>
              </div>
              
              <div className="group cursor-default">
                <div className="w-16 h-16 mx-auto mb-4 bg-habesha-red/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-habesha-red rounded-full"></div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Business</h4>
                <p className="text-muted-foreground text-sm">
                  Connect and grow together economically
                </p>
              </div>
              
              <div className="group cursor-default">
                <div className="w-16 h-16 mx-auto mb-4 bg-habesha-green/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-habesha-green rounded-full"></div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Community</h4>
                <p className="text-muted-foreground text-sm">
                  Build lasting bonds across the diaspora
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-habesha-gold/20">
        <p className="text-muted-foreground text-sm">
          © 2024 Habesha.com - Connecting Our Community Worldwide
        </p>
      </footer>
    </div>
  );
};

export default Index;
