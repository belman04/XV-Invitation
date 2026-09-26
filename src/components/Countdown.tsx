import { useState, useEffect } from "react";

const calculateTimeLeft = (targetDate: string) => {
  const difference = +new Date(targetDate) - +new Date();

  if (difference <= 0) {
    return { dias: 0, horas: 0, min: 0, seg: 0 };
  }

  return {
    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
    horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
    min: Math.floor((difference / 1000 / 60) % 60),
    seg: Math.floor((difference / 1000) % 60),
  };
};

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const entries = Object.entries(timeLeft);

  return (
    <div className="flex flex-nowrap justify-center items-center gap-2 md:gap-4 w-full max-w-4xl mx-auto">
      {entries.map(([label, value], idx) => (
        <div key={label} className="flex items-center gap-2 md:gap-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-20 md:w-28 md:h-36 bg-white/70 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 shadow-sm border border-white/60 transition-transform hover:-translate-y-1 duration-500">
              <span className="text-2xl md:text-5xl font-serif font-light text-text-primary tracking-tighter">
                {value < 10 ? `0${value}` : value}
              </span>
            </div>
            <span className="text-[9px] md:text-[11px] text-text-muted font-semibold uppercase tracking-[0.2em]">
              {label}
            </span>
          </div>
          {idx < entries.length - 1 && (
            <span className="text-accent-rose/50 text-lg md:text-2xl font-light mb-6 select-none">
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Countdown;
