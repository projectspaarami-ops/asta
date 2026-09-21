import React, { useState } from 'react';
import { BatchInfo, RegistrationFormData } from '../types';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Download, Calendar, MessageSquare, Flame } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  batchInfo: BatchInfo;
  onRegisterSuccess?: (data: RegistrationFormData) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  batchInfo,
  onRegisterSuccess,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    whatsappNumber: '',
    occupation: 'Working Professional',
    city: '',
    preferredLanguage: 'English',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `ASTA-EO-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onRegisterSuccess) {
        onRegisterSuccess(formData);
      }
    }, 600);
  };

  const handleDownloadRoadmap = () => {
    // Generate a simple client-side text/PDF download simulation
    const content = `AVADHUT SATHE TRADING ACADEMY (ASTA)
Market Orientation Roadmap & Beginner Checklist
Attendee: ${formData.fullName || 'Valued Attendee'}
Ticket ID: ${ticketId}
Session: ASTA Eye-Opener Live Batch
Date & Time: ${batchInfo.day}, ${batchInfo.date} at ${batchInfo.time}

CORE CHECKLIST FOR THE LIVE SESSION:
1. Join 10 minutes prior to session commencement.
2. Keep a notebook and pen handy for key insights.
3. Test your internet connection and audio headset.
4. Prepare your questions for the live Q&A round.

TOPICS COVERED:
- Market Realities & What 9 Out Of 10 Beginners Get Wrong
- Risk First Framework: Managing Downside before Chasing Upside
- The 4-Stage Evolution of an Investor & Trader
- Understanding Institutional Movements
- Cultivating Mindset & High Discipline

Disclaimer: AVADHUT SATHE TRADING ACADEMY PRIVATE LIMITED is purely an educational institute.`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ASTA-Market-Orientation-Roadmap-${ticketId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-[#0B192C] text-white p-5 sm:p-6 relative">
          <button
            id="close-registration-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>Live Batch Free Seat Reservation</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
            {isSubmitted ? 'Seat Confirmed Successfully!' : 'Reserve Your Free Seat (Worth ₹590)'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {batchInfo.day}, {batchInfo.date} • {batchInfo.time} (Online Live)
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Urgency callout */}
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-between text-xs text-rose-800 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-rose-600 fill-rose-600" />
                  Only {batchInfo.remainingSeats} free seats left in this batch
                </span>
                <span className="text-slate-600 font-normal">Fee: <strong className="line-through text-slate-400">₹590</strong> <span className="text-emerald-700 font-bold">₹0 Free</span></span>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="reg-full-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium text-slate-900 bg-white"
                />
              </div>

              {/* WhatsApp Number & City Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex rounded-xl border border-slate-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                    <span className="px-2.5 py-2.5 bg-slate-100 text-xs font-bold text-slate-600 border-r border-slate-300 flex items-center">
                      +91
                    </span>
                    <input
                      id="reg-whatsapp"
                      type="tel"
                      required
                      placeholder="9876543210"
                      pattern="[0-9]{10}"
                      title="Please enter a 10 digit Indian mobile number"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full px-3 py-2 text-sm font-medium text-slate-900 focus:outline-none bg-white"
                    />
                  </div>
                  <span className="text-[10px] text-slate-500">Meeting link will be sent here</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    City <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="reg-city"
                    type="text"
                    required
                    placeholder="e.g. Mumbai, Pune, Delhi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium text-slate-900 bg-white"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium text-slate-900 bg-white"
                />
              </div>

              {/* Occupation & Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    I am a
                  </label>
                  <select
                    id="reg-occupation"
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium text-slate-900 bg-white"
                  >
                    <option value="Working Professional">Working Professional</option>
                    <option value="Investor">Investor</option>
                    <option value="Homemaker">Homemaker</option>
                    <option value="Student">Student</option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Retired Professional">Retired Professional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Preferred Language
                  </label>
                  <select
                    id="reg-language"
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium text-slate-900 bg-white"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Kannada">Kannada</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="submit-registration-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-display font-bold text-base shadow-md transition disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Securing Your Free Seat...</span>
                  ) : (
                    <>
                      <span>Confirm Free Reservation →</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero spam guarantee. 100% educational session.</span>
              </div>
            </form>
          ) : (
            /* Confirmation Pass View */
            <div className="space-y-5 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="font-display text-2xl font-bold text-slate-900">
                  Congratulations, {formData.fullName}!
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Your seat for the ASTA Eye-Opener Live Session has been successfully reserved.
                </p>
              </div>

              {/* VIP Pass Card */}
              <div className="p-4 rounded-xl bg-slate-50 border-2 border-dashed border-slate-300 text-left space-y-2">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-semibold uppercase">Official Admission Pass</span>
                  <span className="font-mono font-bold text-blue-700">{ticketId}</span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Eye-Opener + Market Orientation
                </div>
                <div className="text-xs text-slate-600">
                  📅 <strong>{batchInfo.day}, {batchInfo.date}</strong> at <strong>{batchInfo.time}</strong>
                </div>
                <div className="text-xs text-slate-600">
                  👤 Trainer: <strong>Avadhut Sathe</strong> | Mode: <strong>100% Online</strong>
                </div>
                <div className="text-xs text-slate-600">
                  📱 WhatsApp: <strong>+91 {formData.whatsappNumber}</strong>
                </div>
              </div>

              {/* Instant Bonus Action */}
              <div className="space-y-2.5 pt-1">
                <button
                  id="download-roadmap-btn"
                  onClick={handleDownloadRoadmap}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 font-semibold text-sm transition cursor-pointer"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  <span>Download Market Orientation Roadmap PDF</span>
                </button>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2 text-left">
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    We have dispatched your private live stream access details to <strong>+91 {formData.whatsappNumber}</strong> and <strong>{formData.email}</strong>.
                  </span>
                </div>
              </div>

              <button
                id="done-registration-btn"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-[#0B192C] text-white font-semibold text-sm hover:bg-slate-800 transition"
              >
                Close & Return to Page
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
