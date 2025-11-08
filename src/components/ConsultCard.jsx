import React, { useState } from 'react';

export default function ConsultCard() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 900); // mock only; backend not required yet
  };

  return (
    <section id="consult" className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">Quick consult</h2>
            <p className="mt-2 text-slate-600 text-sm">Describe your concern. Keep it general; this is not a medical diagnosis.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., Intermittent chest tightness after exercise, mild shortness of breath..."
                className="w-full min-h-[120px] resize-y rounded-md border border-slate-300 focus:border-slate-900 focus:ring-slate-900/10 outline-none px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">For education only. Not a substitute for professional care.</span>
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
                >
                  {loading ? 'Analyzing…' : 'Get insights'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
