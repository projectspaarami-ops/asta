import React from 'react';
import { astaDifferentiators } from '../data/landingData';
import { ShieldCheck, MessageSquare, Layers, Users2, MapPin, Globe2, ArrowRight } from 'lucide-react';

interface WhyTrustSectionProps {
  onOpenRegister: () => void;
}

const icons = [MessageSquare, Layers, Users2, MapPin, Globe2];

export const WhyTrustSection: React.FC<WhyTrustSectionProps> = ({ onOpenRegister }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#0B192C] text-white relative overflow-hidden border-y border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Authority Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-amber-300 bg-amber-950/80 border border-amber-800/80 mb-4">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Why Trust ASTA (Authority)</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Learn From Trainers Who Trade First, Teach Second
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Avadhut Sathe and the ASTA training team don’t just teach theory —{' '}
            <span className="text-amber-300 font-semibold">
              they built their teaching from real trading experience across Indian and global markets.
            </span>
          </p>
        </div>

        {/* What Makes ASTA Different Grid */}
        <div className="mb-14">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>What makes ASTA different:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {astaDifferentiators.map((diff, index) => {
              const IconComp = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 hover:border-slate-700 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-950 text-blue-400 border border-blue-800/60 flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6 text-amber-400" />
                    </div>

                    <h4 className="font-display text-lg font-bold text-slate-100 mb-3 leading-snug">
                      {diff.title}
                    </h4>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-medium">
                    <span>Core ASTA Pillar</span>
                    <span>#{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlight Banner with CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 border border-slate-700 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Experience the difference live in real time
            </h4>
            <p className="text-sm text-slate-300">
              Join thousands of aspiring traders and investors who have built structured discipline with ASTA's proven frameworks.
            </p>
          </div>

          <button
            id="authority-reserve-cta"
            onClick={onOpenRegister}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-base shadow-lg transition-all shrink-0 cursor-pointer"
          >
            <span>Reserve My Free Seat →</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
