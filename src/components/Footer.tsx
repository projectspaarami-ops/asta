import React from 'react';
import { ShieldAlert, CheckCircle, Lock, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs sm:text-sm py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand identity summary */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white text-[#0B192C] font-display font-extrabold text-xl flex items-center justify-center tracking-tighter">
              ASTA
            </div>
            <div>
              <div className="font-display font-bold text-white text-base">
                AVADHUT SATHE TRADING ACADEMY
              </div>
              <div className="text-xs text-slate-400">
                Empowering Indian households with market literacy since 2008
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              256-Bit SSL Encrypted Registration
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
              Official ASTA Eye-Opener Portal
            </span>
          </div>
        </div>

        {/* Mandatory Compliance Disclaimer Box */}
        <div className="my-8 p-5 sm:p-6 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>Official Regulatory & Educational Compliance Disclaimer</span>
          </div>
          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 font-normal">
            <strong>Disclaimer:</strong> AVADHUT SATHE TRADING ACADEMY PRIVATE LIMITED is a purely educational institution providing market literacy, technical analysis training, and risk management workshops. We do not provide investment advice, stock recommendations, buy/sell calls, or financial advisory services. Trading in financial markets involves substantial risk; past performance or educational case studies are not indicative of future results.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AVADHUT SATHE TRADING ACADEMY PRIVATE LIMITED. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Support Helpdesk</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
