import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black to-[#0b0b0f]">
      {/* Background visual */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage:
            "radial-gradient(60rem 60rem at 80% -10%, rgba(14,165,233,0.35), transparent 40%)," +
            "radial-gradient(40rem 40rem at 10% 110%, rgba(236,72,153,0.25), transparent 50%)," +
            "url('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen'
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0)_0%,#000_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-28 md:py-32 text-left">
        <p className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white/70">
          EGO HVAC Services LLC — Luxury Comfort, Engineered
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl">
          Vegas Heat? <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">We Run It.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
          Premium HVAC system replacements for Las Vegas homeowners who want quiet, powerful, engineered comfort — not band-aid repairs.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="tel:7025186903" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 text-sm sm:text-base font-extrabold text-black shadow-[0_0_50px_rgba(34,211,238,0.25)] hover:opacity-95 transition">
            <Phone className="h-5 w-5" /> Call Now: 702-518-6903
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm sm:text-base font-bold text-white hover:bg-white/10 transition">
            Request Free Estimate <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm">
          {[
            'Licensed & Insured',
            'Full System Replacements',
            'Fast, Clean Installations',
            'Financing Options Available',
          ].map((item) => (
            <div key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white/80 text-center">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
