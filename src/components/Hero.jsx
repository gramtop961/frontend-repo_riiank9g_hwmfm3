import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-950 dark:to-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft glow overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Sparkles className="h-4 w-4 text-violet-300" />
          Discover the best AI tools, fast
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          AI Tools Finder
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Explore, compare, and bookmark AI tools across writing, design, coding, marketing, education, and more.
        </p>
      </div>
    </section>
  );
};

export default Hero;
