import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Services, Offers, Process, WhyChoose, Testimonials, FAQ, ServiceArea, Contact } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Offers />
        <Process />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <ServiceArea />
        <Contact />
      </main>
    </div>
  );
}
