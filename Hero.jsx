import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Briefcase, 
  Heart, 
  Star, 
  Compass, 
  Sun,
  Moon,
  Eye,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { NUMEROLOGY_1_TO_9, BRAND_INFO } from '../data/numerologyData';

export default function Hero({ onOpenBooking, onSelectNumber }) {
  const [hoveredNumber, setHoveredNumber] = useState(1);
  const [quickDob, setQuickDob] = useState('');
  const [quickResult, setQuickResult] = useState(null);

  const handleQuickCalculate = (e) => {
    e.preventDefault();
    if (!quickDob) return;
    const digits = quickDob.replace(/\D/g, '');
    const [y, m, d] = quickDob.split('-');
    
    // Mulank
    let daySum = parseInt(d, 10);
    while (daySum > 9) {
      daySum = String(daySum).split('').reduce((a, b) => a + parseInt(b, 10), 0);
    }

    // Bhagyank
    let totalSum = digits.split('').reduce((a, b) => a + parseInt(b, 10), 0);
    while (totalSum > 9) {
      totalSum = String(totalSum).split('').reduce((a, b) => a + parseInt(b, 10), 0);
    }

    const matchedInfo = NUMEROLOGY_1_TO_9.find(n => n.number === daySum) || NUMEROLOGY_1_TO_9[0];

    setQuickResult({
      mulank: daySum,
      bhagyank: totalSum,
      archetype: matchedInfo.archetype,
      rulingPlanet: matchedInfo.rulingPlanet,
      sacredColor: matchedInfo.sacredColor
    });
  };

  const currentHoveredData = NUMEROLOGY_1_TO_9.find(n => n.number === hoveredNumber) || NUMEROLOGY_1_TO_9[0];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 overflow-hidden bg-sacred-pattern">
      {/* Ambient Celestial Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-saffron-300/20 via-crimson-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/15 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson-50 border border-crimson-200 text-crimson-800 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-crimson-600 animate-ping"></span>
              <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
              <span>NUMEROLOGY CONSULTANCY • B2C & B2B PLATFORM</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-black tracking-tight text-slate-900 leading-[1.15]">
                <span className="block text-crimson-800">NAGANIAKA, NAKULI</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 via-amber-600 to-crimson-700 font-extrabold">
                  NUMEROLOGY
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl font-serif font-semibold text-saffron-800 tracking-wide">
                Your Trusted Financial & Life Guidance Partner
              </h2>
            </div>

            {/* Core Value Proposition */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Harmonizing ancient Vedic numerical wisdom with analytical intelligence. Providing specialized 
              <strong className="text-slate-800 font-semibold"> Date of Birth Analysis</strong>, 
              personal consultations, corporate naming, employee synergy, and predictive future guidance.
            </p>

            {/* Quick 3 Pillars */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-2 border-y border-saffron-200/60 max-w-xl mx-auto lg:mx-0">
              <div className="text-center p-2 rounded-lg bg-white/60">
                <span className="block font-serif font-bold text-lg text-crimson-800">B2C</span>
                <span className="text-[11px] text-slate-600">Marriage & Life Path</span>
              </div>
              <div className="text-center p-2 rounded-lg bg-white/60 border-x border-saffron-100">
                <span className="block font-serif font-bold text-lg text-saffron-700">B2B</span>
                <span className="text-[11px] text-slate-600">Corporate & Branding</span>
              </div>
              <div className="text-center p-2 rounded-lg bg-white/60">
                <span className="block font-serif font-bold text-lg text-emerald-700">Free Aid</span>
                <span className="text-[11px] text-slate-600">For Hardship Cases</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBooking(null)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-crimson-700 via-crimson-800 to-saffron-800 hover:from-crimson-800 hover:to-crimson-900 text-white font-serif font-bold text-sm tracking-wide shadow-lg shadow-crimson-900/25 hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <Calendar className="w-4 h-4 text-saffron-300" />
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-saffron-50 text-slate-800 font-medium text-sm border border-saffron-300 shadow-sm hover:border-saffron-400 transition-all"
              >
                <span>Instant DOB Calculator</span>
              </a>
            </div>

            {/* Quick DOB Instant Check Mini-Card */}
            <div className="p-4 rounded-2xl bg-white/80 border border-saffron-200/80 shadow-md backdrop-blur-sm max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-serif font-bold text-crimson-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
                  Quick DOB Preview
                </span>
                <span className="text-[11px] text-slate-500">Instant Root & Destiny preview</span>
              </div>

              <form onSubmit={handleQuickCalculate} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="date"
                  value={quickDob}
                  onChange={(e) => setQuickDob(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
                  placeholder="Select Birth Date"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-saffron-600 hover:bg-saffron-700 text-white font-medium text-xs rounded-lg transition-colors shadow-sm"
                >
                  Reveal Energy
                </button>
              </form>

              {quickResult && (
                <div className="mt-3 p-3 rounded-xl bg-saffron-50 border border-saffron-200 flex items-center justify-between text-xs animate-fadeIn">
                  <div>
                    <span className="font-semibold text-crimson-900">Root (Mulank): {quickResult.mulank}</span>
                    <span className="mx-2 text-slate-300">|</span>
                    <span className="font-semibold text-saffron-800">Destiny (Bhagyank): {quickResult.bhagyank}</span>
                    <p className="text-slate-600 text-[11px] mt-0.5">{quickResult.archetype} • Planet: {quickResult.rulingPlanet}</p>
                  </div>
                  <a
                    href="#calculator"
                    className="text-xs font-semibold text-crimson-800 underline hover:text-crimson-900"
                  >
                    Full Report &rarr;
                  </a>
                </div>
              )}
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Confidential Consultations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Vedic & Pythagorean Mathematical Models</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Over 12,000+ Profiles Evaluated</span>
              </div>
            </div>

          </div>

          {/* Right Column: Celestial Mandala with Interactive Numbers 1 to 9 */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-saffron-400/20 via-crimson-600/20 to-amber-300/30 blur-2xl"></div>

              {/* Outer Rotating Dotted Circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-saffron-500/40 animate-spin-slow"></div>

              {/* Inner Decorative Ring */}
              <div className="absolute inset-4 rounded-full border border-crimson-700/30 animate-spin-reverse-slow"></div>

              {/* Concentric Golden Ring */}
              <div className="absolute inset-10 rounded-full border-2 border-saffron-400/50 shadow-inner"></div>

              {/* Interactive 1 to 9 Number Buttons in Orbit */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => {
                const angle = (i * (360 / 9)) - 90;
                const radius = 145; // radius in px
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                const isSelected = hoveredNumber === num;

                return (
                  <button
                    key={num}
                    onMouseEnter={() => setHoveredNumber(num)}
                    onClick={() => {
                      setHoveredNumber(num);
                      if (onSelectNumber) onSelectNumber(num);
                    }}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute w-10 h-10 rounded-full flex items-center justify-center text-sm font-serif font-black transition-all duration-300 z-20 ${
                      isSelected
                        ? 'bg-gradient-to-r from-crimson-700 to-saffron-600 text-white scale-125 shadow-lg shadow-saffron-500/50 ring-4 ring-amber-200'
                        : 'bg-white text-slate-800 border-2 border-saffron-300 hover:scale-110 hover:border-crimson-600 shadow-sm'
                    }`}
                    title={`Vibration ${num}: Click to inspect in blog`}
                  >
                    {num}
                  </button>
                );
              })}

              {/* Central Official Logo Badge */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1 bg-gradient-to-tr from-saffron-500 via-amber-300 to-crimson-700 shadow-2xl z-10">
                <div className="w-full h-full rounded-full overflow-hidden bg-white relative flex items-center justify-center">
                  <img
                    src="/naganiaka-logo.jpg"
                    alt="Naganiaka, Nakuli Numerology Emblem"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Central Eye Pulse */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/10 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Interactive Number Energy Card below Mandala */}
            <div className="mt-6 w-full max-w-sm bg-white/90 rounded-2xl p-4 border border-saffron-200 shadow-md backdrop-blur-md transition-all duration-300">
              <div className="flex items-center justify-between border-b border-saffron-100 pb-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-crimson-700 text-white font-serif font-bold text-xs flex items-center justify-center">
                    {currentHoveredData.number}
                  </span>
                  <div>
                    <h4 className="text-xs font-serif font-bold text-slate-900">
                      {currentHoveredData.archetype}
                    </h4>
                    <span className="text-[10px] text-saffron-700">Ruling: {currentHoveredData.rulingPlanet}</span>
                  </div>
                </div>
                <a
                  href="#blog-numbers"
                  onClick={() => onSelectNumber && onSelectNumber(currentHoveredData.number)}
                  className="text-[11px] font-semibold text-crimson-700 hover:underline"
                >
                  Explore &rarr;
                </a>
              </div>
              <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                {currentHoveredData.characteristics}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
