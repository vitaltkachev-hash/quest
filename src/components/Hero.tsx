'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto z-10">
      {/* Top Tag & Context */}
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
        <span className="text-xs uppercase tracking-[0.35em] font-mono text-white/60">
          АВТОРСКАЯ СТУДИЯ ВИЗУАЛЬНЫХ РЕШЕНИЙ
        </span>
      </div>

      {/* Main Integrated Typography */}
      <div className="my-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-white/50">
            ВИТАЛИЙ ТКАЧЁВ
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight font-display text-white leading-[0.95] max-w-5xl">
            ВИЗУАЛЬНЫЕ РЕШЕНИЯ, КОТОРЫЕ СТАНОВЯТСЯ РЕАЛЬНОСТЬЮ.
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-white/70 font-light max-w-3xl font-body pt-2 border-l-2 border-white/20 pl-4 md:pl-6">
            Дизайн · Брендинг · Упаковка · Полиграфия · Визуальные решения
          </p>
        </motion.div>
      </div>

      {/* Hero Bottom Anchor / Scroll Prompt */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 max-w-md">
          Единое интерактивное пространство · 01 ИДЕЯ → 02 ФОРМА → 03 РЕАЛЬНОСТЬ
        </p>

        <a
          href="#states"
          className="group flex items-center gap-3 text-xs uppercase font-mono tracking-[0.25em] text-white/80 hover:text-white transition-colors"
        >
          <span>ПРОКРУТИТЕ ДЛЯ ИССЛЕДОВАНИЯ</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
            ↓
          </div>
        </a>
      </div>
    </section>
  );
};
