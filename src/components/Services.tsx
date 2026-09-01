'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/config/site';

export const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative w-full py-32 px-4 md:px-8 max-w-7xl mx-auto z-10 border-t border-white/10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
        <div>
          <span className="text-xs uppercase tracking-[0.35em] font-mono text-white/50 block mb-2">
            ПРАКТИКА И СПЕЦИАЛИЗАЦИЯ
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-display tracking-tight text-white">
            НАПРАВЛЕНИЯ
          </h2>
        </div>
        <p className="text-sm md:text-base text-white/60 font-body max-w-md font-light leading-relaxed">
          Каждое направление проектируется как единая пространственная система — от концептуальной мысли до осязаемых материалов и конструкций.
        </p>
      </div>

      {/* Dynamic Integrated Services List */}
      <div className="flex flex-col divide-y divide-white/10">
        {SITE_CONFIG.services.map((service, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={service}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group py-8 md:py-12 cursor-pointer transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-500 pointer-events-none ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />

              <div className="flex items-center justify-between gap-4 relative z-10">
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="text-xs md:text-sm font-mono text-white/40 tracking-widest">
                    0{index + 1}
                  </span>
                  <h3
                    className={`text-2xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-tight transition-all duration-300 ${
                      isHovered
                        ? 'text-white translate-x-4 scale-[1.02]'
                        : 'text-white/70'
                    }`}
                  >
                    {service}
                  </h3>
                </div>

                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center font-mono text-sm transition-all duration-300 ${
                    isHovered
                      ? 'border-white bg-white text-black rotate-45'
                      : 'border-white/20 text-white/40'
                  }`}
                >
                  ↗
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
