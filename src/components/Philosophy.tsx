'use client';

import React from 'react';
import { SITE_CONFIG } from '@/config/site';

export const Philosophy: React.FC = () => {
  return (
    <section className="relative w-full py-40 px-4 md:px-8 max-w-7xl mx-auto z-10 border-t border-white/10 overflow-hidden">
      <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto">
        <span className="text-xs uppercase tracking-[0.4em] font-mono text-white/50 block">
          ФИЛОСОФИЯ МЕРЫ И ФОРМЫ
        </span>

        <blockquote className="text-3xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
          &ldquo;{SITE_CONFIG.philosophy}&rdquo;
        </blockquote>

        <p className="text-base md:text-lg text-white/60 font-mono tracking-widest font-light uppercase">
          {SITE_CONFIG.philosophyRu}
        </p>
      </div>

      {/* Atmospheric Background Typography Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black font-display uppercase text-white/[0.02] pointer-events-none select-none whitespace-nowrap">
        TKACHEV STUDIO
      </div>
    </section>
  );
};
