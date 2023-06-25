import { Metadata } from 'next';

import './globals.css';
import styles from './layout.module.css';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { baseOpenGraph } from '@/constants/metadata';

export const metadata: Metadata = {
  metadataBase: new URL('https://beehive.gay'),
  title: {
    template: "%s - Liv's Beehive",
    default: "Liv's Beehive",
  },
  description: 'The personal website of Liv (olivvybee).',
  authors: [{ name: 'Liv Asch', url: 'https://beehive.gay' }],
  openGraph: {
    ...baseOpenGraph,
    title: { template: "%s - Liv's Beehive", default: "Liv's Beehive" },
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

        <Footer />
      </body>
    </html>
  );
}
