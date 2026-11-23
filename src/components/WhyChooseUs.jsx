import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Users, 
  HeartHandshake, 
  CheckCircle2, 
  Lock,
  Clock,
  TrendingUp,
  FileCheck
} from 'lucide-react';

export default function WhyChooseUs({ onOpenBooking }) {
  const stats = [
    { value: '15+', label: 'Years of Vedic Mastery' },
    { value: '12,000+', label: 'Horoscopes & DOBs Analyzed' },
    { value: '98.6%', label: 'Client Satisfaction Rate' },
    { value: '100%', label: 'Confidentiality Guaranteed' }
  ];

  const benefits = [
    {
      title: "Scientific Vedic & Chaldean Fusion",
      desc: "We do not guess. We cross-verify date of birth patterns using classical Vedic planetary movements and time-tested Chaldean vibrational algorithms.",
      icon: Award
    },
    {
      title: "Compassion-Led Hardship Initiative",
      desc: "Our platform provides verified zero-fee consultations for families and students enduring severe distress. True spirituality serves first.",
      icon: HeartHandshake
    },
    {
      title: "Practical & Zero-Cost Remedies",
      desc: "We do not sell over-priced gemstones or demand complex rituals. Our remedies focus on name spelling harmony, lifestyle timings, and mindset shifts.",
      icon: FileCheck
    },
    {
      title: "Dual B2C & B2B Expertise",
      desc: "Equally adept at delicate marital Kundli matching and multi-million dollar corporate brand name evaluations and boardroom synergy.",
      icon: TrendingUp
    },
    {
      title: "Strict Privacy & Data Protection",
      desc: "Your date of birth, family lineage, and corporate data are protected with strict non-disclosure ethics and secure servers.",
      icon: Lock
    },
    {
      title: "Prompt Post-Session Follow Up",
      desc: "Every consultation comes with actionable written summaries and post-session clarification support to guarantee complete peace of mind.",
      icon: Clock
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-vedic-cream relative border-t border-saffron-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-saffron-700" />
            <span>Integrity, Accuracy & Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight">
            Why Choose Naganiaka, Nakuli Numerology
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Our reputation is built upon unshakeable ethics, mathematical precision, and an unwavering 
            commitment to the genuine prosperity of every seeker and enterprise.
          </p>
        </div>

        {/* 4 Quick Stat Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center border border-saffron-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="block text-3xl sm:text-4xl font-serif font-black text-crimson-800 mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-600 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* 6 Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-saffron-200/90 shadow-sm hover:shadow-xl hover:border-saffron-400 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-saffron-50 text-saffron-800 border border-saffron-200 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-crimson-900 via-crimson-800 to-saffron-900 rounded-3xl p-8 sm:p-10 text-white text-center shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-black">
              Ready to Discover Your Numerical Destiny?
            </h3>
            <p className="text-amber-100/90 text-sm leading-relaxed">
              Whether you need urgent career clarity, a harmonious marriage consultation, or corporate brand guidance, 
              our experienced consultants are ready to illuminate your path.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking(null)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-saffron-400 to-amber-300 hover:from-saffron-300 hover:to-amber-200 text-slate-950 font-serif font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                <span>Reserve Your Private Slot</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
