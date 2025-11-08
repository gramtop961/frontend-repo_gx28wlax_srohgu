import React from 'react';

const items = [
  {
    title: 'Triage that respects time',
    desc: 'Structured, fast intake that surfaces the right questions and highlights red flags.',
  },
  {
    title: 'Evidence, not guesswork',
    desc: 'Summaries cite trusted clinical sources to support every suggestion.',
  },
  {
    title: 'Secure by design',
    desc: 'Data is encrypted in transit and at rest with strong access controls.',
  },
];

export default function FeatureRows() {
  return (
    <section id="features" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
