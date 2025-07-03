import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useVisitorTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page visit when component mounts or location changes
    const trackVisit = async () => {
      try {
        await fetch('/api/visit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page: location.pathname,
          }),
        });
      } catch (error) {
        // Silently fail - don't break the user experience
        console.warn('Failed to track visit:', error);
      }
    };

    trackVisit();
  }, [location.pathname]);
}; 