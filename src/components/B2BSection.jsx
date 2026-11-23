import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Building2, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Award,
  Sparkles,
  BarChart3,
  CalendarCheck
} from 'lucide-react';

export default function B2BSection({ onOpenBooking }) {
  const corporateCapabilities = [
    {
      title: "Business Name & Brand Recommendations",
      icon: Award,
      desc: "Harmonizing corporate registered names, public trade brands, and digital domain vibrations with the founding board's date-of-birth matrix to maximize brand recognition and avoid legal blockages."
    },
    {
      title: "Employee & Executive Synergy Insights",
      icon: Users,
      desc: "Analyzing team dynamics, C-suite compatibility, and leadership archetype distribution to eliminate internal friction and place high-performing executives in their naturally aligned roles."
    },
    {
      title: "Corporate Growth & Strategic Milestones",
      icon: TrendingUp,
      desc: "Identifying peak expansion cycles, high-probability fundraising windows, and auspicious dates for product launches, acquisitions, and boardroom restructuring."
    },
    {
      title: "Enterprise Retention Retainers",
      icon: ShieldCheck,
      desc: "Dedicated ongoing advisory retainers for family offices, conglomerates, and high-growth startups requiring confidential numerical risk assessments."
    }
  ];

  return (
    <section id="corporate" className="py-20 bg-gradient-to-b from-vedic-navy via-[#120F24] to-vedic-dark text-white relative overflow-hidden">
      {/* Background Sacred Geometric Aura */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saffron-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-crimson-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/20 border border-saffron-400/30 text-saffron-300 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>B2B Enterprise Advisory</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-saffron-300 to-amber-100">
            Corporate Numerology & Strategic Growth
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Empowering visionary founders, executive boards, and corporate institutions with empirical numerical intelligence 
            to architect market dominance, brand power, and executive cohesion.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {corporateCapabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="bg-white/5 border border-white/10 hover:border-saffron-400/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-saffron-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-500 to-crimson-700 flex items-center justify-center text-white mb-4 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-2 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Showcase Banner */}
        <div className="bg-gradient-to-r from-[#201738] via-[#2A1D4A] to-[#201738] rounded-3xl p-8 sm:p-12 border border-saffron-400/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-serif font-bold tracking-widest text-saffron-400 uppercase">
                B2B Executive Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
                Align Your Enterprise Name & Core Leadership Frequency
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Does your corporate name vibrate to numbers of prosperity, or is it creating subconscious drag on your bottom line? 
                Our certified corporate consultants provide an exhaustive 24-point audit of your business identity, website domain, and founding registration date.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                  <span>Strict NDA & Boardroom Confidentiality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                  <span>Chaldean & Pythagorean Dual Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                  <span>Corporate GST Billing & Tax Invoices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                  <span>Custom Executive Briefing Reports</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-black/20 rounded-2xl border border-white/10">
              <span className="text-xs text-saffron-300 uppercase tracking-widest font-serif mb-1">Corporate Retainer</span>
              <span className="text-2xl font-serif font-black text-white mb-2">B2B Strategy Session</span>
              <span className="text-xs text-slate-400 mb-6">60-90 mins in-depth leadership diagnostic</span>
              
              <button
                onClick={() => onOpenBooking({ id: 'corporate-consultation', title: 'Corporate Consultation', category: 'b2b' })}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-saffron-500 to-crimson-600 hover:from-saffron-400 hover:to-crimson-500 text-white font-serif font-bold text-xs tracking-wide shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Schedule Corporate Briefing</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
