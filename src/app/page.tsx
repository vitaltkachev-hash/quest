'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CreativeScrollStage } from '@/components/CreativeScrollStage';
import { DynamicFlagBackground } from '@/components/DynamicFlagBackground';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Philosophy } from '@/components/Philosophy';
import { CommunicationIcons } from '@/components/CommunicationIcons';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/config/site';

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        founder: {
          '@type': 'Person',
          name: SITE_CONFIG.author,
        },
        description: SITE_CONFIG.description,
      },
      {
        '@type': 'Person',
        '@id': `${SITE_CONFIG.url}/#person`,
        name: SITE_CONFIG.author,
        jobTitle: 'Основатель, арт-директор',
        worksFor: {
          '@id': `${SITE_CONFIG.url}/#organization`,
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_CONFIG.url}/#service`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        provider: {
          '@id': `${SITE_CONFIG.url}/#organization`,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Услуги и направления',
          itemListElement: SITE_CONFIG.services.map((svc, i) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: svc,
            },
            position: i + 1,
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        publisher: {
          '@id': `${SITE_CONFIG.url}/#organization`,
        },
        inLanguage: 'ru-RU',
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_CONFIG.url}/#webpage`,
        url: SITE_CONFIG.url,
        name: `${SITE_CONFIG.name} — ${SITE_CONFIG.headline}`,
        isPartOf: {
          '@id': `${SITE_CONFIG.url}/#website`,
        },
        about: {
          '@id': `${SITE_CONFIG.url}/#organization`,
        },
        inLanguage: 'ru-RU',
      },
    ],
  };

  return (
    <main className="relative min-h-screen bg-[#0D0D0D] text-white overflow-hidden">
      {/* Structured JSON-LD Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Interactive Dynamic Flag Canvas Background */}
      <DynamicFlagBackground progress={scrollProgress} />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Sticky 3-State Narrative Experience (IDEA -> FORM -> REALITY) */}
      <CreativeScrollStage onProgressUpdate={setScrollProgress} />

      {/* Additional Creative Sections */}
      <Services />
      <About />
      <Philosophy />
      <CommunicationIcons />

      {/* Footer */}
      <Footer />
    </main>
  );
}
