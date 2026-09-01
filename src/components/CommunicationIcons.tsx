'use client';

import React from 'react';
import { Send, Phone, Sparkles, Mail } from 'lucide-react';
import { CONTACT_CONFIG } from '@/config/contacts';

export const CommunicationIcons: React.FC = () => {
  const renderIcon = (id: string) => {
    switch (id) {
      case 'telegram':
        return <Send className="w-6 h-6 md:w-8 md:h-8" />;
      case 'phone':
        return <Phone className="w-6 h-6 md:w-8 md:h-8" />;
      case 'max':
        return <Sparkles className="w-6 h-6 md:w-8 md:h-8" />;
      case 'email':
        return <Mail className="w-6 h-6 md:w-8 md:h-8" />;
      default:
        return <Mail className="w-6 h-6 md:w-8 md:h-8" />;
    }
  };

  return (
    <section id="contacts" className="relative w-full py-32 px-4 md:px-8 max-w-7xl mx-auto z-10 border-t border-white/10">
      <div className="flex flex-col items-center text-center space-y-12">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] font-mono text-white/50 block">
            СВЯЗЬ И КОММУНИКАЦИЯ
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-display tracking-tight text-white">
            НАЧАТЬ ДИАЛОГ
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-body max-w-xl font-light">
            Выберите удобный канал связи. Только четыре прямых способа коммуникации — никаких форм, регистраций и посредников.
          </p>
        </div>

        {/* 4 Interactive Communication Icons Only (No visible phone text / email text / forms as strictly mandated) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 w-full max-w-3xl pt-6">
          {CONTACT_CONFIG.channels.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={channel.ariaLabel}
              className="group relative flex flex-col items-center justify-center p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-white/50 hover:bg-white/15 backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {renderIcon(channel.id)}
              </div>
              <span className="mt-4 text-xs font-mono tracking-widest text-white/50 group-hover:text-white uppercase transition-colors">
                {channel.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
