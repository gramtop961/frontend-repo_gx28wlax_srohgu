import React from 'react';

const features = [
  {
    title: 'Evidence-first',
    desc: 'Summaries grounded in trusted clinical sources.',
  },
  {
    title: 'Privacy-safe',
    desc: 'Your data is encrypted and never shared.',
  },
  {
    title: 'Triage-ready',
    desc: 'Fast, structured assessment to guide next steps.',
  },
];

export default function FeatureStrip() {
  return (
    <section id="features" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-2">
              <h3 className="text-slate-900 font-medium">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
