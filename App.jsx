import React, { useState } from 'react';
import OpeningAnimation from './components/OpeningAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import NumerologyCalculator from './components/NumerologyCalculator';
import B2BSection from './components/B2BSection';
import BlogNumbersSection from './components/BlogNumbersSection';
import WhyChooseUs from './components/WhyChooseUs';
import MediaSection from './components/MediaSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingSocialSidebar from './components/FloatingSocialSidebar';
import BootChatbot from './components/BootChatbot';
import BookingModal from './components/BookingModal';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [bookingModalState, setBookingModalState] = useState({
    isOpen: false,
    service: null,
    profile: null,
  });
  const [selectedBlogNumber, setSelectedBlogNumber] = useState(1);

  const handleOpenBooking = (service = null, profile = null) => {
    setBookingModalState({
      isOpen: true,
      service,
      profile,
    });
  };

  const handleCloseBooking = () => {
    setBookingModalState({
      isOpen: false,
      service: null,
      profile: null,
    });
  };

  const handleSelectNumber = (num) => {
    setSelectedBlogNumber(num);
    const element = document.getElementById('blog-numbers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-vedic-cream relative selection:bg-crimson-800 selection:text-white">
      
      {/* 1. Interactive Opening Animation on First Launch */}
      {showIntro && (
        <OpeningAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* 2. Top Header & Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking(null)}
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* 3. Floating Social Sidebar (Strictly Instagram, LinkedIn, YouTube) */}
      <FloatingSocialSidebar />

      {/* 4. Main Content Workflow */}
      <main className="flex-1">
        {/* Hero Section with Interactive Celestial Mandala & Quick DOB Check */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onSelectNumber={handleSelectNumber}
        />

        {/* Core 12 Services Section (B2C, B2B, Compassion Hardship) */}
        <ServicesSection
          onOpenBooking={handleOpenBooking}
        />

        {/* Interactive DOB & Name Numerology Calculator (Mulank, Bhagyank, Lo Shu 3x3 Grid) */}
        <NumerologyCalculator
          onBookWithProfile={(profile) => handleOpenBooking(null, profile)}
        />

        {/* B2B Corporate Numerology & Brand Naming Showcase */}
        <B2BSection
          onOpenBooking={handleOpenBooking}
        />

        {/* Blog & Knowledge Base: Numerology Significance (Numbers 1 through 9) */}
        <BlogNumbersSection
          selectedNumber={selectedBlogNumber}
          onSelectNumber={setSelectedBlogNumber}
        />

        {/* Why Choose Us & Trust Metrics */}
        <WhyChooseUs
          onOpenBooking={handleOpenBooking}
        />

        {/* Media Modules: Video Streaming Masterclasses & Photo Gallery Showcase */}
        <MediaSection />

        {/* About Us: Vision, Mission & Bedrock Principles */}
        <AboutSection />

        {/* Contact Us, Inquiry Form with Validation & OTP, Location Map, Payment Info */}
        <ContactSection />
      </main>

      {/* 5. Comprehensive Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking(null)}
      />

      {/* 6. AI/Logic-Driven Chatbot ('BOOT Chat') */}
      <BootChatbot
        onOpenBooking={handleOpenBooking}
      />

      {/* 7. Appointment Booking & Payment Gateway Modal */}
      {bookingModalState.isOpen && (
        <BookingModal
          initialService={bookingModalState.service}
          initialProfile={bookingModalState.profile}
          onClose={handleCloseBooking}
        />
      )}

    </div>
  );
}
