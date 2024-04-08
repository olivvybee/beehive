import './globals.css';
import styles from './layout.module.css';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { metadataTemplate } from '@/utils/metadata';

export const metadata = metadataTemplate;

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
