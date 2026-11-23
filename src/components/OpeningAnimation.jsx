import React, { useState, useEffect } from 'react';
import { Sparkles, Eye, Sun, Moon, ArrowRight, Compass } from 'lucide-react';

export default function OpeningAnimation({ onComplete }) {
  const [activeNumber, setActiveNumber] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Sequentially activate numbers 1 through 9
    const numInterval = setInterval(() => {
      setActiveNumber((prev) => (prev < 9 ? prev + 1 : 1));
    }, 320);

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Auto complete after 3.2 seconds
    const timer = setTimeout(() => {
      handleEnter();
    }, 3400);

    return () => {
      clearInterval(numInterval);
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  const handleEnter = () => {
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#1a0815] via-[#2d0f1e] to-[#0d040c] text-white transition-opacity duration-700 select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Sacred Geometric Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crimson-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-saffron-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Subtle Constellation Lines */}
        <svg className="w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="30%" r="2" fill="#FBBF24" />
          <circle cx="80%" cy="25%" r="2.5" fill="#FBBF24" />
          <circle cx="75%" cy="70%" r="2" fill="#FBBF24" />
          <circle cx="25%" cy="75%" r="1.5" fill="#FBBF24" />
          <line x1="20%" y1="30%" x2="35%" y2="45%" stroke="#FBBF24" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="80%" y1="25%" x2="65%" y2="40%" stroke="#FBBF24" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto px-6 text-center">
        {/* Circular Celestial Mandala Container */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center mb-8">
          
          {/* Outer Rotating Dotted Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-saffron-400/40 animate-spin-slow"></div>

          {/* Reverse Rotating Celestial Ring */}
          <div className="absolute inset-4 rounded-full border border-crimson-400/50 animate-spin-reverse-slow"></div>

          {/* Concentric Golden Ring */}
          <div className="absolute inset-8 rounded-full border-2 border-saffron-300/60 shadow-[0_0_20px_rgba(245,158,11,0.3)]"></div>

          {/* Orbital 1-9 Numbers placed along a circle */}
          {numbers.map((num, i) => {
            const angle = (i * (360 / 9)) - 90;
            const radius = 110; // distance from center
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const isActive = activeNumber === num;

            return (
              <button
                key={num}
                onClick={() => setActiveNumber(num)}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className={`absolute w-9 h-9 rounded-full flex items-center justify-center text-sm font-serif font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-saffron-500 to-crimson-600 text-white scale-125 shadow-[0_0_15px_#F59E0B]'
                    : 'bg-[#2a1322] text-saffron-200/80 border border-saffron-500/30 hover:scale-110 hover:border-saffron-400'
                }`}
                title={`Number ${num} - Click to focus vibrational frequency`}
              >
                {num}
              </button>
            );
          })}

          {/* Central Sun, Moon, and Eye Motif matching the Logo */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#380e22] via-[#240a16] to-[#12040b] border-2 border-saffron-400 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(217,119,6,0.5)]">
            <div className="relative flex items-center justify-center">
              {/* Sun Ray aura */}
              <Sun className="w-12 h-12 text-saffron-400 animate-spin-slow opacity-80" />
              {/* Crescent Moon */}
              <Moon className="w-8 h-8 text-saffron-200 absolute -top-1 -right-1 opacity-70" />
              {/* Central Intuitive Eye */}
              <div className="absolute w-8 h-8 rounded-full bg-crimson-700/80 border border-saffron-300 flex items-center justify-center shadow-inner">
                <Eye className="w-4 h-4 text-amber-300 animate-pulse" />
              </div>
            </div>
            <span className="text-[10px] tracking-widest text-saffron-300 uppercase mt-1 font-serif">
              Vibration #{activeNumber}
            </span>
          </div>
        </div>

        {/* Brand Reveal Typography */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-900/60 border border-saffron-500/40 text-saffron-300 text-xs tracking-widest uppercase font-serif">
            <Sparkles className="w-3.5 h-3.5 text-saffron-400 animate-spin-slow" />
            <span>Sacred Vedic & Modern Numerology</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-saffron-400 to-amber-100 drop-shadow-md">
            NAGANIAKA, NAKULI
          </h1>
          <p className="text-lg sm:text-xl font-serif tracking-[0.25em] text-saffron-300 uppercase font-semibold">
            NUMEROLOGY
          </p>

          <p className="text-sm text-saffron-100/70 max-w-md mx-auto italic pt-1">
            "Your Trusted Financial Guidance Partner • Date of Birth Analysis • Strategic Consultations"
          </p>
        </div>

        {/* Progress Bar & Enter Action */}
        <div className="mt-8 w-full max-w-xs space-y-4">
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-crimson-500 via-saffron-400 to-amber-300 h-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <button
            onClick={handleEnter}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-saffron-500 to-crimson-700 hover:from-saffron-400 hover:to-crimson-600 text-white font-medium text-sm shadow-[0_0_20px_rgba(217,119,6,0.4)] transition-all hover:scale-105"
          >
            <span>Enter Consultation Portal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
