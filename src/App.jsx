import React, { useMemo, useState } from 'react';
import { Moon, Sun, BadgeCheck } from 'lucide-react';
import Hero from './components/Hero';
import SearchAndFilters from './components/SearchAndFilters';
import FeaturedAndToolOfDay from './components/FeaturedAndToolOfDay';
import ToolGrid from './components/ToolGrid';
import SuggestToolForm from './components/SuggestToolForm';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const [activeTool, setActiveTool] = useState(null);

  React.useEffect(() => {
    const saved = localStorage.getItem('aitf-theme');
    if (saved) setTheme(saved);
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('aitf-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const onFavorite = (tool) => {
    setFavorites((prev) => {
      const exists = prev.find((t) => t.name === tool.name);
      const next = exists ? prev.filter((t) => t.name !== tool.name) : [...prev, tool];
      localStorage.setItem('aitf-favs', JSON.stringify(next));
      return next;
    });
  };

  React.useEffect(() => {
    const savedFavs = localStorage.getItem('aitf-favs');
    if (savedFavs) setFavorites(JSON.parse(savedFavs));
  }, []);

  const recommendations = useMemo(() => {
    if (!activeTool) return [];
    // simple category-based recommendation
    return favorites
      .filter((t) => t.category === activeTool.category && t.name !== activeTool.name)
      .slice(0, 4);
  }, [activeTool, favorites]);

  return (
    <div className="min-h-screen bg-slate-950 p-4 text-white selection:bg-violet-600/40">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/90">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <span className="font-semibold">AI Tools Finder</span>
          </div>
          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:border-white/20"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </header>

        <Hero />

        <SearchAndFilters
          query={query}
          setQuery={setQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <FeaturedAndToolOfDay onFavorite={onFavorite} />

        <ToolGrid
          query={query}
          selectedCategory={selectedCategory}
          onFavorite={onFavorite}
          onSelectTool={setActiveTool}
        />

        {activeTool && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <img src={activeTool.logo} alt={activeTool.name} className="h-14 w-14 rounded-lg object-contain" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{activeTool.name}</h3>
                <p className="text-xs text-white/60">{activeTool.category} • {activeTool.pricing}</p>
                <p className="mt-2 text-white/80">{activeTool.desc}</p>
                {recommendations.length > 0 && (
                  <div className="mt-4">
                    <p className="mb-2 text-sm text-white/70">You may also like</p>
                    <div className="flex flex-wrap gap-3">
                      {recommendations.map((r) => (
                        <button
                          key={r.name}
                          onClick={() => setActiveTool(r)}
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/80 hover:border-violet-400/40"
                        >
                          <img src={r.logo} alt={r.name} className="h-5 w-5 rounded" /> {r.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {favorites.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-3 text-lg font-semibold text-white">Your Favorites</h3>
            <div className="flex flex-wrap gap-3">
              {favorites.map((f) => (
                <button
                  key={f.name}
                  onClick={() => setActiveTool(f)}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/80 hover:border-violet-400/40"
                >
                  <img src={f.logo} className="h-5 w-5 rounded" alt={f.name} /> {f.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <SuggestToolForm />

        <footer className="mt-12 mb-4 text-center text-xs text-white/50">
          Built for explorers of AI. Crafted with care.
        </footer>
      </div>
    </div>
  );
};

export default App;
