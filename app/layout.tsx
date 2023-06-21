import './globals.css';
import styles from './layout.module.css';

import { Header } from '@/components/Header';

export const metadata = {
  title: 'The Gay Beehive',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main id="main-content" className={styles.mainContent}>
          {children}
        </main>
      </body>
    </html>
  );
}
