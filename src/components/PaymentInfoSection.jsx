import React from 'react';
import { 
  CreditCard, 
  ShieldCheck, 
  AlertTriangle, 
  Globe2, 
  CheckCircle2, 
  Lock,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PAYMENT_GATEWAYS } from '../data/numerologyData';

export default function PaymentInfoSection() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-saffron-200 shadow-md">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-semibold uppercase tracking-wider">
          <CreditCard className="w-3.5 h-3.5 text-saffron-700" />
          <span>Payment Gateway Architecture</span>
        </div>
        <h3 className="text-2xl font-serif font-black text-slate-900">
          Seamless & Secure Consultation Remittances
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Transparent payment routing configured for Indian domestic clients and global international patrons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        {/* Domestic Gateways */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-teal-50/40 border border-emerald-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                Domestic (India - INR)
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-950 text-[10px] font-bold">
                Instant Settlement
              </span>
            </div>
            
            <h4 className="font-serif font-bold text-lg text-slate-900 mb-2">
              Razorpay, Cashfree & Instant UPI
            </h4>
            
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Accepting Google Pay, PhonePe, Paytm, BHIM UPI, Net Banking across all Indian nationalized banks, 
              and RuPay/Visa/Mastercard debit and credit cards.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-semibold text-emerald-900">
              <span className="bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-xs">UPI QR</span>
              <span className="bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-xs">Razorpay</span>
              <span className="bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-xs">Cashfree</span>
              <span className="bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-xs">Net Banking</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Automated GST invoice emailed upon booking</span>
          </div>
        </div>

        {/* International Gateways */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/70 to-indigo-50/40 border border-blue-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                International (USD, EUR, GBP)
              </span>
              <span className="px-2 py-0.5 rounded-full bg-blue-200 text-blue-950 text-[10px] font-bold">
                Global Support
              </span>
            </div>
            
            <h4 className="font-serif font-bold text-lg text-slate-900 mb-2">
              PayPal & Global Multi-Currency Cards
            </h4>
            
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Cross-border patrons in the United States, United Kingdom, Canada, Australia, Singapore, and Europe 
              can complete bookings through PayPal or international credit cards.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-semibold text-blue-900">
              <span className="bg-white px-2.5 py-1 rounded-lg border border-blue-200 shadow-xs">PayPal Secure</span>
              <span className="bg-white px-2.5 py-1 rounded-lg border border-blue-200 shadow-xs">USD / GBP / EUR</span>
              <span className="bg-white px-2.5 py-1 rounded-lg border border-blue-200 shadow-xs">Global Cards</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-blue-200/60 flex items-center gap-1.5 text-[11px] text-blue-800 font-medium">
            <Globe2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Automatic currency conversion at transparent bank rates</span>
          </div>
        </div>

      </div>

      {/* Explicit Zelle Advisory Notice as required by specification */}
      <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed">
          <strong className="font-bold block text-sm mb-0.5 text-amber-900">
            {PAYMENT_GATEWAYS.zelleAdvisory.title} ({PAYMENT_GATEWAYS.zelleAdvisory.status})
          </strong>
          {PAYMENT_GATEWAYS.zelleAdvisory.text}
        </div>
      </div>
    </div>
  );
}
