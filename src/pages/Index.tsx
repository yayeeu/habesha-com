
import React from 'react';
import HabeshaLogo from '@/components/HabeshaLogo';
import CountdownTimer from '@/components/CountdownTimer';
import NotificationForm from '@/components/NotificationForm';

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background geometric-grid tech-pattern relative overflow-hidden"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
          linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(99, 102, 241, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%)
        `,
        backgroundSize: '60px 60px, 100% 100%'
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-background/80"></div>
      
      {/* Futuristic ambient effects */}
      <div className="absolute inset-0 futuristic-overlay"></div>
      
      {/* Floating tech elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-tech-blue/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 border border-tech-indigo/40 rotate-45 animate-float"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-tech-indigo/40 animate-pulse"></div>
      <div className="absolute bottom-20 right-32 w-8 h-8 border border-tech-blue/30 rounded-full animate-pulse-glow"></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Countdown Section - Now at Top */}
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
