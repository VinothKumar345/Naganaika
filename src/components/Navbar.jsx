import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Menu, 
  X, 
  Sparkles, 
  HeartHandshake, 
  Compass, 
  Calculator,
  ChevronDown,
  RotateCcw
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';
import { BRAND_INFO, SOCIAL_LINKS } from '../data/numerologyData';

export default function Navbar({ onOpenBooking, onReplayIntro }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-vedic-cream/95 backdrop-blur-md border-b border-saffron-200/60 shadow-sm transition-all">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-crimson-900 via-crimson-800 to-saffron-900 text-amber-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 bg-saffron-500/20 text-saffron-300 px-2 py-0.5 rounded-full border border-saffron-400/30 text-[11px] font-medium">
              <Sparkles className="w-3 h-3 text-saffron-300" />
              Compassion First
            </span>
            <span className="hidden sm:inline text-amber-200/90">
              Free Consultations available for individuals facing serious hardship.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[12px]">
            {/* STRICT REQUIREMENT: Only Instagram, LinkedIn, and YouTube */}
            <div className="flex items-center gap-2.5 border-r border-amber-300/30 pr-3">
              <a
                href={SOCIAL_LINKS[0].url}
                target="_blank"
                rel="noreferrer"
                className="text-amber-200 hover:text-white transition-colors"
                title="Instagram @naganiaka_numerology"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={SOCIAL_LINKS[1].url}
                target="_blank"
                rel="noreferrer"
                className="text-amber-200 hover:text-white transition-colors"
                title="LinkedIn - Naganiaka, Nakuli Numerology"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={SOCIAL_LINKS[2].url}
                target="_blank"
                rel="noreferrer"
                className="text-amber-200 hover:text-white transition-colors"
                title="YouTube - Naganiaka Numerology Official"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-saffron-400" />
              <span>{BRAND_INFO.phone}</span>
            </a>

            <button
              onClick={onReplayIntro}
              className="hidden md:flex items-center gap-1 text-saffron-300 hover:text-white text-[11px] transition-colors ml-1"
              title="Replay sacred cosmic opening animation"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Replay Intro</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-saffron-500 via-amber-300 to-crimson-600 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img
                src="/naganiaka-logo.jpg"
                alt="Naganiaka, Nakuli Numerology Logo"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-saffron-400/40 animate-pulse-ring pointer-events-none"></div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif font-black text-xl sm:text-2xl tracking-wide text-crimson-800 group-hover:text-crimson-700 transition-colors">
                NAGANIAKA, NAKULI
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-serif font-bold tracking-[0.2em] text-saffron-700 uppercase">
                  NUMEROLOGY
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-saffron-500"></span>
                <span className="hidden sm:inline-block text-[11px] text-slate-500 font-medium">
                  B2C & B2B Consultancy
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#home" className="hover:text-crimson-700 transition-colors">
              Home
            </a>
            
            {/* Services with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <a 
                href="#services" 
                className="flex items-center gap-1 hover:text-crimson-700 transition-colors py-2"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-saffron-100 py-2 animate-fadeIn z-50">
                  <a href="#services" className="block px-4 py-2 hover:bg-saffron-50 text-xs font-semibold text-crimson-900">
                    All 12 Core Consultations
                  </a>
                  <a href="#services?tab=b2c" className="block px-4 py-2 hover:bg-saffron-50 text-xs text-slate-600">
                    B2C Personal & Marriage
                  </a>
                  <a href="#corporate" className="block px-4 py-2 hover:bg-saffron-50 text-xs text-slate-600">
                    B2B Corporate & Brand Naming
                  </a>
                  <a href="#services?tab=compassion" className="block px-4 py-2 hover:bg-saffron-50 text-xs text-emerald-700 font-medium">
                    Free Hardship Consultation
                  </a>
                </div>
              )}
            </div>

            <a href="#calculator" className="flex items-center gap-1.5 hover:text-crimson-700 transition-colors">
              <Calculator className="w-3.5 h-3.5 text-saffron-600" />
              <span>DOB Calculator</span>
            </a>

            <a href="#corporate" className="hover:text-crimson-700 transition-colors">
              B2B Corporate
            </a>

            <a href="#blog-numbers" className="hover:text-crimson-700 transition-colors">
              Numbers (1 - 9)
            </a>

            <a href="#media-gallery" className="hover:text-crimson-700 transition-colors">
              Media & Gallery
            </a>

            <a href="#about" className="hover:text-crimson-700 transition-colors">
              About Us
            </a>

            <a href="#contact" className="hover:text-crimson-700 transition-colors">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors text-xs font-semibold"
              title="Chat with consultant on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking(null)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-crimson-700 to-crimson-800 hover:from-crimson-800 hover:to-crimson-900 text-white font-serif font-semibold text-xs tracking-wide shadow-md shadow-crimson-900/20 hover:shadow-lg transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-saffron-300" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking(null)}
              className="px-3 py-1.5 rounded-lg bg-crimson-800 text-white text-xs font-semibold"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-saffron-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-vedic-cream border-b border-saffron-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-white/70 hover:bg-saffron-100 text-slate-800"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-white/70 hover:bg-saffron-100 text-slate-800"
            >
              All 12 Services
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-white/70 hover:bg-saffron-100 text-crimson-800 font-semibold"
            >
              DOB Calculator
            </a>
            <a
              href="#corporate"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-white/70 hover:bg-saffron-100 text-slate-800"
            >
              B2B Corporate
            </a>
            <a
              href="#blog-numbers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-white/70 hover:bg-saffron-100 text-slate-800"
            >
              Numbers (1 - 9)
            </a>
            <a
              href="#media-gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-white/70 hover:bg-saffron-100 text-slate-800"
            >
              Media & Gallery
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-white/70 hover:bg-saffron-100 text-slate-800"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-white/70 hover:bg-saffron-100 text-slate-800"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-2 border-t border-saffron-200/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href={SOCIAL_LINKS[0].url} target="_blank" rel="noreferrer" className="text-pink-700">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={SOCIAL_LINKS[1].url} target="_blank" rel="noreferrer" className="text-blue-700">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href={SOCIAL_LINKS[2].url} target="_blank" rel="noreferrer" className="text-red-700">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-emerald-700 flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
