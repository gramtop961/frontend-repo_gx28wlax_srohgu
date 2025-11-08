import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-blue-700" aria-hidden />
          <span className="font-semibold text-slate-900 tracking-tight">MedIntel AI</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
