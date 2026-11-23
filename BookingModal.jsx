import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  Video, 
  Building, 
  CreditCard, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Download
} from 'lucide-react';
import { SERVICES_DATA, BRAND_INFO, PAYMENT_GATEWAYS } from '../data/numerologyData';

export default function BookingModal({ initialService, initialProfile, onClose }) {
  const [step, setStep] = useState(1); // 1: Service & Time, 2: Details & Mode, 3: Payment & Confirm, 4: Success
  const [selectedServiceId, setSelectedServiceId] = useState(initialService?.id || 'personal-numerology-reading');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('11:30 AM');
  const [consultationMode, setConsultationMode] = useState('online'); // 'online' or 'in-person'
  
  const [clientInfo, setClientInfo] = useState({
    name: initialProfile?.fullName || '',
    email: '',
    phone: '',
    dob: initialProfile?.dobString || '',
    birthTime: '',
    birthPlace: '',
    notes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('razorpay'); // 'razorpay', 'upi', 'paypal'
  const [bookingRef, setBookingRef] = useState('');

  const currentService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];
  const isFreeHardship = currentService.category === 'compassion';

  useEffect(() => {
    // Default tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  const handleNext = () => {
    if (step === 1) {
      if (!selectedDate) return;
      setStep(2);
    } else if (step === 2) {
      if (!clientInfo.name || !clientInfo.email || !clientInfo.phone) return;
      setStep(3);
    } else if (step === 3) {
      const generatedRef = 'NNN-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(generatedRef);
      setStep(4);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn select-none">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-saffron-300 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson-600 animate-pulse"></span>
            <span className="text-xs uppercase font-bold tracking-wider text-crimson-900">
              {BRAND_INFO.name} • Consultation Booking
            </span>
          </div>

          <h3 className="text-2xl font-serif font-black text-slate-900">
            {step === 4 ? 'Appointment Confirmed!' : 'Schedule Your Consultation'}
          </h3>

          {/* Stepper Progress */}
          {step < 4 && (
            <div className="flex items-center gap-2 mt-4 text-xs font-semibold">
              <span className={`px-3 py-1 rounded-full ${step === 1 ? 'bg-crimson-800 text-white' : 'bg-saffron-100 text-saffron-900'}`}>
                1. Service & Slot
              </span>
              <span className="text-slate-300">&rarr;</span>
              <span className={`px-3 py-1 rounded-full ${step === 2 ? 'bg-crimson-800 text-white' : 'bg-saffron-100 text-saffron-900'}`}>
                2. Details & Mode
              </span>
              <span className="text-slate-300">&rarr;</span>
              <span className={`px-3 py-1 rounded-full ${step === 3 ? 'bg-crimson-800 text-white' : 'bg-saffron-100 text-saffron-900'}`}>
                3. Confirmation
              </span>
            </div>
          )}
        </div>

        {/* STEP 1: Select Service & Time Slot */}
        {step === 1 && (
          <div className="space-y-5 animate-fadeIn">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Select Consultation Domain
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-crimson-600 bg-white"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title} ({s.badge} • {s.duration})
                  </option>
                ))}
              </select>
            </div>

            <div className="p-3.5 rounded-xl bg-saffron-50/60 border border-saffron-200 text-xs text-slate-700">
              <p className="font-medium text-slate-900 mb-1">{currentService.title}</p>
              <p className="text-[11px] text-slate-600 leading-relaxed">{currentService.shortDesc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Appointment Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-600 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Time Slot (IST)
                </label>
                <select
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-600 bg-white"
                >
                  <option value="10:00 AM">Morning: 10:00 AM - 11:00 AM</option>
                  <option value="11:30 AM">Morning: 11:30 AM - 12:30 PM</option>
                  <option value="02:30 PM">Afternoon: 02:30 PM - 03:30 PM</option>
                  <option value="04:00 PM">Afternoon: 04:00 PM - 05:00 PM</option>
                  <option value="05:30 PM">Evening: 05:30 PM - 06:30 PM</option>
                  <option value="06:45 PM">Evening: 06:45 PM - 07:45 PM</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-crimson-800 hover:bg-crimson-900 text-white font-serif font-bold text-xs flex items-center gap-2 shadow-md transition-all"
              >
                <span>Continue to Client Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Client Details & Consultation Mode */}
        {step === 2 && (
          <div className="space-y-4 animate-fadeIn">
            
            {/* Consultation Mode */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Consultation Preference
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setConsultationMode('online')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    consultationMode === 'online'
                      ? 'bg-crimson-50 border-crimson-700 text-crimson-900 shadow-xs'
                      : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Video className="w-4 h-4 text-crimson-700" />
                  <span>Online Video (Google Meet / Zoom)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setConsultationMode('in-person')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    consultationMode === 'in-person'
                      ? 'bg-crimson-50 border-crimson-700 text-crimson-900 shadow-xs'
                      : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Building className="w-4 h-4 text-crimson-700" />
                  <span>In-Person Sanctum (Chennai)</span>
                </button>
              </div>
            </div>

            {/* Client Info Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Full Name <span className="text-crimson-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-crimson-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Email Address <span className="text-crimson-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                  placeholder="name@email.com"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-crimson-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Phone / WhatsApp <span className="text-crimson-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                  placeholder="+91 98400 12345"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-crimson-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Date of Birth <span className="text-crimson-600">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={clientInfo.dob}
                  onChange={(e) => setClientInfo({ ...clientInfo, dob: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-crimson-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Birth Time (Optional)
                </label>
                <input
                  type="time"
                  value={clientInfo.birthTime}
                  onChange={(e) => setClientInfo({ ...clientInfo, birthTime: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-crimson-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Birth City / Place (Optional)
                </label>
                <input
                  type="text"
                  value={clientInfo.birthPlace}
                  onChange={(e) => setClientInfo({ ...clientInfo, birthPlace: e.target.value })}
                  placeholder="e.g. Chennai, India"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-crimson-600"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                &larr; Back
              </button>
              <button
                onClick={handleNext}
                disabled={!clientInfo.name || !clientInfo.email || !clientInfo.phone}
                className="px-6 py-3 rounded-xl bg-crimson-800 hover:bg-crimson-900 disabled:opacity-40 text-white font-serif font-bold text-xs flex items-center gap-2 shadow-md transition-all"
              >
                <span>Proceed to Summary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Summary & Payment Gateway Routing */}
        {step === 3 && (
          <div className="space-y-5 animate-fadeIn">
            
            {/* Booking Summary Box */}
            <div className="p-4 rounded-2xl bg-saffron-50/70 border border-saffron-200 text-xs space-y-2">
              <div className="flex justify-between border-b border-saffron-200/60 pb-2">
                <span className="text-slate-600">Selected Service:</span>
                <span className="font-bold text-slate-900">{currentService.title}</span>
              </div>
              <div className="flex justify-between border-b border-saffron-200/60 pb-2">
                <span className="text-slate-600">Date & Time:</span>
                <span className="font-semibold text-slate-900">{selectedDate} at {selectedSlot} (IST)</span>
              </div>
              <div className="flex justify-between border-b border-saffron-200/60 pb-2">
                <span className="text-slate-600">Mode:</span>
                <span className="font-semibold text-slate-900 uppercase">
                  {consultationMode === 'online' ? 'Online Video Meeting' : 'Sanctum Office (Chennai)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Consultation Fee:</span>
                <span className="font-bold text-base text-crimson-900">
                  {isFreeHardship ? 'FREE (Hardship Initiative)' : '₹1,500 INR / $45 USD'}
                </span>
              </div>
            </div>

            {/* Payment Method Selector */}
            {!isFreeHardship ? (
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Select Secure Payment Route
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('razorpay')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      paymentMethod === 'razorpay'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950 shadow-xs'
                        : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="block font-bold text-xs mb-0.5">🇮🇳 Indian Domestic Gateway</span>
                    <span className="text-[11px] text-slate-500">UPI, Google Pay, PhonePe, Razorpay, Net Banking</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      paymentMethod === 'paypal'
                        ? 'bg-blue-50 border-blue-600 text-blue-950 shadow-xs'
                        : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="block font-bold text-xs mb-0.5">🌐 International Gateway</span>
                    <span className="text-[11px] text-slate-500">PayPal, Global Credit Cards (USD / EUR / GBP)</span>
                  </button>
                </div>

                {/* Zelle notice disclaimer */}
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-[11px] text-amber-900 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Note:</strong> Zelle is not supported for transfers to Indian bank accounts. 
                    Please use PayPal or international card checkout.
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs">
                <span className="font-bold block mb-1">Compassion-Led No-Fee Consultation</span>
                Your request has zero payment requirement. Our administrative team will verify your submission 
                and prioritize your booking.
              </div>
            )}

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                &larr; Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-crimson-800 hover:bg-crimson-900 text-white font-serif font-bold text-xs flex items-center gap-2 shadow-md transition-all"
              >
                <span>{isFreeHardship ? 'Confirm Zero-Fee Booking' : 'Authorize & Confirm Appointment'}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Success Confirmation */}
        {step === 4 && (
          <div className="text-center py-6 space-y-5 animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-700 font-bold block mb-1">
                Booking Reference: {bookingRef}
              </span>
              <h4 className="text-2xl font-serif font-black text-slate-900">
                Your Slot has Been Reserved!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                A calendar invitation and session details have been dispatched to <strong>{clientInfo.email}</strong>. 
                Our senior numerologist will connect with you on <strong>{selectedDate} at {selectedSlot} IST</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-vedic-parchment border border-saffron-200 text-left text-xs max-w-md mx-auto space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-800">{currentService.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Client:</span>
                <span className="font-semibold text-slate-800">{clientInfo.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Status:</span>
                <span className="font-bold text-emerald-700">
                  {isFreeHardship ? 'Compassion Exemption (No Fee)' : `Confirmed via ${paymentMethod.toUpperCase()}`}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Save / Print Receipt</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-crimson-800 hover:bg-crimson-900 text-white text-xs font-serif font-bold shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
