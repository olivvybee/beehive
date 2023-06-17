import styles from './Header.module.css';
import Link from 'next/link';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContents}>
      <Link href="/">
        <h1 className={styles.branding}>
          <img src="/logo.svg" height={48} width={48} role="presentation" />
          The Gay Beehive
        </h1>
      </Link>

      <div className={styles.links}>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/links">Links</Link>
      </div>
    </div>
  </header>
);
