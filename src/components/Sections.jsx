import React from 'react';
import { Wrench, Gauge, Wind, PanelsTopLeft, CheckCircle, Clock, Shield } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold">About EGO HVAC</h2>
        <p className="mt-4 text-white/80 max-w-3xl">
          We serve residential and light commercial clients across the Las Vegas metro with a single focus: full system replacements engineered for quiet, efficient, long-term comfort. From high-efficiency upgrades and heat pumps to furnaces, ductwork, and smart thermostats — we design and install systems with discipline, not guesswork.
        </p>
      </div>
    </section>
  );
}

export function Services() {
  const items = [
    {
      title: 'Full System Replacement',
      icon: Wrench,
      desc:
        'Out with the noise and breakdowns. In with a matched, high-performance system sized and installed for your home. Expect cleaner air, lower bills, and fewer headaches.',
    },
    {
      title: 'High-Efficiency Upgrades',
      icon: Gauge,
      desc:
        'Cut energy waste without sacrificing comfort. We recommend equipment with proven reliability and install it to manufacturer spec for real-world savings.',
    },
    {
      title: 'Heat Pumps & Central A/C',
      icon: Wind,
      desc:
        'Whisper-quiet, powerful cooling for Vegas heat — plus efficient heating with modern heat pumps. We balance airflow for even temps in every room.',
    },
    {
      title: 'Ductwork & System Design',
      icon: PanelsTopLeft,
      desc:
        'Airflow is everything. We correct undersized or leaky ducting and design layouts that deliver pressure, velocity, and comfort where you need it.',
    },
  ];
  return (
    <section id="services" className="relative bg-[#0b0b0f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Core Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <Icon className="h-6 w-6 text-cyan-400" />
              <h3 className="mt-3 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Offers() {
  return (
    <section id="offers" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Special Offers</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-cyan-500/0 p-5">
            <p className="text-sm font-semibold text-cyan-300">Vegas Heat Buyback Program</p>
            <h3 className="mt-1 text-xl font-bold">Up to $1,500 credit</h3>
            <p className="mt-2 text-white/80 text-sm">
              Trade in your old A/C toward a new high-efficiency system. Exact credit confirmed during your call and assessment.
            </p>
          </div>
          <div className="rounded-xl border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/0 p-5">
            <p className="text-sm font-semibold text-fuchsia-300">Holiday Heat Upgrade Credit</p>
            <h3 className="mt-1 text-xl font-bold">Limited-time credit</h3>
            <p className="mt-2 text-white/80 text-sm">
              Apply a seasonal credit toward new heating or heat pump systems. Details finalized on your consultation call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { title: 'Call or request estimate', detail: 'Reach us by phone or form. We respond fast.' },
    { title: 'In-home assessment & options', detail: 'We measure, assess ducting, and present clear choices.' },
    { title: 'Fast, clean installation', detail: 'Same- or next-day on approved jobs. We protect floors and clean up.' },
  ];
  return (
    <section id="process" className="relative bg-[#0b0b0f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold">How It Works</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/60">Step {i + 1}</div>
              <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/80">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  const bullets = [
    'No cheap band-aid fixes',
    'Engineering-grade installs',
    'Respect for your home (drop cloths, cleanup, shoe covers)',
    'Transparent pricing and clear options',
  ];
  return (
    <section id="why" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Why Choose EGO HVAC</h2>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 p-4">
              <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5" />
              <span className="text-white/80">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Testimonials() {
  const quotes = [
    {
      text: 'Our new system is whisper-quiet. House holds temp even at 110°. Crew was in and out in a day and left the place spotless.',
      name: 'Marissa T.',
      area: 'Summerlin',
    },
    {
      text: 'They gave straight options, no pressure. Install was clean and the energy bill dropped the first month.',
      name: 'Derek S.',
      area: 'Henderson',
    },
    {
      text: 'Professional from first call to final walkthrough. The airflow balance made every room comfortable.',
      name: 'J. Nguyen',
      area: 'Spring Valley',
    },
    {
      text: 'Fast response, precision work. You can tell they care about doing it right, not just swapping boxes.',
      name: 'Elena R.',
      area: 'Enterprise',
    },
  ];
  return (
    <section id="testimonials" className="relative bg-[#0b0b0f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Client Testimonials</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <blockquote className="text-white/90 text-sm">“{q.text}”</blockquote>
              <figcaption className="mt-3 text-xs text-white/60">— {q.name}, {q.area}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    {
      q: 'How long does a full system replacement take?',
      a: 'Most replacements are completed same- or next-day once approved. Complex ductwork or electrical upgrades can add time, but we plan and communicate clearly.',
    },
    {
      q: 'Do you offer financing?',
      a: 'Yes, financing options are available for qualified customers. We can walk you through terms during your in-home assessment.',
    },
    {
      q: 'What warranties do you provide?',
      a: 'We install equipment with strong manufacturer warranties and back our workmanship. Warranty specifics depend on the system you choose.',
    },
    {
      q: 'Should I repair or replace?',
      a: 'If your system is old, loud, or failing repeatedly, replacement often saves money long-term. We provide data-driven options so you can decide with confidence.',
    },
    {
      q: 'What areas do you serve?',
      a: 'Las Vegas, Henderson, Summerlin, and surrounding communities across the valley.',
    },
  ];
  return (
    <section id="faq" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold">FAQ</h2>
        <div className="mt-6 divide-y divide-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-white/90">
                <span className="font-semibold">{f.q}</span>
                <span className="ml-4 text-cyan-300 group-open:hidden">+</span>
                <span className="ml-4 text-cyan-300 hidden group-open:inline">−</span>
              </summary>
              <p className="mt-2 text-sm text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceArea() {
  const areas = ['Las Vegas', 'Henderson', 'Summerlin', 'Spring Valley', 'Enterprise', 'North Las Vegas'];
  return (
    <section id="area" className="relative bg-[#0b0b0f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Service Area</h2>
        <p className="mt-3 text-white/80">Proudly serving Las Vegas, Henderson, Summerlin, and surrounding areas.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-sm">
          {areas.map((a) => (
            <div key={a} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center text-white/80">
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold">EGO HVAC Services LLC</h2>
            <p className="mt-2 text-sm text-white/70">Vegas Heat? We Run It.</p>
            <a href="tel:7025186903" className="mt-6 inline-block rounded-md bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 font-extrabold text-black">Call: 702-518-6903</a>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Licensed & Insured</li>
              <li>• Fast, clean installations</li>
              <li>• Transparent pricing</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Name" />
              <input required type="tel" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Phone" />
              <input type="email" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Email" />
              <input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Address" />
              <select className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400">
                <option className="bg-black">Service Needed</option>
                <option className="bg-black">Full System Replacement</option>
                <option className="bg-black">High-Efficiency Upgrade</option>
                <option className="bg-black">Heat Pump / A/C</option>
                <option className="bg-black">Ductwork & Design</option>
              </select>
              <textarea rows={4} className="sm:col-span-2 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Message" />
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-3 font-extrabold text-black">Request Free Estimate</button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} EGO HVAC Services LLC — Vegas Heat? We Run It.
          </div>
          <nav className="flex items-center gap-4">
            <a href="#top" className="hover:text-white">Home</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#offers" className="hover:text-white">Offers</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </section>
  );
}
