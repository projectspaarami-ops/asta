import React, { useState, useEffect } from 'react';
import { BatchInfo } from '../types';
import { ShieldCheck, Flame, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { getTargetTimestamp, calculateTimeRemaining, TimeRemaining } from '../utils/countdown';

interface NavbarProps {
  batchInfo: BatchInfo;
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ batchInfo, onOpenRegister }) => {
  const [targetTimestamp] = useState<number>(() => getTargetTimestamp(batchInfo));
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(() => calculateTimeRemaining(targetTimestamp));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(targetTimestamp));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTimestamp]);

  const formatDigits = (n: number) => String(n).padStart(2, '0');

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      {/* Top Urgent Strip in Navy Blue */}
      <div className="bg-[#0B192C] text-slate-100 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              LIVE BATCH
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="text-amber-300 font-semibold tracking-wide">
              {batchInfo.day}, {batchInfo.date} at {batchInfo.time}
            </span>
            <span className="hidden md:inline text-slate-400">
              — Worth <span className="line-through text-slate-400">{batchInfo.originalPrice}</span> <strong className="text-emerald-400 uppercase font-bold tracking-wider">Free</strong> for next 25 registrations
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden lg:inline text-slate-400">Offer expires in:</span>
              <span className="font-mono bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded text-amber-400 font-semibold">
                {timeLeft.isExpired
                  ? 'LIVE NOW'
                  : `${timeLeft.days > 0 ? `${timeLeft.days}d ` : ''}${formatDigits(timeLeft.hours)}h : ${formatDigits(timeLeft.minutes)}m : ${formatDigits(timeLeft.seconds)}s`}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-300 bg-rose-950/80 border border-rose-800 px-2 py-0.5 rounded">
              <Flame className="w-3 h-3 text-rose-400 fill-rose-400" />
              Only {batchInfo.remainingSeats} Seats Left
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-[#0B192C] text-white font-display font-extrabold text-xl flex items-center justify-center tracking-tighter shadow-md border border-slate-700">
              ASTA
            </div>
            <div>
              <div className="font-display font-extrabold text-slate-900 tracking-tight text-base sm:text-lg leading-tight">
                Avadhut Sathe <span className="text-[#0B192C] font-semibold text-xs sm:text-sm block text-slate-600">Trading Academy</span>
              </div>
            </div>
          </div>
          <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-[#0B192C] border border-blue-200">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            15+ Yrs Educational Excellence
          </span>
        </div>

        {/* Quick actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden lg:flex flex-col text-right">
            <span className="text-xs text-slate-500 font-medium">Next Live Online Batch</span>
            <span className="text-sm font-semibold text-slate-800">100% Online • Zero Jargon</span>
          </div>

          <button
            id="nav-reserve-button"
            onClick={onOpenRegister}
            className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <Sparkles className="w-4 h-4 text-emerald-200 group-hover:rotate-12 transition-transform" />
            <span>Reserve Free Seat</span>
            <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};
