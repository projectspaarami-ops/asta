import React, { useState, useEffect } from 'react';
import { BatchInfo } from '../types';
import { Clock, Zap, Flame, Calendar, Radio } from 'lucide-react';
import { getTargetTimestamp, calculateTimeRemaining, TimeRemaining } from '../utils/countdown';

interface HeroCountdownTimerProps {
  batchInfo: BatchInfo;
  className?: string;
  onTimerExpire?: () => void;
}

export const HeroCountdownTimer: React.FC<HeroCountdownTimerProps> = ({
  batchInfo,
  className = '',
  onTimerExpire,
}) => {
  const [targetTimestamp] = useState<number>(() => getTargetTimestamp(batchInfo));
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(() => calculateTimeRemaining(targetTimestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = calculateTimeRemaining(targetTimestamp);
      setTimeLeft(remaining);
      if (remaining.isExpired && onTimerExpire) {
        onTimerExpire();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTimestamp, onTimerExpire]);

  const padWithZero = (value: number): string => {
    return String(value).padStart(2, '0');
  };

  return (
    <div
      id="hero-countdown-timer-container"
      role="timer"
      aria-live="polite"
      aria-label={`Time remaining until live batch: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`}
      className={`w-full max-w-xl rounded-2xl bg-gradient-to-br from-slate-900 via-[#0B192C] to-slate-900 p-4 sm:p-5 text-white shadow-xl border border-slate-700/80 mb-8 ${className}`}
    >
      {/* Header bar of the countdown */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
          </span>
          <span className="font-bold tracking-wider text-amber-300 uppercase text-[11px] sm:text-xs">
            Next Live Batch Starts In:
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-300 font-medium bg-slate-800/80 px-2.5 py-1 rounded-md text-[11px]">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>{batchInfo.day}, {batchInfo.date} • {batchInfo.time}</span>
        </div>
      </div>

      {/* Countdown Digits Grid */}
      {timeLeft.isExpired ? (
        <div className="py-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600/90 text-white font-bold text-sm sm:text-base animate-pulse">
            <Radio className="w-4 h-4" />
            <span>Live Session in Progress! Limited Late Access Available</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
          {/* Days */}
          <div
            id="hero-timer-days"
            className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-slate-800/90 border border-slate-700/70 shadow-inner group hover:border-amber-400/50 transition-colors"
          >
            <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight tabular-nums leading-none mb-1">
              {padWithZero(timeLeft.days)}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
              Days
            </span>
          </div>

          {/* Hours */}
          <div
            id="hero-timer-hours"
            className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-slate-800/90 border border-slate-700/70 shadow-inner group hover:border-amber-400/50 transition-colors"
          >
            <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 tracking-tight tabular-nums leading-none mb-1">
              {padWithZero(timeLeft.hours)}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
              Hours
            </span>
          </div>

          {/* Minutes */}
          <div
            id="hero-timer-minutes"
            className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-slate-800/90 border border-slate-700/70 shadow-inner group hover:border-amber-400/50 transition-colors"
          >
            <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight tabular-nums leading-none mb-1">
              {padWithZero(timeLeft.minutes)}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
              Minutes
            </span>
          </div>

          {/* Seconds */}
          <div
            id="hero-timer-seconds"
            className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-slate-800/90 border border-slate-700/70 shadow-inner group hover:border-rose-400/50 transition-colors"
          >
            <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold text-rose-400 tracking-tight tabular-nums leading-none mb-1">
              {padWithZero(timeLeft.seconds)}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
              Seconds
            </span>
          </div>
        </div>
      )}

      {/* Footer reassurance in timer card */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
        <span className="flex items-center gap-1 text-emerald-400 font-medium">
          <Zap className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400 shrink-0" />
          <span>Real-Time Live Schedule</span>
        </span>
        <span className="text-slate-400">
          Free pass allocation closes at 0:00
        </span>
      </div>
    </div>
  );
};
