
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const NotificationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    
    toast({
      title: "Success! 🎉",
      description: "You'll be the first to know when we launch!",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="form-card max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-background/50 border-habesha-gold/30 focus:border-habesha-gold focus:ring-habesha-gold/20 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-background/50 border-habesha-gold/30 focus:border-habesha-gold focus:ring-habesha-gold/20 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        
        <div>
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="bg-background/50 border-habesha-gold/30 focus:border-habesha-gold focus:ring-habesha-gold/20 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-habesha-gold hover:bg-habesha-gold-dark text-background font-semibold py-3 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Notify Me'}
        </Button>
        
        <p className="text-xs text-muted-foreground text-center mt-4 italic">
          No spam – just one email or text when we launch.
        </p>
      </form>
    </div>
  );
};

export default NotificationForm;
