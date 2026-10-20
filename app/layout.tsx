import { LayoutProps } from '@/.next/types/app/layout';

import './globals.css';
import styles from './layout.module.css';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { metadataTemplate } from '@/utils/metadata';

export const metadata = metadataTemplate;

const RootLayout = ({ children }: LayoutProps) => (
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

export default RootLayout;
