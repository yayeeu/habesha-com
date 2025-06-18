import { Instagram, Twitter } from 'lucide-react';
import NotificationForm from '@/components/NotificationForm';
import CountdownTimer from '@/components/CountdownTimer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter flex flex-col">
      {/* Header */}
      <header className="px-4 py-6 md:px-8">
        <div className="flex items-center">
          {/* Logo removed from header */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          {/* Hero Section */}
          <div className="space-y-4 md:space-y-6 animate-fade-in-up">
            <img
              src="/lovable-uploads/1c5656d8-f45c-4dd6-a29a-ddfb06eb7489.png"
              alt="Habesha.com Logo"
              className="mx-auto h-14 md:h-24 lg:h-32 w-auto"
            />
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center"
              style={{ color: "#00217d" }}
            >
              is almost here !
            </h1>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-center" style={{ color: "#00217d" }}>
              Join us for culture, business & community
            </h3>
          </div>

          {/* Notification Form */}
          <NotificationForm />

          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 py-8 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 font-light">
              <span>© 2025</span>
              <img 
                src="/lovable-uploads/4a41c835-0397-4b95-82e6-f78f288880b7.png" 
                alt="Habesha.com Logo" 
                className="h-4 w-auto"
              />
              <span>| New York and Seattle</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
