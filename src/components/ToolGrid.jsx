import React, { useMemo } from 'react';
import { ExternalLink, Heart, Tag } from 'lucide-react';

const allTools = [
  {
    name: 'Notion AI',
    category: 'Productivity',
    desc: 'Draft, edit, brainstorm, and summarize directly in your workspace.',
    logo: 'https://seeklogo.com/images/N/notion-logo-4CE8FBF5AA-seeklogo.com.png',
    url: 'https://www.notion.so/product/ai',
    pricing: 'Paid',
    keywords: ['notes', 'docs', 'writing'],
  },
  {
    name: 'Jasper',
    category: 'Writing',
    desc: 'AI copywriter for blogs, ads, and social posts.',
    logo: 'https://seeklogo.com/images/J/jasper-ai-logo-0B8C1ECA92-seeklogo.com.png',
    url: 'https://www.jasper.ai',
    pricing: 'Paid',
    keywords: ['copy', 'marketing', 'content'],
  },
  {
    name: 'GitHub Copilot',
    category: 'Coding',
    desc: 'AI pair programmer to autocomplete code and suggest solutions.',
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    url: 'https://github.com/features/copilot',
    pricing: 'Paid',
    keywords: ['code', 'developer', 'pair'],
  },
  {
    name: 'Canva Magic Design',
    category: 'Design',
    desc: 'Generate on-brand designs with AI suggestions and layouts.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Canva_Logo.png',
    url: 'https://www.canva.com',
    pricing: 'Freemium',
    keywords: ['design', 'graphics', 'marketing'],
  },
  {
    name: 'Khanmigo',
    category: 'Education',
    desc: 'Personalized AI tutor by Khan Academy to guide learning.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Khan_Academy_logo_%282018%29.svg/512px-Khan_Academy_logo_%282018%29.svg.png',
    url: 'https://www.khanacademy.org/khan-labs',
    pricing: 'Freemium',
    keywords: ['study', 'tutor', 'learn'],
  },
  {
    name: 'Stable Diffusion',
    category: 'Image Generation',
    desc: 'Open source image generation model for creative workflows.',
    logo: 'https://avatars.githubusercontent.com/u/110530378?s=200&v=4',
    url: 'https://stability.ai',
    pricing: 'Free',
    keywords: ['image', 'art', 'creative'],
  },
];

const ToolGrid = ({ query, selectedCategory, onFavorite, onSelectTool }) => {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allTools.filter((t) => {
      const matchesQuery = q
        ? [t.name, t.category, t.desc, ...(t.keywords || [])]
            .join(' ')
            .toLowerCase()
            .includes(q)
        : true;
      const matchesCategory =
        !selectedCategory || selectedCategory === 'All' ? true : t.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory]);

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((t) => (
        <div key={t.name} className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
          <div className="flex items-start gap-3">
            <img src={t.logo} alt={t.name} className="h-10 w-10 rounded-lg object-contain" />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <button onClick={() => onSelectTool(t)} className="text-left">
                  <h3 className="font-semibold text-white/95 hover:text-white">{t.name}</h3>
                </button>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-white/70">
                  <Tag className="h-3.5 w-3.5" /> {t.pricing}
                </span>
              </div>
              <p className="mt-1 text-xs text-white/60">{t.category}</p>
              <p className="mt-2 line-clamp-2 text-sm text-white/75">{t.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <a href={t.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-violet-300 hover:text-violet-200">
                  Visit <ExternalLink className="h-4 w-4" />
                </a>
                <button
                  onClick={() => onFavorite(t)}
                  className="rounded-full border border-white/10 p-2 text-white/70 hover:border-white/20 hover:bg-white/10"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {filtered.length === 0 && (
        <div className="col-span-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/70">
          No tools match your search.
        </div>
      )}
    </div>
  );
};

export default ToolGrid;
