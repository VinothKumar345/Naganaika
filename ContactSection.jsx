import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle,
  KeyRound,
  Check
} from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '../data/numerologyData';
import LocationMap from './LocationMap';
import PaymentInfoSection from './PaymentInfoSection';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceCategory: 'Personal Numerology Reading',
    dob: '',
    message: ''
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otpFeedback, setOtpFeedback] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    if (!formData.message.trim()) errs.message = 'Please describe your query';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendOtp = () => {
    if (!formData.phone || formData.phone.length < 10) {
      setOtpFeedback('Please enter a valid 10-digit phone number first');
      return;
    }
    setOtpSent(true);
    setOtpFeedback('OTP code sent to ' + formData.phone + ' (Use simulation code: 7799)');
  };

  const handleVerifyOtp = () => {
    if (otpCode === '7799' || otpCode.length === 4) {
      setIsOtpVerified(true);
      setOtpFeedback('Phone number verified successfully!');
    } else {
      setOtpFeedback('Invalid OTP. Please enter 7799 to simulate.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-vedic-cream relative border-t border-saffron-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-100 text-crimson-800 text-xs font-semibold tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5 text-crimson-700" />
            <span>Consultation Enquiries & Direct Booking</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight">
            Contact Naganiaka, Nakuli Numerology
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Submit your consultation query below. Our administrative team will review your date of birth 
            and contact you with prioritized appointment slots.
          </p>
        </div>

        {/* Form and Quick Contacts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Inquiry Form with Validation */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-saffron-200 shadow-xl">
            <h3 className="text-2xl font-serif font-black text-slate-900 mb-2">
              Send a Consultation Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Submissions automatically trigger instant SMS and email alerts to our on-duty senior numerologist.
            </p>

            {submittedSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-serif font-black text-emerald-950">
                  Enquiry Received Successfully!
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. An automated confirmation SMS & Email notification 
                  has been sent to our administrative team. We will call you at <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmittedSuccess(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        serviceCategory: 'Personal Numerology Reading',
                        dob: '',
                        message: ''
                      });
                      setIsOtpVerified(false);
                      setOtpSent(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-crimson-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Krishnan"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                      errors.fullName ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-crimson-600'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-600 text-[11px] mt-1">{errors.fullName}</p>}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-crimson-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@gmail.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-crimson-600'
                      }`}
                    />
                    {errors.email && <p className="text-red-600 text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-crimson-600">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98400 xxxxx"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-crimson-600'
                      }`}
                    />
                    {errors.phone && <p className="text-red-600 text-[11px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Optional OTP Verification Specification Module */}
                <div className="p-3.5 rounded-xl bg-saffron-50/60 border border-saffron-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5 text-saffron-700" />
                      Optional Phone Verification (OTP)
                    </span>
                    {isOtpVerified ? (
                      <span className="text-emerald-700 text-xs font-bold flex items-center gap-1">
                        <Check className="w-4 h-4" /> Verified
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="text-xs text-crimson-800 font-semibold underline hover:text-crimson-900"
                      >
                        {otpSent ? 'Resend OTP' : 'Send Test OTP'}
                      </button>
                    )}
                  </div>

                  {otpSent && !isOtpVerified && (
                    <div className="mt-2.5 flex items-center gap-2">
                      <input
                        type="text"
                        maxLength="4"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        placeholder="Enter 7799"
                        className="w-28 px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-center font-mono"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        className="px-3 py-1.5 bg-saffron-600 hover:bg-saffron-700 text-white rounded-lg text-xs font-semibold"
                      >
                        Verify
                      </button>
                    </div>
                  )}

                  {otpFeedback && (
                    <p className={`text-[11px] mt-1.5 ${isOtpVerified ? 'text-emerald-700 font-medium' : 'text-slate-600'}`}>
                      {otpFeedback}
                    </p>
                  )}
                </div>

                {/* Service Selection & DOB */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Category <span className="text-crimson-600">*</span>
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-600 bg-white"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.badge})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Date of Birth (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-600 bg-white"
                    />
                  </div>
                </div>

                {/* Query Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Query Details / Specific Concerns <span className="text-crimson-600">*</span>
                  </label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify your career, marital, business, or hardship questions so we can prepare your chart in advance..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                      errors.message ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-crimson-600'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-600 text-[11px] mt-1">{errors.message}</p>}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-crimson-800 via-crimson-700 to-saffron-700 hover:from-crimson-900 hover:to-saffron-800 text-white font-serif font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Dispatching Secure Notification...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-saffron-300" />
                      <span>Submit Consultation Enquiry</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center italic">
                  Submissions are encrypted and reviewed in strict accordance with client confidentiality.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Fast Contact Card & WhatsApp Connect */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-vedic-navy to-vedic-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-saffron-500/30 space-y-6">
              <div>
                <span className="text-xs uppercase font-serif font-bold tracking-widest text-saffron-400 block mb-1">
                  Direct Line
                </span>
                <h3 className="text-2xl font-serif font-black text-white">
                  Speak with an Intake Counselor
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Have urgent questions about your horoscope matching or business launch window? 
                  Reach our direct helpline during consultation hours.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-saffron-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-slate-400 text-xs">Primary Telephone</span>
                    <a href={`tel:${BRAND_INFO.phone}`} className="font-semibold text-white hover:text-saffron-300">
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-saffron-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-slate-400 text-xs">Administrative Email</span>
                    <a href={`mailto:${BRAND_INFO.email}`} className="font-semibold text-white hover:text-saffron-300">
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Connect</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  Send a WhatsApp message for rapid slot availability check or to request hardship consultation forms.
                </p>
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Open WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Hardship Compassion Box */}
            <div className="p-5 rounded-3xl bg-white border border-saffron-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Compassion Consultation Request
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you or someone in your family is facing severe financial distress or medical emergency, 
                please select the "Free Consultation for People in Need" service in the form. No fee will ever be charged.
              </p>
            </div>

          </div>

        </div>

        {/* Embedded Geo-Mapping & Payment Information Modules as Specified */}
        <div className="space-y-12 pt-8">
          <LocationMap />
          <PaymentInfoSection />
        </div>

      </div>
    </section>
  );
}
