import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] bg-white overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft white gradient to keep content legible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white via-white/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-36 sm:pt-40 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur px-3 py-1 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live clinical insights
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl leading-[1.1] font-medium tracking-tight text-slate-900">
            A calm, clinical AI that feels like speaking to a doctor.
          </h1>
          <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Minimal, precise and trustworthy. Real‑time guidance with an emphasis on clarity and evidence.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#consult"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Start a consult
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white text-slate-900 px-6 py-3 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              Explore features
            </a>
          </div>
        </div>
      </div>

      {/* Fade to white at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
