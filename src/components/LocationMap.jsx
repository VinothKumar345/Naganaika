import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Navigation, 
  ExternalLink,
  Building,
  CheckCircle2
} from 'lucide-react';
import { BRAND_INFO } from '../data/numerologyData';

export default function LocationMap() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-saffron-200 shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Office Details Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-saffron-700" />
              <span>Sanctum Physical Headquarters</span>
            </div>
            <h3 className="text-2xl font-serif font-black text-slate-900">
              Visit Our Consultation Chamber
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
              Located in the heart of Chennai, designed with Vedic Vastu principles to ensure a peaceful, 
              clarifying consultation experience.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-vedic-parchment border border-saffron-200/80">
              <Building className="w-5 h-5 text-crimson-800 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold mb-0.5">Office Address:</strong>
                <span className="text-slate-600 leading-relaxed">{BRAND_INFO.officeAddress}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-vedic-parchment border border-saffron-200/80">
              <Clock className="w-5 h-5 text-saffron-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold mb-0.5">Operating Hours:</strong>
                <span className="text-slate-600 leading-relaxed">{BRAND_INFO.operatingHours}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-vedic-parchment border border-saffron-200/80">
              <Phone className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold mb-0.5">Direct Enquiries:</strong>
                <span className="text-slate-600">{BRAND_INFO.phone} / {BRAND_INFO.alternatePhone}</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://maps.google.com/?q=Mount+Road+Chennai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-serif font-semibold text-xs tracking-wide transition-all shadow-md"
            >
              <Navigation className="w-4 h-4 text-saffron-400" />
              <span>Get Live Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* Custom Styled Interactive Map Display */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border-2 border-saffron-300 shadow-inner bg-slate-900">
            
            {/* Embedded Interactive Google Map Iframe */}
            <iframe
              title="Naganiaka, Nakuli Numerology Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6668749845727!2d80.26421587484293!3d13.056847987266453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266299b823e85%3A0x6b6c22cb9eb3a958!2sAnna%20Salai%2C%20Mount%20Road%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale-[25%] contrast-110"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Custom Overlay Pin Marker Card */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-saffron-300 max-w-xs pointer-events-none">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-crimson-600 animate-ping"></div>
                <span className="font-serif font-bold text-xs text-crimson-900">
                  Naganiaka Sanctum
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-tight">
                Vedic Heritage Tower, Mount Road, Chennai
              </p>
              <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3 h-3" />
                <span>Open Today: 9:30 AM - 7:30 PM</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
