import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] bg-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 lg:pt-28 pb-16">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Doctor-like Intelligence.
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            A professional, minimal interface for AI-driven clinical guidance. Clean, focused, and built for clarity.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#consult"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors"
            >
              Start a consult
            </a>
            <a
              href="#learn"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
