import React, { useState, useEffect } from 'react';
import { defaultBatchInfo } from './data/landingData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { AudienceSection } from './components/AudienceSection';
import { WhyTrustSection } from './components/WhyTrustSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { RegistrationModal } from './components/RegistrationModal';
import { Sparkles, ArrowRight, Flame } from 'lucide-react';

export default function App() {
  const [batchInfo, setBatchInfo] = useState(defaultBatchInfo);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showStickyBottomBar, setShowStickyBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bottom urgency bar once scrolled past 400px
      if (window.scrollY > 400) {
        setShowStickyBottomBar(true);
      } else {
        setShowStickyBottomBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
  };

  const handleRegisterSuccess = () => {
    // Decrement remaining seats slightly to simulate real-time registration activity
    setBatchInfo((prev) => ({
      ...prev,
      remainingSeats: Math.max(1, prev.remainingSeats - 1),
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-300 selection:text-slate-900">
      {/* Sticky Navbar */}
      <Navbar
        batchInfo={batchInfo}
        onOpenRegister={handleOpenRegister}
      />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <HeroSection
          batchInfo={batchInfo}
          onOpenRegister={handleOpenRegister}
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        {/* THE PROBLEM SECTION */}
        <ProblemSection onOpenRegister={handleOpenRegister} />

        {/* THE SOLUTION SECTION (With Stacked Offer) */}
        <SolutionSection
          batchInfo={batchInfo}
          onOpenRegister={handleOpenRegister}
        />

        {/* WHO THIS IS FOR SECTION */}
        <AudienceSection onOpenRegister={handleOpenRegister} />

        {/* WHY TRUST ASTA (Authority in Navy Blue) */}
        <WhyTrustSection onOpenRegister={handleOpenRegister} />

        {/* SOCIAL PROOF SECTION */}
        <SocialProofSection onOpenRegister={handleOpenRegister} />

        {/* FAQ SECTION */}
        <FaqSection onOpenRegister={handleOpenRegister} />

        {/* FINAL CTA SECTION (With Real Urgency) */}
        <FinalCtaSection
          batchInfo={batchInfo}
          onOpenRegister={handleOpenRegister}
        />
      </main>

      {/* MANDATORY FOOTER / COMPLIANCE */}
      <Footer />

      {/* Floating Bottom Quick Action Bar (Mobile & Desktop on scroll) */}
      {showStickyBottomBar && (
        <aside aria-label="Quick Registration Bar" className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl flex items-center justify-between gap-3 max-w-4xl mx-auto rounded-t-2xl sm:mb-2 sm:inset-x-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
            <div className="text-xs sm:text-sm">
              <span className="font-bold text-slate-900 block leading-tight">
                Live Batch: {batchInfo.day}, {batchInfo.date}
              </span>
              <span className="text-rose-600 font-semibold text-[11px] sm:text-xs">
                ⚠️ Only {batchInfo.remainingSeats} free seats left
              </span>
            </div>
          </div>

          <button
            id="floating-reserve-btn"
            onClick={handleOpenRegister}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md transition whitespace-nowrap cursor-pointer"
          >
            <span>Reserve Free Seat →</span>
          </button>
        </aside>
      )}

      {/* Interactive Video Message Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onReserve={handleOpenRegister}
      />

      {/* Registration Modal with Instant VIP Pass generation */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        batchInfo={batchInfo}
        onRegisterSuccess={handleRegisterSuccess}
      />
    </div>
  );
}
