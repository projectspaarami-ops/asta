import { BatchInfo } from '../types';

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMilliseconds: number;
  isExpired: boolean;
}

export const getTargetTimestamp = (batchInfo: BatchInfo): number => {
  if (batchInfo.targetDateIso) {
    const parsed = new Date(batchInfo.targetDateIso).getTime();
    if (!isNaN(parsed) && parsed > Date.now()) {
      return parsed;
    }
  }

  // Fallback if target is in the past: calculate next upcoming Sunday at 11:00 AM IST
  const now = new Date();
  const target = new Date(now);
  const dayOfWeek = now.getDay();
  const daysUntilSunday = (7 - dayOfWeek) % 7 || 7;
  target.setDate(now.getDate() + daysUntilSunday);
  target.setHours(11, 0, 0, 0);
  if (target.getTime() > now.getTime()) {
    return target.getTime();
  }

  return now.getTime() + (6 * 24 * 3600 + 12 * 3600 + 30 * 60) * 1000;
};

export const calculateTimeRemaining = (targetTimestamp: number): TimeRemaining => {
  const diff = targetTimestamp - Date.now();

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalMilliseconds: 0,
      isExpired: true,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    totalMilliseconds: diff,
    isExpired: false,
  };
};
