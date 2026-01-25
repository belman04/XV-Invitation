import { useState, useEffect } from 'react';

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
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 text-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center group w-24 md:w-40 lg:w-48">
          <div className="w-full aspect-square bg-white/80 backdrop-blur-sm rounded-[2rem] md:rounded-[3rem] shadow-xl flex items-center justify-center border border-white transition-all duration-700 group-hover:shadow-rosa-palo/20 group-hover:-translate-y-3 group-hover:bg-white">
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-cafe group-hover:text-rosa-mexicano transition-colors duration-500 font-serif">
              {value}
            </span>
          </div>
          <span className="text-[10px] md:text-sm mt-5 text-gray-400 font-semibold uppercase tracking-[0.4em] group-hover:text-cafe transition-colors">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;