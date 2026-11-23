import React from 'react';
import { MessageCircle } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';
import { SOCIAL_LINKS, BRAND_INFO } from '../data/numerologyData';

export default function FloatingSocialSidebar() {
  return (
    <aside 
      aria-label="Social media channels"
      className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-2.5 bg-white/90 backdrop-blur-md p-2 rounded-2xl border border-saffron-300 shadow-xl"
    >
      {/* STRICT REQUIREMENT: Only Instagram, LinkedIn, and YouTube */}
      <a
        href={SOCIAL_LINKS[0].url}
        target="_blank"
        rel="noreferrer"
        className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-500 text-white flex items-center justify-center hover:scale-115 transition-transform shadow-md group relative"
        title="Instagram - @naganiaka_numerology"
      >
        <InstagramIcon className="w-4 h-4" />
        <span className="absolute left-full ml-3 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Instagram Tips
        </span>
      </a>

      <a
        href={SOCIAL_LINKS[1].url}
        target="_blank"
        rel="noreferrer"
        className="w-9 h-9 rounded-xl bg-blue-700 text-white flex items-center justify-center hover:scale-115 transition-transform shadow-md group relative"
        title="LinkedIn - Naganiaka, Nakuli Numerology"
      >
        <LinkedinIcon className="w-4 h-4" />
        <span className="absolute left-full ml-3 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          LinkedIn Corporate
        </span>
      </a>

      <a
        href={SOCIAL_LINKS[2].url}
        target="_blank"
        rel="noreferrer"
        className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center hover:scale-115 transition-transform shadow-md group relative"
        title="YouTube - Naganiaka Numerology Official"
      >
        <YoutubeIcon className="w-4 h-4" />
        <span className="absolute left-full ml-3 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          YouTube Videos
        </span>
      </a>

      {/* Floating WhatsApp Quick Action */}
      <div className="w-6 h-px bg-saffron-200 my-0.5"></div>

      <a
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center hover:scale-115 transition-transform shadow-md group relative"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="absolute left-full ml-3 px-2.5 py-1 bg-emerald-900 text-white text-[11px] font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          WhatsApp Desk
        </span>
      </a>
    </aside>
  );
}
