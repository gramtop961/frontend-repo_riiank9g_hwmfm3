import React, { useMemo } from 'react';
import { Search, Filter } from 'lucide-react';

const categories = [
  'All',
  'Writing',
  'Image Generation',
  'Coding',
  'Marketing',
  'Education',
  'Productivity',
  'Chatbots',
  'Design',
  'Study',
];

const SearchAndFilters = ({ query, setQuery, selectedCategory, setSelectedCategory }) => {
  const catItems = useMemo(() => categories, []);

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
      <div className="relative w-full">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search AI tools by name or keyword..."
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-11 py-3 text-white placeholder:text-white/50 focus:border-violet-400 focus:outline-none focus:ring-0"
        />
      </div>
      <div className="flex w-full flex-wrap items-center gap-2 md:justify-end">
        <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white">
          <Filter className="h-4 w-4 text-white/60" />
          <span className="text-sm text-white/80">Category</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {catItems.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                selectedCategory === c
                  ? 'border-violet-400 bg-violet-500/20 text-white'
                  : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilters;
