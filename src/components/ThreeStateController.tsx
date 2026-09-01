'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThreeStateControllerProps {
  progress: number; // Scroll progress from 0.0 to 1.0 of the sticky stage
  activeStateIndex: number;
}

const STATES = [
  {
    id: '01',
    title: 'ИДЕЯ',
    meaning: 'Мысль · Замысел · Стратегия',
    text: 'Понять, что должно измениться, зачем это нужно и какое впечатление должен создавать результат. В самом начале есть только задача, намерение и чистое пространство.',
    accentColor: 'text-slate-100',
    glowColor: 'bg-white/10',
  },
  {
    id: '02',
    title: 'ФОРМА',
    meaning: 'Язык · Структура · Материал',
    text: 'Превратить смысл в визуальный и инженерный язык: композицию, типографику, конструкцию, объем и материалы упаковки в строгой графической системе.',
    accentColor: 'text-blue-400',
    glowColor: 'bg-blue-500/20',
  },
  {
    id: '03',
    title: 'РЕАЛЬНОСТЬ',
    meaning: 'Продукт · Тираж · Воплощение',
    text: 'Довести решение до физического осязаемого результата — от высококлассной полиграфии и упаковки до готовой коммуникационной среды.',
    accentColor: 'text-red-500',
    glowColor: 'bg-red-500/20',
  },
];

export const ThreeStateController: React.FC<ThreeStateControllerProps> = ({
  progress,
  activeStateIndex,
}) => {
  const currentState = STATES[activeStateIndex];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col justify-between min-h-[80vh] pointer-events-none">
      {/* Top Header & Indicator */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6 pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-white/60">
            КОНЦЕПЦИЯ ТРЁХ СОСТОЯНИЙ / 0{activeStateIndex + 1}
          </span>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="flex items-center gap-2 w-full sm:w-64">
          <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white"
              style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
            />
          </div>
          <span className="text-[10px] font-mono text-white/40 tracking-wider">
            {Math.round(progress * 100)}%
          </span>
        </div>
      </div>

      {/* Main Narrative Display Area */}
      <div className="my-auto py-12 relative pointer-events-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentState.id}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          >
            {/* Giant Number Identifier */}
            <div className="lg:col-span-5 relative">
              <div
                className={`text-[120px] sm:text-[160px] md:text-[220px] font-black leading-none tracking-tighter select-none font-display text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-white/40 to-white/0`}
              >
                {currentState.id}
              </div>
              <div
                className={`absolute -bottom-2 left-2 px-3 py-1 text-xs md:text-sm tracking-[0.25em] font-mono uppercase bg-white/5 backdrop-blur-md rounded-full border border-white/10 ${currentState.accentColor}`}
              >
                {currentState.meaning}
              </div>
            </div>

            {/* Title and Detailed Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-end space-y-6">
              <h2
                className={`text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight font-display ${currentState.accentColor}`}
              >
                {currentState.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl font-body">
                {currentState.text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Timeline State Switcher */}
      <div className="grid grid-cols-3 gap-3 md:gap-6 pt-6 border-t border-white/10 pointer-events-auto">
        {STATES.map((st, idx) => {
          const isActive = idx === activeStateIndex;
          const isPassed = idx < activeStateIndex;

          return (
            <div
              key={st.id}
              className={`p-3 md:p-4 rounded-xl border transition-all duration-500 ${
                isActive
                  ? 'bg-white/10 border-white/30 backdrop-blur-md shadow-2xl scale-[1.02]'
                  : isPassed
                  ? 'bg-white/5 border-white/10 opacity-70'
                  : 'bg-black/20 border-white/5 opacity-40'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-white/50">
                  PHASE // 0{idx + 1}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </div>
              <div className="text-xs md:text-base font-bold tracking-wider font-display text-white uppercase">
                {st.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
