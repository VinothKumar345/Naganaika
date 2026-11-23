import React from 'react';
import { 
  Sparkles, 
  Target, 
  Compass, 
  ShieldCheck, 
  Award, 
  Globe2, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { BRAND_INFO } from '../data/numerologyData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white border-t border-saffron-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Mandala & Logo Montage */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
              
              {/* Outer Golden Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-saffron-300/30 via-crimson-600/20 to-amber-200/30 blur-2xl"></div>

              {/* Decorative Concentric Rings */}
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-saffron-400/50 animate-spin-slow"></div>
              <div className="absolute inset-8 rounded-full border border-crimson-700/40"></div>

              {/* Official Logo Display */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-tr from-saffron-500 via-amber-300 to-crimson-700 shadow-2xl">
                <img
                  src="/naganiaka-logo.jpg"
                  alt="Naganiaka, Nakuli Numerology"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Brand Direction Note Card */}
            <div className="mt-6 p-4 rounded-2xl bg-vedic-parchment border border-saffron-300/80 max-w-sm text-center shadow-sm">
              <span className="text-[10px] uppercase font-bold tracking-widest text-saffron-800 block mb-1">
                Official Brand Architecture
              </span>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                "{BRAND_INFO.domainRecommendation}"
              </p>
            </div>
          </div>

          {/* Right Column: Mission, Vision, Heritage */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-100 text-crimson-800 text-xs font-semibold tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5 text-crimson-700" />
              <span>Heritage & Institutional Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight leading-tight">
              Bridging Ancient Vedic Science & Contemporary Strategy
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong className="text-crimson-800 font-bold">{BRAND_INFO.name}</strong>, 
              we believe that numbers are not merely mathematical counters—they are the underlying harmonic geometry of cosmic law. 
              Our institution was established to demystify numerology, elevating it from casual fortune-telling into an empirical, 
              ethical, and predictive diagnostic framework.
            </p>

            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-vedic-parchment/70 border border-saffron-200">
                <div className="flex items-center gap-2 mb-2 text-crimson-800">
                  <Target className="w-5 h-5 text-crimson-700" />
                  <h4 className="font-serif font-bold text-base">Our Vision</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To be the world’s most trusted and intellectually grounded numerology consultancy, 
                  empowering individuals and enterprise leaders to make clear, auspicious, and financially sound choices.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-saffron-50/60 border border-saffron-200">
                <div className="flex items-center gap-2 mb-2 text-saffron-800">
                  <Compass className="w-5 h-5 text-saffron-700" />
                  <h4 className="font-serif font-bold text-base">Our Mission</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To deliver actionable, non-fatalistic date-of-birth insights, eliminate life stagnation, 
                  and preserve the sacred traditions of Kundli matching and Griha Pravesh with utter transparency.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Four Bedrock Principles:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Empirical Precision:</strong> Chaldean & Vedic synergy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Compassion First:</strong> Dedicated slots for hardship cases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Corporate Rigor:</strong> Boardroom NDAs & strategic clarity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Ethical Remedies:</strong> No extortionate rituals or fear-mongering</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
