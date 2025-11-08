import React from 'react';
import { Star, ExternalLink, Heart } from 'lucide-react';

const featured = [
  {
    name: 'ChatGPT',
    category: 'Chatbots',
    desc: 'Conversational AI assistant for reasoning, writing, and coding.',
    logo: 'https://cdn.iconscout.com/icon/free/png-256/free-openai-15242350-12910020.png',
    url: 'https://chat.openai.com',
    pricing: 'Freemium',
  },
  {
    name: 'Midjourney',
    category: 'Image Generation',
    desc: 'Create stunning images from text prompts with AI.',
    logo: 'https://seeklogo.com/images/M/midjourney-logo-D9BE9B6E97-seeklogo.com.png',
    url: 'https://www.midjourney.com',
    pricing: 'Paid',
  },
  {
    name: 'Claude',
    category: 'Chatbots',
    desc: 'Helpful, harmless, honest AI assistant by Anthropic.',
    logo: 'https://avatars.githubusercontent.com/u/11008868?s=200&v=4',
    url: 'https://claude.ai',
    pricing: 'Freemium',
  },
];

const toolOfDay = featured[0];

const FeaturedAndToolOfDay = ({ onFavorite }) => {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="mb-3 flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-300" />
          <h2 className="text-lg font-semibold text-white">Featured Tools</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((t) => (
            <div key={t.name} className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-violet-400/50">
              <div className="flex items-start gap-3">
                <img src={t.logo} alt={t.name} className="h-10 w-10 rounded-lg object-contain" />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-white">{t.name}</h3>
                      <p className="text-xs text-white/60">{t.category} • {t.pricing}</p>
                    </div>
                    <button
                      onClick={() => onFavorite(t)}
                      aria-label={`Favorite ${t.name}`}
                      className="rounded-full border border-white/10 p-2 text-white/70 hover:border-white/20 hover:bg-white/10"
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-white/70">{t.desc}</p>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200"
                  >
                    Visit Website <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="mb-3 flex items-center gap-2">
          <Star className="h-5 w-5 text-pink-300" />
          <h2 className="text-lg font-semibold text-white">Tool of the Day</h2>
        </div>
        <div className="flex items-start gap-3">
          <img src={toolOfDay.logo} alt={toolOfDay.name} className="h-12 w-12 rounded-lg object-contain" />
          <div>
            <h3 className="font-semibold text-white">{toolOfDay.name}</h3>
            <p className="text-xs text-white/60">{toolOfDay.category} • {toolOfDay.pricing}</p>
            <p className="mt-2 text-sm text-white/70">{toolOfDay.desc}</p>
            <a
              href={toolOfDay.url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200"
            >
              Visit Website <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAndToolOfDay;
