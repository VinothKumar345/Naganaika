import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Users, 
  Home, 
  Briefcase, 
  Heart, 
  FileSignature, 
  Search, 
  Compass, 
  Sparkles, 
  Calculator, 
  HelpCircle, 
  CalendarCheck,
  ArrowRight,
  Clock,
  CheckCircle,
  X,
  Filter
} from 'lucide-react';
import { SERVICES_DATA } from '../data/numerologyData';

const ICON_MAP = {
  HeartHandshake,
  Users,
  Home,
  Briefcase,
  Heart,
  FileSignature,
  Search,
  Compass,
  Sparkles,
  Calculator,
  HelpCircle,
  CalendarCheck
};

export default function ServicesSection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = SERVICES_DATA.filter((svc) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'b2c') return svc.category === 'b2c';
    if (activeTab === 'b2b') return svc.category === 'b2b';
    if (activeTab === 'compassion') return svc.category === 'compassion';
    return true;
  });

  return (
    <section id="services" className="py-20 bg-vedic-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-100 text-crimson-800 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-crimson-700" />
            <span>Domain Verticals & Analytical Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight">
            Specialized Consultation Services
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From sacred marital alignments and corporate brand vibration to date-of-birth predictive forecasting, 
            explore our comprehensive portfolio across four primary domain verticals.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-crimson-800 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-saffron-100 border border-saffron-200'
              }`}
            >
              All 12 Offerings ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('b2c')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'b2c'
                  ? 'bg-crimson-800 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-saffron-100 border border-saffron-200'
              }`}
            >
              B2C Personal & Family
            </button>
            <button
              onClick={() => setActiveTab('b2b')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'b2b'
                  ? 'bg-crimson-800 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-saffron-100 border border-saffron-200'
              }`}
            >
              B2B Corporate & Enterprise
            </button>
            <button
              onClick={() => setActiveTab('compassion')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'compassion'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300'
              }`}
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Free Hardship Consultation</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Sparkles;
            const isCompassion = service.category === 'compassion';
            const isB2B = service.category === 'b2b';

            return (
              <div
                key={service.id}
                className={`group rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isCompassion
                    ? 'bg-gradient-to-br from-emerald-50/90 to-teal-50/50 border-emerald-300 shadow-md hover:shadow-xl hover:border-emerald-500'
                    : isB2B
                    ? 'bg-white border-amber-300 shadow-md hover:shadow-xl hover:border-amber-500'
                    : 'bg-white border-saffron-200/90 shadow-sm hover:shadow-xl hover:border-crimson-400'
                }`}
              >
                <div>
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                        isCompassion
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : isB2B
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : 'bg-saffron-100 text-saffron-900 border-saffron-200'
                      }`}
                    >
                      {service.badge}
                    </span>

                    <span className="flex items-center gap-1 text-[11px] text-slate-500">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${
                        isCompassion
                          ? 'bg-emerald-600 text-white'
                          : isB2B
                          ? 'bg-amber-600 text-white'
                          : 'bg-gradient-to-br from-crimson-700 to-crimson-900 text-white'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="font-serif font-black text-lg text-slate-900 group-hover:text-crimson-800 transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <span className="text-[11px] text-saffron-700 uppercase font-semibold tracking-wider">
                        {isCompassion ? 'Zero-Fee Compassion Aid' : isB2B ? 'Corporate Vertical' : 'Personal Consultation'}
                      </span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 ${isCompassion ? 'text-emerald-600' : 'text-saffron-600'}`} />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onOpenBooking(service)}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-white text-xs font-serif font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 ${
                      isCompassion
                        ? 'bg-emerald-700 hover:bg-emerald-800'
                        : 'bg-crimson-800 hover:bg-crimson-900'
                    }`}
                  >
                    <span>{isCompassion ? 'Request Slot' : 'Book Now'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-saffron-200 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-saffron-100 text-saffron-900 text-xs font-semibold">
                {selectedService.badge}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedService.duration}
              </span>
            </div>

            <h3 className="text-2xl font-serif font-black text-slate-900 mb-2">
              {selectedService.title}
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Included Consultation Deliverables
            </h4>

            <ul className="space-y-2 mb-8">
              {selectedService.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-saffron-50/50 p-2.5 rounded-xl border border-saffron-100">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="flex-1 py-3 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
              >
                Close
              </button>
              
              <button
                onClick={() => {
                  const s = selectedService;
                  setSelectedService(null);
                  onOpenBooking(s);
                }}
                className="flex-1 py-3 rounded-xl bg-crimson-800 hover:bg-crimson-900 text-white font-serif font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>Proceed to Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
