import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-11T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-4 max-w-2xl mx-auto px-2 sm:px-4">
      {timeUnits.map(({ label, value }) => (
        <div key={label} className="bg-white/90 backdrop-blur-md border border-border rounded-lg p-2 sm:p-3 md:p-6 text-center shadow-sm">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2 font-inter leading-tight">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground uppercase tracking-wide leading-tight">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
