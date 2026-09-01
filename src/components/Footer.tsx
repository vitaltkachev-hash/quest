'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 px-4 md:px-8 max-w-7xl mx-auto z-10 border-t border-white/10 text-white/50 text-xs font-mono">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center font-display font-bold text-[10px] text-white">
            TS
          </div>
          <span className="uppercase tracking-widest text-white/70">
            TKACHEV STUDIO © {currentYear}
          </span>
        </div>

        <p className="uppercase tracking-widest text-center sm:text-right text-white/40">
          АВТОРСКИЙ DIGITAL EXPERIENCE · BOLD CREATIVE CONCEPT V2
        </p>
      </div>
    </footer>
  );
};
