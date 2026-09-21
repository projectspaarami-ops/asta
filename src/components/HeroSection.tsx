import React, { useState } from 'react';
import { BatchInfo } from '../types';
import { Play, Star, Video, Users, Building2, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { HeroCountdownTimer } from './HeroCountdownTimer';

interface HeroSectionProps {
  batchInfo: BatchInfo;
  onOpenRegister: () => void;
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ batchInfo, onOpenRegister, onOpenVideo }) => {
  const [headlineMode, setHeadlineMode] = useState<'primary' | 'alternate'>('primary');

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200">
      {/* Background soft subtle accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs sm:text-sm font-semibold text-rose-900 shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 -ml-4.5"></span>
            <span>
              🔴 LIVE Batch — <span className="text-slate-900 font-bold">{batchInfo.day}, {batchInfo.date}</span> at <span className="text-slate-900 font-bold">{batchInfo.time}</span> | Worth <span className="line-through text-slate-500">{batchInfo.originalPrice}</span> — <strong className="text-emerald-700 uppercase font-extrabold tracking-wide">Free for Next 25 Registrations</strong>
            </span>
          </div>

          {/* Optional headline A/B view toggle */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto text-xs bg-slate-100 p-1 rounded-lg border border-slate-200">
            <span className="text-slate-500 px-1 font-medium">Hook:</span>
            <button
              id="hero-headline-primary-toggle"
              onClick={() => setHeadlineMode('primary')}
              className={`px-2.5 py-1 rounded font-medium transition ${
                headlineMode === 'primary'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Primary (Recommended)
            </button>
            <button
              id="hero-headline-alt-toggle"
              onClick={() => setHeadlineMode('alternate')}
              className={`px-2.5 py-1 rounded font-medium transition ${
                headlineMode === 'alternate'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Alternate
            </button>
          </div>
        </div>

        {/* 2-Column Grid on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* H1 Headline */}
            <h1
              id="hero-headline"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-5"
            >
              {headlineMode === 'primary' ? (
                <>
                  The <span className="text-emerald-700 underline decoration-amber-400 decoration-4 underline-offset-4">3-Hour Live Session</span> That Explains What{' '}
                  <span className="text-[#0B192C]">9 Out Of 10 Beginners Get Wrong</span> About The Stock Market
                </>
              ) : (
                <>
                  Before You Put a Single Rupee in the Market —{' '}
                  <span className="text-emerald-700 underline decoration-amber-400 decoration-4 underline-offset-4">
                    Watch This Free Live Session First
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-8 max-w-2xl">
              No prior experience needed. No confusing jargon. Taught live by{' '}
              <strong className="text-slate-950 font-semibold">Avadhut Sathe</strong> — trainer to lakhs of students across India,{' '}
              <span className="bg-amber-100 text-amber-950 px-1.5 py-0.5 rounded font-medium">live, not on a recording.</span>
            </p>

            {/* Key mini bullet highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Practical & Beginner-Oriented</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Live Q&A with Senior Mentors</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Sales Pitch disguised as webinar</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant Market Orientation Roadmap PDF</span>
              </div>
            </div>

            {/* Real-time Countdown Timer */}
            <HeroCountdownTimer batchInfo={batchInfo} />

            {/* CTA Group */}
            <div className="w-full sm:w-auto flex flex-col items-start gap-2.5">
              <button
                id="hero-reserve-cta"
                onClick={onOpenRegister}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-display font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-150 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
              >
                <span>Reserve My Free Seat →</span>
              </button>

              {/* Micro-copy below button */}
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-md">
                <span>⚠️ Only {batchInfo.remainingSeats} seats left for this batch.</span>
                <span className="text-slate-400 font-normal">| Free registration locks immediately</span>
              </div>
            </div>
          </div>

          {/* Right Column: VIDEO PLACEHOLDER (60-90 sec) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B192C] p-2 sm:p-3 shadow-2xl border border-slate-300/80 group">
              {/* Top Tag */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 rounded-t-xl text-xs text-slate-300 border-b border-slate-800 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-200">
                    Authentic Video Message (78 Sec)
                  </span>
                </div>
                <span className="text-[11px] text-amber-400 font-medium">Unpolished & Authentic</span>
              </div>

              {/* Video Thumbnail Frame */}
              <div
                id="hero-video-placeholder"
                onClick={onOpenVideo}
                className="relative aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden bg-slate-800 cursor-pointer flex flex-col items-center justify-center text-center p-6 transition-all hover:scale-[1.01]"
              >
                {/* Background image pattern simulation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-0"></div>
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {/* Big Play Button with Ripple */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500/90 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 ml-1 text-slate-950" />
                  </div>
                  <div className="absolute -inset-2 rounded-full border-2 border-amber-400/40 animate-ping pointer-events-none"></div>
                </div>

                {/* Video Quote Caption */}
                <div className="relative z-10 max-w-sm">
                  <span className="inline-block text-xs uppercase tracking-wider font-semibold text-amber-300 mb-1">
                    Avadhut Sathe speaking directly to camera:
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-white leading-snug drop-shadow-sm">
                    “Here’s exactly what you’ll learn in this session, and why I’m teaching it for free.”
                  </p>
                </div>

                {/* Badges on bottom */}
                <div className="absolute bottom-3 inset-x-3 z-10 flex items-center justify-between text-[11px] text-slate-300 bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="font-medium text-emerald-300">Click to watch 78s video</span>
                  <span className="font-mono text-slate-400">0:00 / 1:18</span>
                </div>
              </div>

              {/* Explanatory note */}
              <div className="p-3 text-center">
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-amber-300">Why authentic matters:</strong> Honest, unedited insight from Avadhut Sathe explaining the core vision behind this free initiative.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip (icons/text row directly under hero) */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                India's Most Loved & Highly Rated Stock Market Institute
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Live Sessions — Not Recordings
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Trained Students Across India & Overseas
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                200+ Support Centres Nationwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
