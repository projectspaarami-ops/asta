import React from 'react';
import { Clock, AlertTriangle, Tv, ArrowRight, XCircle, CheckCircle } from 'lucide-react';
import { problemPoints } from '../data/landingData';

interface ProblemSectionProps {
  onOpenRegister: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenRegister }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-rose-700 bg-rose-100 mb-4">
            <span>The Reality Of Stock Market Learning</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Most People Never Start Because No One Explains It Simply
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Here’s the truth: the stock market isn’t complicated because it is hard —{' '}
            <strong className="text-slate-950 font-semibold">
              it’s complicated because most people never got a simple, honest introduction to it.
            </strong>
          </p>
        </div>

        {/* 3 Common Mistakes / Traps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problemPoints.map((point, index) => {
            return (
              <div
                key={point.id}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Top indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-display font-bold text-sm border border-rose-200">
                      0{index + 1}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Dead End</span>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs text-rose-700 font-medium">
                  Result: Frustration, lost time, or lost capital
                </div>
              </div>
            );
          })}
        </div>

        {/* Strong Contrast Conclusion Callout */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-white border border-slate-300 p-6 sm:p-8 shadow-sm text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mb-4">
            <CheckCircle className="w-6 h-6" />
          </div>
          <p className="text-base sm:text-xl font-bold text-slate-900 mb-2">
            None of these are a real starting point. This session is.
          </p>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
            Get an unbiased, foundational blueprint from mentors who have spent decades analyzing market cycles and helping ordinary individuals build genuine market competence.
          </p>
          <button
            id="problem-reserve-cta"
            onClick={onOpenRegister}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0B192C] hover:bg-slate-900 text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow transition"
          >
            <span>Reserve My Free Seat →</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
