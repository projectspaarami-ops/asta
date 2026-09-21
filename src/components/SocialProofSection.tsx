import React from 'react';
import { studentTestimonials } from '../data/landingData';
import { Star, Quote, ArrowRight, CheckCircle, Award } from 'lucide-react';

interface SocialProofSectionProps {
  onOpenRegister: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ onOpenRegister }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-emerald-800 bg-emerald-100 mb-4">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Compliance-Safe, Genuine Student Experiences</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            What Our Students Say
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Real feedback from individuals across different walks of life who attended the live Eye-Opener masterclass:
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {studentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1">5.0 / 5.0</span>
                </div>

                {/* Quote text */}
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-6 font-normal italic relative">
                  <span className="text-blue-600 font-serif text-xl font-bold mr-1">“</span>
                  {testimonial.quote}
                  <span className="text-blue-600 font-serif text-xl font-bold ml-1">”</span>
                </p>
              </div>

              {/* Author Info with Photo/Avatar Badge */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-full ${testimonial.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    <span>{testimonial.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div className="text-xs text-slate-600">
                    {testimonial.city} • <span className="text-slate-900 font-medium">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Social Proof Strip */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-200 p-6 text-center shadow-xs">
          <div className="flex items-center justify-center gap-1.5 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-1">
            ⭐⭐⭐⭐⭐ Rated by thousands of students on Google & Facebook
          </div>
          <p className="text-sm text-slate-700 font-medium mb-5">
            4.8/5 aggregate rating from 14,800+ authentic student reviews nationwide
          </p>

          <button
            id="social-proof-reserve-cta"
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
