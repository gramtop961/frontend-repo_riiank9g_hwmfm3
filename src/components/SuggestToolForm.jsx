import React, { useState } from 'react';
import { Send } from 'lucide-react';

const SuggestToolForm = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('Writing');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple local confirmation for now
    setSubmitted(true);
    setName('');
    setUrl('');
    setCategory('Writing');
    setNotes('');
  };

  return (
    <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-lg font-semibold text-white">Suggest a New Tool</h3>
      <p className="mb-4 text-sm text-white/70">Know an awesome AI tool we missed? Share it and we might feature it.</p>
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-1 block text-xs text-white/60">Tool Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:border-violet-400 focus:outline-none"
            placeholder="e.g., Perplexity AI"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1 block text-xs text-white/60">Website</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:border-violet-400 focus:outline-none"
            placeholder="https://example.com"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1 block text-xs text-white/60">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-violet-400 focus:outline-none"
          >
            {['Writing','Image Generation','Coding','Marketing','Education','Productivity','Chatbots','Design','Study'].map((c) => (
              <option key={c} value={c} className="bg-slate-900">
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs text-white/60">Notes (optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:border-violet-400 focus:outline-none"
            placeholder="Why is this tool great? Key features, pricing, etc."
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 font-medium text-white hover:bg-violet-500"
          >
            <Send className="h-4 w-4" /> Submit Suggestion
          </button>
          {submitted && (
            <span className="ml-3 text-sm text-emerald-300">Thanks! Your suggestion was received.</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default SuggestToolForm;
