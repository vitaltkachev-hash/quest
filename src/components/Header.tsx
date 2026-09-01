'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/10' : 'py-6 md:py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center font-display font-bold text-xs tracking-tighter text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
            TS
          </div>
          <span className="font-display font-black tracking-[0.2em] text-sm md:text-base text-white uppercase group-hover:text-white/80 transition-colors">
            TKACHEV STUDIO
          </span>
        </Link>

        {/* Minimal Navigation */}
        <nav className="flex items-center gap-6 text-xs uppercase font-mono tracking-[0.2em] text-white/70">
          <a
            href="#states"
            className="hidden sm:inline-block hover:text-white transition-colors"
          >
            Состояния
          </a>
          <a
            href="#services"
            className="hidden sm:inline-block hover:text-white transition-colors"
          >
            Направления
          </a>
          <a
            href="#about"
            className="hidden sm:inline-block hover:text-white transition-colors"
          >
            О Студии
          </a>
          <a
            href="#contacts"
            className="px-4 py-2 rounded-full border border-white/20 hover:border-white/60 hover:bg-white hover:text-black text-white font-medium transition-all duration-300"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
};
