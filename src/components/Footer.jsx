import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  HeartHandshake, 
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';
import { BRAND_INFO, SOCIAL_LINKS, SERVICES_DATA } from '../data/numerologyData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-gradient-to-b from-[#140b15] via-[#1c0e1e] to-[#0d050e] text-amber-100/90 pt-16 pb-12 border-t-2 border-saffron-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-saffron-400 via-amber-200 to-crimson-600 shadow-md">
                <img
                  src="/naganiaka-logo.jpg"
                  alt="Naganiaka, Nakuli Numerology"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif font-black text-xl text-white tracking-wide block">
                  NAGANIAKA, NAKULI
                </span>
                <span className="font-serif font-bold text-xs tracking-[0.2em] text-saffron-400 uppercase block">
                  NUMEROLOGY
                </span>
              </div>
            </div>

            <p className="text-xs text-amber-200/80 leading-relaxed">
              Specialized consultation services powered by numerology. Providing educational guidance, 
              future insights, and date-of-birth-based predictive services for individuals and corporations.
            </p>

            {/* STRICT REQUIREMENT: Only Instagram, LinkedIn, and YouTube */}
            <div className="pt-2">
              <span className="block text-[11px] uppercase font-bold tracking-widest text-saffron-400 mb-2">
                Official Channels:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={SOCIAL_LINKS[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-amber-500 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  title="Instagram: @naganiaka_numerology"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href={SOCIAL_LINKS[1].url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  title="LinkedIn: Naganiaka, Nakuli Numerology"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={SOCIAL_LINKS[2].url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  title="YouTube: Naganiaka Numerology Official"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider border-b border-saffron-500/30 pb-2">
              Consultation Services
            </h4>
            <ul className="space-y-1.5 text-xs text-amber-200/70">
              {SERVICES_DATA.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-saffron-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-saffron-400"></span>
                    <span className="truncate">{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Numbers 1-9 & Tools */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider border-b border-saffron-500/30 pb-2">
              Life Path (1 – 9)
            </h4>
            <div className="grid grid-cols-3 gap-1.5 text-xs font-serif font-bold">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <a
                  key={num}
                  href="#blog-numbers"
                  className="p-2 rounded-lg bg-white/5 hover:bg-saffron-500/20 text-center text-saffron-200 hover:text-white transition-colors"
                >
                  #{num}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="#calculator"
                className="text-xs text-saffron-400 hover:underline flex items-center gap-1"
              >
                <span>Free DOB Calculator &rarr;</span>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider border-b border-saffron-500/30 pb-2">
              Sanctum Office
            </h4>
            <p className="text-amber-200/70 leading-relaxed">
              {BRAND_INFO.officeAddress}
            </p>
            <p className="text-amber-200/70">
              <strong>Hours:</strong> {BRAND_INFO.operatingHours}
            </p>
            <p className="text-amber-200/70">
              <strong>Phone:</strong> {BRAND_INFO.phone}
            </p>
            <p className="text-amber-200/70">
              <strong>Email:</strong> {BRAND_INFO.email}
            </p>
          </div>

        </div>

        {/* Bottom Bar & Domain Architecture Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-amber-200/60 gap-4">
          <p>
            &copy; {new Date().getFullYear()} <strong>{BRAND_INFO.name}</strong>. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-saffron-400">Brand Positioning: {BRAND_INFO.positioning}</span>
            <span>•</span>
            <a href="#services" className="hover:text-white">Privacy Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white">Client Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
