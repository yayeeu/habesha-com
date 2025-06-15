import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[\s\-\(\)]?([0-9][\s\-\(\)]?){10,14}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Real-time validation
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }

    // Real-time email validation
    if (field === 'email' && value && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
    }

    // Real-time phone validation
    if (field === 'phone' && value && !validatePhone(value)) {
      setErrors(prev => ({ ...prev, phone: 'Please enter a valid phone number' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call - in a real app, this would connect to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success! 🎉",
        description: "You're on the list! We'll notify you when Habesha.com launches.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white border border-primary/20 rounded-2xl p-6 md:p-8 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="space-y-1">
              <Input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`font-inter ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-primary`}
                aria-label="Full name"
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-xs text-red-500 font-light">{errors.name}</p>}
            </div>
            
            <div className="space-y-1">
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`font-inter ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-primary`}
                aria-label="Email address"
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-xs text-red-500 font-light">{errors.email}</p>}
            </div>
            
            <div className="space-y-1">
              <Input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`font-inter ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-primary`}
                aria-label="Phone number"
                disabled={isSubmitting}
              />
              {errors.phone && <p className="text-xs text-red-500 font-light">{errors.phone}</p>}
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full text-white font-semibold py-3 rounded-lg transition-colors duration-200 font-inter"
            style={{ backgroundColor: "#00217d" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding you to the list...' : 'Notify Me'}
          </Button>
        </form>
        
        <p className="text-xs text-gray-500 text-center mt-3 font-light font-inter">
          No spam—just one email or text when we launch.
        </p>
      </div>
    </div>
  );
};

export default LeadCaptureForm; 