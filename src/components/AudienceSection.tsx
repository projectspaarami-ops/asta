import React from 'react';
import { audienceProfiles } from '../data/landingData';
import { ArrowRight, UserCheck } from 'lucide-react';

interface AudienceSectionProps {
  onOpenRegister: () => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onOpenRegister }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-blue-800 bg-blue-100 mb-4">
            <UserCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>Who This Is For</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Built For Beginners. Valuable For Everyone.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Whether you are stepping into financial markets for the first time or looking to eliminate guesswork, discover how this masterclass fits your goals:
          </p>
        </div>

        {/* 6 Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {audienceProfiles.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl p-2 rounded-xl bg-slate-100 group-hover:bg-blue-50 transition-colors">
                    {item.emoji}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold text-blue-700 block">
                      Targeted Objective
                    </span>
                  </div>
                </div>

                <div className="text-sm font-semibold text-slate-900 bg-slate-50 border border-slate-200/80 p-3 rounded-lg mb-3">
                  “{item.tagline}”
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                <span>Tailored Beginner Guidance</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner & CTA */}
        <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <p className="text-base sm:text-lg font-semibold text-slate-900 mb-6">
            No prior experience required. If you’re serious about learning, this session is built for you.
          </p>
          <button
            id="audience-reserve-cta"
            onClick={onOpenRegister}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-base shadow-sm hover:shadow transition cursor-pointer"
          >
            <span>Reserve My Free Seat →</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
