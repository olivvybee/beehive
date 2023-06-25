import { Metadata } from 'next';

import './globals.css';
import styles from './layout.module.css';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    template: "%s - Liv's Beehive",
    default: "Liv's Beehive",
  },
  authors: [{ name: 'Liv Asch', url: 'https://beehive.gay' }],
  openGraph: {
    type: 'website',
    title: { template: "%s - Liv's Beehive", default: "Liv's Beehive" },
    siteName: "Liv's Beehive",
    locale: 'en-GB',
    url: 'https://beehive.gay',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Header />

        <main id="main-content" className={styles.mainContent}>
          {children}
        </main>

        <div className={styles.contentSpacer} />

        <Footer />
      </body>
    </html>
  );
}
