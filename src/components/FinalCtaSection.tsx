import React from 'react';
import { BatchInfo } from '../types';
import { Sparkles, ArrowRight, Clock, ShieldCheck, Flame, Gift } from 'lucide-react';

interface FinalCtaSectionProps {
  batchInfo: BatchInfo;
  onOpenRegister: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ batchInfo, onOpenRegister }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/40 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-rose-100 text-rose-800 border border-rose-200 mb-6">
          <Flame className="w-4 h-4 text-rose-600 fill-rose-600" />
          <span>Final Seats Alert for Live Batch</span>
        </div>

        {/* Big H2 Headline */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          Your First Step Starts With One Free Session
        </h2>

        {/* Sub-text */}
        <p className="text-base sm:text-xl text-slate-700 leading-relaxed font-medium max-w-2xl mx-auto mb-8">
          You don’t need experience. You don’t need capital ready today. You just need to start with the right foundation.
        </p>

        {/* Urgency Card */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl p-6 border-2 border-rose-200 shadow-md mb-8">
          <div className="flex items-center justify-center gap-2 text-rose-700 font-bold text-sm sm:text-base mb-3">
            <Clock className="w-4 h-4 animate-spin" />
            <span>
              ⏳ {batchInfo.remainingSeats} of {batchInfo.totalSeats} seats remaining for {batchInfo.day}, {batchInfo.date} batch — once full, next batch opens in 7 days.
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden mb-2">
            <div
              className="bg-gradient-to-r from-emerald-500 to-rose-500 h-full rounded-full transition-all duration-500"
              style={{
                width: `${((batchInfo.totalSeats - batchInfo.remainingSeats) / batchInfo.totalSeats) * 100}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500 font-medium">
            <span>25 Seats Claimed (Free Pass)</span>
            <span className="text-rose-600 font-bold">Only {batchInfo.remainingSeats} Left</span>
          </div>
        </div>

        {/* Massive CTA button */}
        <div className="flex flex-col items-center gap-3">
          <button
            id="final-reserve-now-btn"
            onClick={onOpenRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-display font-extrabold text-lg sm:text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
          >
            <span>RESERVE MY FREE SEAT NOW →</span>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium mt-2">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Free • No Credit Card Required
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Gift className="w-4 h-4 text-amber-500" />
              Includes Free Market Orientation PDF
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
