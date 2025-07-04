import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface LocationData {
  ip: string;
  city?: string;
  region?: string;
  country?: string;
  timezone?: string;
}

const NotificationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [consentChecked, setConsentChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  // Fetch IP and location data when component mounts
  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        // First get IP address
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const { ip } = await ipResponse.json();

        // Then get location data using the IP
        const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        const locationData = await locationResponse.json();

        setLocationData({
          ip,
          city: locationData.city,
          region: locationData.region,
          country: locationData.country_name,
          timezone: locationData.timezone
        });
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchLocationData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if consent is given
    if (!consentChecked) {
      toast.error("Consent Required", {
        description: "You must agree to receive communications from us to submit this form.",
      });
      return;
    }
    
    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          location: locationData
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      // Show success message below the form
      setShowSuccess(true);
      
      // Reset form
      setFormData({ name: '', email: '', phone: '' });
      setConsentChecked(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Error", {
        description: error instanceof Error ? error.message : "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-background/50 border-border focus:border-tech-blue focus:ring-tech-blue/20 text-foreground placeholder:text-muted-foreground"
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
            className="bg-background/50 border-border focus:border-tech-blue focus:ring-tech-blue/20 text-foreground placeholder:text-muted-foreground"
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
            className="bg-background/50 border-border focus:border-tech-blue focus:ring-tech-blue/20 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start space-x-2">
          <Checkbox
            id="consent"
            checked={consentChecked}
            onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
            className="mt-1"
          />
          <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
            By submitting this form, you agree to receive automated emails and text messages from us with updates and information. Message frequency may vary. You can unsubscribe at any time by following the instructions provided in the messages.
          </Label>
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting || !consentChecked}
          className="w-full text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#00217d" }}
        >
          {isSubmitting ? 'Submitting...' : 'Get Notified'}
        </Button>
        
        <p className="text-xs text-muted-foreground text-center mt-4 italic">
          No spam – just one notification when we launch.
        </p>
      </form>

      {/* Success Message */}
      {showSuccess && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-green-800 mb-1">Success! 🎉</h3>
          <p className="text-green-700">You'll be the first to know when we launch!</p>
        </div>
      )}
    </div>
  );
};

export default NotificationForm;
