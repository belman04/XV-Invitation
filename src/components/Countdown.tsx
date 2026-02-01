import { useState, useEffect } from "react";

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { dias: 0, horas: 0, min: 0, seg: 0 };

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        seg: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full max-w-4xl mx-auto">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="w-20 h-24 md:w-32 md:h-40 bg-surface rounded-xl flex items-center justify-center mb-3 transition-transform hover:-translate-y-1 duration-500">
            <span className="text-3xl md:text-6xl font-light text-text-primary tracking-tighter">
              {value < 10 ? `0${value}` : value}
            </span>
          </div>
          <span className="text-[10px] md:text-xs text-text-muted font-bold uppercase tracking-[0.2em]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
