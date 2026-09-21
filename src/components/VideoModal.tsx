import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserve: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onReserve }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(24);

  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
  }, [isOpen]);

  useEffect(() => {
    let interval: any;
    if (isPlaying && isOpen) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 750);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/90 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Direct Authentic Message (78 Sec)
            </span>
          </div>
          <button
            id="close-video-modal"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video simulation stage */}
        <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-[#0B192C] to-slate-950 flex items-center justify-center overflow-hidden">
          {/* Subtle background ambient graphic */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl"></div>
          </div>

          {/* Authentic Trainer visual simulation */}
          <div className="text-center px-6 max-w-xl z-10 flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 p-1 shadow-lg ring-4 ring-blue-500/30">
                <div className="w-full h-full rounded-full bg-[#0B192C] flex items-center justify-center text-2xl font-bold font-display text-white">
                  AS
                </div>
              </div>
              <span className="absolute bottom-0 right-0 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white border border-slate-900 flex items-center gap-1 shadow">
                <UserCheck className="w-2.5 h-2.5" /> LIVE
              </span>
            </div>

            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase mb-1">
              Avadhut Sathe speaks directly to camera:
            </span>
            <p className="text-base sm:text-xl font-medium text-slate-100 italic leading-relaxed mb-4">
              “Here’s exactly what you’ll learn in this session, and why I’m teaching it for free.”
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Authentic & Unscripted • No studio gimmicks • Real market clarity
            </div>
          </div>

          {/* Bottom video controls simulation */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 flex flex-col gap-2">
            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden cursor-pointer">
              <div
                className="bg-amber-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <button
                  id="toggle-video-play"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white transition"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  id="toggle-video-mute"
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white transition"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-slate-400">
                  0:{progress < 10 ? `0${progress}` : progress} / 1:18 min
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                ASTA Eye-Opener Session Preview
              </div>
            </div>
          </div>
        </div>

        {/* Action footer */}
        <div className="p-4 sm:p-5 bg-[#0B192C] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left text-xs sm:text-sm text-slate-300">
            <span className="text-amber-300 font-semibold">Ready to join this batch?</span> 3 hours of live, interactive market orientation.
          </div>
          <button
            id="video-modal-reserve-btn"
            onClick={() => {
              onClose();
              onReserve();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-sm transition shadow"
          >
            <span>Reserve My Free Seat →</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
