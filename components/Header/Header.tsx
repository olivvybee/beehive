import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContents}>
      <Link href="/">
        <h1 className={styles.branding}>
          <Image src="/logo.svg" height={48} width={48} alt="" />
          Liv's Beehive
        </h1>
      </Link>

      <div className={styles.links}>
        <Link href="/blog">Blog</Link>
        <Link href="/code">Code</Link>
        <Link href="/crafts">Crafts</Link>
        <Link href="/links">Links</Link>
      </div>
    </div>
  </header>
);
