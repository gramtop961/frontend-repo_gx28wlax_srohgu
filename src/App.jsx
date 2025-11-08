import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureStrip from './components/FeatureStrip';
import ConsultCard from './components/ConsultCard';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <ConsultCard />
      </main>
      <footer id="contact" className="bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-sm text-slate-500">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} MedIntel AI. Educational use only.</p>
            <a href="#top" className="hover:text-slate-800 transition-colors">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
