import React from 'react';

const logos = ['Precision', 'Privacy', 'Safety', 'Speed', 'Clarity'];

export default function Logos() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center text-center text-sm text-slate-500">
          {logos.map((l) => (
            <div key={l} className="py-3 rounded-md border border-slate-100 bg-slate-50/50">{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
