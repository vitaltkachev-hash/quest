import type { Metadata } from 'next';
import { Unbounded, Inter } from 'next/font/google';
import { SITE_CONFIG } from '@/config/site';
import './globals.css';

const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.headline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.headline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0D0D0D] text-white font-body antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
