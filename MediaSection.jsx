import React, { useState } from 'react';
import { 
  Play, 
  Video, 
  Image as ImageIcon, 
  X, 
  ExternalLink, 
  Sparkles, 
  Eye, 
  Maximize2,
  Clock,
  Layers
} from 'lucide-react';
import { VIDEO_DATA, GALLERY_DATA } from '../data/numerologyData';

export default function MediaSection() {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('All');
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeImageLightbox, setActiveImageLightbox] = useState(null);

  const filteredGallery = GALLERY_DATA.filter((item) => {
    if (activeGalleryFilter === 'All') return true;
    return item.category === activeGalleryFilter;
  });

  return (
    <section id="media-gallery" className="py-20 bg-vedic-parchment/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-100 text-crimson-800 text-xs font-semibold tracking-wider uppercase">
            <Video className="w-3.5 h-3.5 text-crimson-700" />
            <span>Visual Showcase & Masterclasses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight">
            Media Streaming & Visual Gallery
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Watch our masterclasses on date-of-birth analysis, examine corporate brand case studies, and explore 
            our consultations & global symposiums.
          </p>
        </div>

        {/* 1. Video Streaming Showcase */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-saffron-200 pb-3">
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-crimson-700 fill-crimson-700" />
              <h3 className="font-serif font-black text-xl text-slate-900">
                Educational Video Masterclasses & Insights
              </h3>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Embedded HD Player • Auto-Thumbnails • Lightbox
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEO_DATA.map((video) => (
              <div
                key={video.id}
                className="group bg-white rounded-2xl overflow-hidden border border-saffron-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Video Thumbnail with Hover Overlay */}
                  <div
                    onClick={() => setActiveVideoModal(video)}
                    className="relative aspect-video w-full overflow-hidden cursor-pointer bg-slate-900"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    
                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Centered Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-crimson-700/90 group-hover:bg-crimson-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 ml-0.5 fill-white" />
                      </div>
                    </div>

                    {/* Badges on Thumbnail */}
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[11px] text-white font-medium">
                      <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                        <Clock className="w-3 h-3 text-saffron-300" />
                        {video.duration}
                      </span>
                      <span className="bg-crimson-900/80 px-2 py-0.5 rounded">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  {/* Video Details */}
                  <div className="p-5">
                    <h4 className="font-serif font-bold text-base text-slate-900 group-hover:text-crimson-800 transition-colors line-clamp-2 mb-2">
                      {video.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {video.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <button
                    onClick={() => setActiveVideoModal(video)}
                    className="w-full py-2 px-3 rounded-xl bg-saffron-50 hover:bg-saffron-100 text-saffron-900 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-saffron-200"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Masterclass</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Photo Gallery & Visual Showcase */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-saffron-200 pb-3">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-saffron-600" />
              <h3 className="font-serif font-black text-xl text-slate-900">
                Visual Gallery & Milestone Moments
              </h3>
            </div>

            {/* Gallery Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {['All', 'Events', 'Consultations', 'Testimonials'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveGalleryFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeGalleryFilter === cat
                      ? 'bg-saffron-700 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-saffron-50 border border-saffron-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImageLightbox(item)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-saffron-200 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>

                  {/* Expand icon on hover */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                    <h4 className="font-serif font-bold text-sm mb-1 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Video Lightbox Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video w-full bg-black">
              {/* Embedded video player */}
              <iframe
                src={`${activeVideoModal.embedUrl}?autoplay=1`}
                title={activeVideoModal.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-6 text-white">
              <span className="text-xs text-saffron-400 font-semibold uppercase tracking-wider block mb-1">
                {activeVideoModal.category} Masterclass
              </span>
              <h3 className="text-xl font-serif font-black mb-2">
                {activeVideoModal.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeVideoModal.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {activeImageLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-white/15">
            <button
              onClick={() => setActiveImageLightbox(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-black/95 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activeImageLightbox.image}
                alt={activeImageLightbox.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-saffron-500/20 text-saffron-300 border border-saffron-400/30">
                  {activeImageLightbox.category}
                </span>
              </div>
              <h3 className="text-xl font-serif font-black mb-1">
                {activeImageLightbox.title}
              </h3>
              <p className="text-xs text-slate-300">
                {activeImageLightbox.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
