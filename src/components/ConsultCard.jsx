import React, { useState } from 'react';

export default function ConsultCard() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 900);
  };

  return (
    <section id="consult" className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-medium text-slate-900">Describe your concern</h2>
            <p className="mt-2 text-slate-600 text-sm">Keep it general; this is educational guidance only.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., Intermittent chest tightness after exercise, mild shortness of breath..."
                className="w-full min-h-[120px] resize-y rounded-xl border border-slate-300 focus:border-slate-900 focus:ring-slate-900/10 outline-none px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Not a medical diagnosis. In emergencies call local services.</span>
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
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
