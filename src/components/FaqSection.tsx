import React, { useState } from 'react';
import { faqList } from '../data/landingData';
import { HelpCircle, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

interface FaqSectionProps {
  onOpenRegister: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenRegister }) => {
  // First item open by default for immediate preview
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-3': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-blue-800 bg-blue-100 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Got Questions? We’ve Got Clear Answers.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            Everything you need to know about the ASTA Eye-Opener live session before reserving your free seat:
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-12">
          {faqList.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-2xs hover:border-slate-300"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-slate-900 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-blue-50 text-blue-700 rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-3 animate-fade-in font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="text-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
            Ready to get full clarity on the stock market?
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Join the upcoming batch completely free. Seats are allocated on a first-come, first-served basis.
          </p>
          <button
            id="faq-reserve-cta"
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
