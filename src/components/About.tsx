'use client';

import React from 'react';
import { SITE_CONFIG } from '@/config/site';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-32 px-4 md:px-8 max-w-7xl mx-auto z-10 border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Header Column */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-[0.35em] font-mono text-white/50 block">
            ОБ АВТОРЕ И СТУДИИ
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-white leading-none">
            ВИТАЛИЙ ТКАЧЁВ
          </h2>
          <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 font-mono text-xs text-white/70 uppercase tracking-widest">
            20+ ЛЕТ ОПЫТА В ПРОИЗВОДСТВЕ И ДИЗАЙНЕ
          </div>
        </div>

        {/* Right Integrated Bio & Approach Column */}
        <div className="lg:col-span-7 space-y-8 font-body">
          <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed">
            {SITE_CONFIG.about.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2">
              <div className="text-xs font-mono text-white/50 uppercase tracking-widest">
                ПРИНЦИП // 01
              </div>
              <h3 className="text-lg font-bold font-display uppercase text-white">
                Единство виртуального и физического
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Дизайн создается не ради картинки на мониторе, а с чётким пониманием того, как он оживёт в тираже, упаковке и реальной среде.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2">
              <div className="text-xs font-mono text-white/50 uppercase tracking-widest">
                ПРИНЦИП // 02
              </div>
              <h3 className="text-lg font-bold font-display uppercase text-white">
                Строгая культура деталей
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Выверенные пропорции, швейцарский подход к сетке, идеальный препресс и технологическая точность каждого элемента.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
