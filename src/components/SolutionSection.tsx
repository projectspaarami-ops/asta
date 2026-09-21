import React from 'react';
import { BatchInfo } from '../types';
import { clarityPoints } from '../data/landingData';
import { CheckCircle2, Gift, Sparkles, ArrowRight, Shield, Video, Calendar, User, Clock, IndianRupee } from 'lucide-react';

interface SolutionSectionProps {
  batchInfo: BatchInfo;
  onOpenRegister: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ batchInfo, onOpenRegister }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-blue-800 bg-blue-50 border border-blue-200 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>The Solution — Now With a Stacked Offer</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            What Is the ASTA Eye-Opener Session?
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-4">
            A free, 3-hour live online session designed to give you a{' '}
            <strong className="text-slate-950 font-semibold">
              realistic, no-nonsense introduction to how the stock market actually works — before you risk a single rupee.
            </strong>
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            This is not a sales pitch disguised as a webinar. It’s the same starting point thousands of ASTA students — from working professionals to homemakers to retirees — began with.
          </p>
        </div>

        {/* 2-Column Layout: Clarity Points on Left, Stacked Offer Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: What You Get Clarity On */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span>In this session, you’ll get clarity on:</span>
            </h3>

            <div className="space-y-4 mb-8">
              {clarityPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                    {point}
                  </div>
                </div>
              ))}
            </div>

            {/* Bonus stacked value callout */}
            <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-amber-800 mb-1">
                  🎁 Register today
                </div>
                <p className="text-sm text-amber-950 font-medium leading-relaxed">
                  Receive instant access to the <strong className="font-bold">Market Orientation Roadmap PDF & Beginner Risk Checklist</strong> upon confirmation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Offer Card (Navy Blue Card for strong contrast) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0B192C] text-white p-6 sm:p-8 shadow-xl border border-slate-700 sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/80 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
                    Complete Masterclass Overview
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Session Details
                  </h4>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                  100% Free Pass
                </div>
              </div>

              {/* Table / List of attributes */}
              <div className="space-y-4 mb-8">
                {/* Format */}
                <div className="flex items-start justify-between py-2 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                    <Video className="w-4 h-4 text-blue-400" />
                    <span>Format</span>
                  </div>
                  <div className="text-right text-xs sm:text-sm font-semibold text-slate-100 max-w-[200px]">
                    Eye-Opener + Market Orientation (2 live sessions)
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between py-2 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>Duration</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-100">
                    3 hours
                  </div>
                </div>

                {/* Trainer */}
                <div className="flex items-center justify-between py-2 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                    <User className="w-4 h-4 text-blue-400" />
                    <span>Trainer</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-amber-400">
                    Avadhut Sathe
                  </div>
                </div>

                {/* Mode */}
                <div className="flex items-center justify-between py-2 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span>Mode</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-100">
                    100% Online
                  </div>
                </div>

                {/* Investment */}
                <div className="flex items-center justify-between py-2 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                    <IndianRupee className="w-4 h-4 text-emerald-400" />
                    <span>Investment</span>
                  </div>
                  <div className="text-right">
                    <span className="line-through text-slate-400 text-xs mr-2">₹590</span>
                    <span className="text-emerald-400 font-extrabold text-base sm:text-lg">
                      Free
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      (for the next 25 registrations only)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button inside card */}
              <button
                id="solution-card-reserve-cta"
                onClick={onOpenRegister}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-display font-bold text-base shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Reserve My Free Seat →</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 text-center text-xs text-slate-400">
                🔒 Instant confirmation sent to WhatsApp & Email
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
