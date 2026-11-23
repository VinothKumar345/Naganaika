import React, { useState } from 'react';
import { 
  Sparkles, 
  Sun, 
  Moon, 
  Compass, 
  Star, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  BookOpen,
  Award,
  Layers,
  Flame
} from 'lucide-react';
import { NUMEROLOGY_1_TO_9 } from '../data/numerologyData';

export default function BlogNumbersSection({ selectedNumber = 1, onSelectNumber }) {
  const [activeNum, setActiveNum] = useState(selectedNumber);

  const activeData = NUMEROLOGY_1_TO_9.find((n) => n.number === activeNum) || NUMEROLOGY_1_TO_9[0];

  const handleNumberClick = (num) => {
    setActiveNum(num);
    if (onSelectNumber) onSelectNumber(num);
  };

  return (
    <section id="blog-numbers" className="py-20 bg-white border-t border-saffron-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-semibold tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5 text-saffron-700" />
            <span>Sacred Knowledge Base & Life Path Guide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight">
            Numerology Significance (Numbers 1 – 9)
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Every integer from 1 to 9 embodies an ancient cosmic archetype governing personality, destiny, 
            and evolutionary soul lessons. Select any number below to study its in-depth frequency.
          </p>

          {/* Interactive 1 to 9 Selection Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-6">
            {NUMEROLOGY_1_TO_9.map((item) => {
              const isSelected = activeNum === item.number;
              return (
                <button
                  key={item.number}
                  onClick={() => handleNumberClick(item.number)}
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex flex-col items-center justify-center font-serif transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-br from-crimson-700 to-crimson-900 text-white shadow-lg shadow-crimson-900/30 scale-110 ring-2 ring-saffron-400'
                      : 'bg-vedic-parchment hover:bg-saffron-100 text-slate-700 border border-saffron-200/70'
                  }`}
                  title={`Examine Number ${item.number}: ${item.archetype}`}
                >
                  <span className="text-base font-black leading-none">{item.number}</span>
                  <span className="text-[9px] uppercase tracking-tighter opacity-80 mt-0.5">
                    {item.rulingPlanet.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Number Detailed Feature Card */}
        <div className="bg-gradient-to-br from-vedic-parchment via-white to-saffron-50/40 rounded-3xl p-6 sm:p-10 border border-saffron-200 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Giant Number Badge & Planet Meta */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="relative">
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-tr from-crimson-800 via-saffron-600 to-amber-500 text-white font-serif font-black text-6xl flex items-center justify-center shadow-xl shadow-crimson-900/20">
                  {activeData.number}
                </div>
                <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full bg-slate-900 text-saffron-300 text-[11px] font-bold border border-saffron-400/40">
                  {activeData.element}
                </div>
              </div>

              <div>
                <span className="text-xs uppercase font-serif font-bold text-saffron-700 tracking-widest block">
                  Core Archetype
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 leading-tight">
                  {activeData.archetype}
                </h3>
              </div>

              <div className="w-full space-y-2 pt-2 border-t border-saffron-200/70 text-xs">
                <div className="flex justify-between py-1 border-b border-saffron-100">
                  <span className="text-slate-500">Ruling Planet</span>
                  <span className="font-semibold text-slate-800">{activeData.rulingPlanet}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-saffron-100">
                  <span className="text-slate-500">Sacred Gemstone</span>
                  <span className="font-semibold text-slate-800">{activeData.gemstone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-saffron-100">
                  <span className="text-slate-500">Auspicious Colors</span>
                  <span className="font-semibold text-slate-800">{activeData.sacredColor}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-saffron-100">
                  <span className="text-slate-500">Peak Days</span>
                  <span className="font-semibold text-slate-800">{activeData.favorableDays}</span>
                </div>
              </div>
            </div>

            {/* Right Col: Deep Breakdown Content */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Key Characteristics from Spec */}
              <div className="p-4 rounded-2xl bg-white border border-saffron-200 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-crimson-800 block mb-1">
                  Key Characteristics (Official Spec)
                </span>
                <p className="text-base text-slate-800 font-serif font-semibold italic">
                  "{activeData.characteristics}"
                </p>
              </div>

              {/* Symbolic Meaning */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Cosmic Meaning & Primal Essence
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeData.symbolicMeaning}
                </p>
              </div>

              {/* Two Column Strengths & Balance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Signature Strengths
                  </span>
                  <ul className="space-y-1 text-xs text-emerald-900/90">
                    {activeData.strengths.map((str, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    Evolutionary Lessons
                  </span>
                  <ul className="space-y-1 text-xs text-amber-900/90">
                    {activeData.challengesToBalance.map((ch, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Career & B2B Resonance */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white text-xs leading-relaxed">
                <div className="flex items-center gap-2 text-saffron-300 font-semibold mb-1">
                  <Award className="w-4 h-4 text-saffron-400" />
                  <span>Vocational & Corporate Strategic Placement:</span>
                </div>
                <p className="text-slate-300 mb-2">
                  <strong className="text-white">Aligned Roles:</strong> {activeData.bestCareerRoles}
                </p>
                <p className="text-slate-400 italic">
                  {activeData.b2bAdvice}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* 9-Number Quick Summary Table from Specification */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-saffron-200 shadow-sm overflow-hidden">
          <h3 className="text-xl font-serif font-black text-slate-900 mb-4">
            Master Archetype Matrix (Numbers 1 – 9)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-saffron-300 text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-3 font-serif font-bold text-crimson-800">Number</th>
                  <th className="py-3 px-3 font-serif font-bold text-slate-800">Core Significance & Archetype</th>
                  <th className="py-3 px-3 font-serif font-bold text-slate-800">Key Characteristics (Spec)</th>
                  <th className="py-3 px-3 font-serif font-bold text-slate-800">Ruling Planet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-saffron-100 text-slate-700">
                {NUMEROLOGY_1_TO_9.map((item) => (
                  <tr
                    key={item.number}
                    onClick={() => handleNumberClick(item.number)}
                    className={`hover:bg-saffron-50/80 cursor-pointer transition-colors ${
                      item.number === activeNum ? 'bg-saffron-50 font-semibold' : ''
                    }`}
                  >
                    <td className="py-3 px-3 font-serif font-bold text-sm text-crimson-800">
                      #{item.number}
                    </td>
                    <td className="py-3 px-3 font-medium text-slate-900">
                      {item.archetype}
                    </td>
                    <td className="py-3 px-3 text-slate-600">
                      {item.characteristics}
                    </td>
                    <td className="py-3 px-3 font-medium text-saffron-800">
                      {item.rulingPlanet}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
