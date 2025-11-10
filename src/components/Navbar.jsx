import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur border-b border-white/10" id="top">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center text-black font-bold">
            E
          </div>
          <div className="leading-tight">
            <p className="text-white font-extrabold tracking-wide">EGO HVAC</p>
            <p className="text-xs text-white/60">Luxury Comfort, Engineered</p>
          </div>
        </a>
        <div className="flex items-center gap-2">
          <a
            href="tel:7025186903"
            className="hidden sm:flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            <Phone className="h-4 w-4 text-cyan-400" />
            702-518-6903
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-3 sm:px-4 py-2 text-sm font-bold text-black shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:opacity-95 transition"
          >
            Request Estimate
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
