import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 rounded-full border border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
          <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-sky-500 to-blue-700" aria-hidden />
              <span className="font-medium text-slate-900">MedIntel</span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
              <a href="#features" className="hover:text-slate-900 transition-colors">Solutions</a>
              <a href="#consult" className="hover:text-slate-900 transition-colors">Consult</a>
              <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
              <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            </nav>
            <a
              href="#consult"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
