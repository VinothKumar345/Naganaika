import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Calendar, 
  User, 
  Grid3X3, 
  CheckCircle, 
  ArrowRight, 
  Download, 
  RotateCcw,
  Star,
  Flame,
  Droplets,
  Layers
} from 'lucide-react';
import { analyzeFullProfile } from '../utils/numerologyCalc';
import { NUMEROLOGY_1_TO_9 } from '../data/numerologyData';

export default function NumerologyCalculator({ onBookWithProfile }) {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!dob) return;
    const result = analyzeFullProfile(fullName, dob);
    setAnalysis(result);
  };

  const handleReset = () => {
    setFullName('');
    setDob('');
    setAnalysis(null);
  };

  const mulankData = analysis ? NUMEROLOGY_1_TO_9.find(n => n.number === analysis.mulank) : null;
  const bhagyankData = analysis ? NUMEROLOGY_1_TO_9.find(n => n.number === analysis.bhagyank) : null;

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-white via-vedic-parchment to-white border-y border-saffron-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
            <span>Interactive Predictive Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight">
            Date-of-Birth & Name Number Analysis
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Enter your details below to instantly unveil your Vedic Root (Mulank), Life Path Destiny (Bhagyank), 
            and cosmic Lo Shu grid balance.
          </p>
        </div>

        {/* Input Form Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-saffron-200/80 mb-12">
          <form onSubmit={handleCalculate} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Full Name (Optional for Name Vibration)
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Anandha Kumar"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-crimson-600 text-sm bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Date of Birth <span className="text-crimson-600">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-crimson-600 text-sm bg-slate-50/50"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-crimson-700 via-crimson-800 to-saffron-700 hover:from-crimson-800 hover:to-saffron-800 text-white font-serif font-bold text-sm shadow-md transition-all hover:shadow-lg"
              >
                <Calculator className="w-4 h-4 text-saffron-300" />
                <span>Generate Numerology Matrix</span>
              </button>

              {analysis && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-3.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-600 text-sm font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Results Showcase Area */}
        {analysis && mulankData && bhagyankData && (
          <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
            
            {/* Top Stat Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Mulank Card */}
              <div className="bg-gradient-to-br from-crimson-900 to-crimson-800 text-white rounded-2xl p-5 shadow-lg border border-crimson-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Flame className="w-20 h-20" />
                </div>
                <span className="text-xs font-semibold text-amber-200 tracking-wider uppercase block mb-1">
                  Root Number (Mulank)
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-serif font-black text-white">{analysis.mulank}</span>
                  <span className="text-xs text-amber-300">Ruling: {mulankData.rulingPlanet}</span>
                </div>
                <p className="text-xs text-crimson-100 font-medium line-clamp-2">
                  {mulankData.archetype}
                </p>
              </div>

              {/* Bhagyank Card */}
              <div className="bg-gradient-to-br from-saffron-700 to-amber-700 text-white rounded-2xl p-5 shadow-lg border border-saffron-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Star className="w-20 h-20" />
                </div>
                <span className="text-xs font-semibold text-amber-200 tracking-wider uppercase block mb-1">
                  Destiny (Bhagyank)
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-serif font-black text-white">{analysis.bhagyank}</span>
                  <span className="text-xs text-amber-200">Life Mission: #{analysis.bhagyank}</span>
                </div>
                <p className="text-xs text-amber-100 font-medium line-clamp-2">
                  {bhagyankData.archetype}
                </p>
              </div>

              {/* Name Number Card */}
              <div className="bg-white rounded-2xl p-5 shadow-md border border-saffron-200">
                <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase block mb-1">
                  Chaldean Name Total
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-serif font-black text-slate-900">
                    {analysis.nameAnalysis.single || '—'}
                  </span>
                  {analysis.nameAnalysis.compound > 0 && (
                    <span className="text-xs text-slate-500 font-mono">
                      (Compound: {analysis.nameAnalysis.compound})
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600">
                  {analysis.fullName ? `Vibrational signature of "${analysis.fullName}"` : 'Enter name above to verify compatibility'}
                </p>
              </div>

              {/* Harmonic Harmony Card */}
              <div className="bg-white rounded-2xl p-5 shadow-md border border-saffron-200">
                <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase block mb-1">
                  Harmonic Partners
                </span>
                <div className="flex flex-wrap gap-1.5 my-2">
                  {analysis.compatibleNumbers.map((cn) => (
                    <span key={cn} className="w-7 h-7 rounded-full bg-saffron-100 text-saffron-800 font-serif font-bold text-xs flex items-center justify-center">
                      {cn}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500">
                  Highly compatible with numbers {analysis.compatibleNumbers.join(', ')} for marriage & business.
                </p>
              </div>

            </div>

            {/* In-Depth Two Column Layout: Archetype Breakdown & Lo Shu Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Detailed Reading Breakdown */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-saffron-200 space-y-6">
                <div className="flex items-center justify-between border-b border-saffron-100 pb-4">
                  <div>
                    <h3 className="text-xl font-serif font-black text-slate-900">
                      Core Persona: {mulankData.archetype}
                    </h3>
                    <p className="text-xs text-saffron-700 font-medium">
                      Derived from Day {analysis.day} of Birth
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-saffron-50 text-saffron-800 text-xs font-semibold border border-saffron-200">
                    Element: {mulankData.element}
                  </span>
                </div>

                <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-1 text-crimson-800">
                      Symbolic Meaning & Life Essence
                    </h4>
                    <p>{mulankData.symbolicMeaning}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-1 text-crimson-800">
                      Signature Strengths
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      {mulankData.strengths.map((str, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs bg-saffron-50/70 p-2 rounded-lg">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block text-slate-500 text-[10px] uppercase font-semibold">Lucky Gemstone</span>
                      <span className="font-semibold text-slate-800">{mulankData.gemstone}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block text-slate-500 text-[10px] uppercase font-semibold">Sacred Colors</span>
                      <span className="font-semibold text-slate-800">{mulankData.sacredColor}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                      <span className="block text-slate-500 text-[10px] uppercase font-semibold">Favorable Days</span>
                      <span className="font-semibold text-slate-800">{mulankData.favorableDays}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900">
                    <strong className="block font-semibold mb-1">Corporate & Career Guidance:</strong>
                    {mulankData.b2bAdvice}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onBookWithProfile(analysis)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-crimson-800 hover:bg-crimson-900 text-white font-serif font-bold text-xs shadow-md transition-all"
                  >
                    <span>Book One-on-One Session with this Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Lo Shu Grid Visual Matrix */}
              <div className="lg:col-span-5 bg-gradient-to-b from-vedic-navy to-vedic-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-saffron-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Grid3X3 className="w-5 h-5 text-saffron-400" />
                      <h4 className="font-serif font-bold text-base text-amber-200">
                        Vedic Lo Shu Grid
                      </h4>
                    </div>
                    <span className="text-[11px] text-saffron-300 font-mono">
                      Birth Date Distribution
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                    The 3x3 sacred square reveals the presence and frequency of vibrational numbers derived 
                    from your exact date of birth ({analysis.dobString}).
                  </p>

                  {/* 3x3 Grid Display */}
                  <div className="grid grid-cols-3 gap-2 max-w-[280px] mx-auto mb-6">
                    {analysis.loShu.grid.map((row, rIdx) =>
                      row.map((num) => {
                        const count = analysis.loShu.counts[num];
                        const isPresent = count > 0;
                        return (
                          <div
                            key={num}
                            className={`aspect-square rounded-xl flex flex-col items-center justify-center border transition-all ${
                              isPresent
                                ? 'bg-gradient-to-br from-saffron-600 to-crimson-700 border-saffron-300 shadow-[0_0_12px_rgba(245,158,11,0.4)] scale-105'
                                : 'bg-white/5 border-white/10 text-slate-500'
                            }`}
                          >
                            <span className={`text-xl font-serif font-black ${isPresent ? 'text-white' : 'text-slate-600'}`}>
                              {num}
                            </span>
                            {isPresent && (
                              <span className="text-[9px] font-mono text-amber-200 bg-black/30 px-1.5 rounded-full mt-0.5">
                                {count}x
                              </span>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>

                  {/* Planes Analysis */}
                  <div className="space-y-2 text-xs">
                    <span className="block text-[11px] uppercase tracking-wider text-saffron-400 font-semibold mb-1">
                      Active Energy Planes:
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className={`p-2 rounded-lg border ${analysis.loShu.planes.mental ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                        🧠 Mental Plane (4-9-2): {analysis.loShu.planes.mental ? 'Strong' : 'Partial'}
                      </div>
                      <div className={`p-2 rounded-lg border ${analysis.loShu.planes.emotional ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                        ❤️ Emotional Plane (3-5-7): {analysis.loShu.planes.emotional ? 'Strong' : 'Partial'}
                      </div>
                      <div className={`p-2 rounded-lg border ${analysis.loShu.planes.practical ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                        🏗️ Practical Plane (8-1-6): {analysis.loShu.planes.practical ? 'Strong' : 'Partial'}
                      </div>
                      <div className={`p-2 rounded-lg border ${analysis.loShu.planes.will ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                        ⚡ Will Plane (9-5-1): {analysis.loShu.planes.will ? 'Strong' : 'Partial'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <p className="text-[11px] text-slate-400 italic">
                    Missing numbers can be energetically balanced using personalized gemstone and name spelling remedies during your consultation.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
