import { Link } from '@/components/Link';
import Image from 'next/image';

import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContents}>
      <Link href="/">
        <h1 className={styles.branding}>
          <Image
            className={styles.logo}
            src="/logo.png"
            height={48}
            width={48}
            alt=""
          />
          Liv's Beehive
        </h1>
      </Link>

      <nav className={styles.links}>
        <ul className={styles.linkList}>
          <li className={styles.link}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={styles.link}>
            <Link href="/code">Code</Link>
          </li>
          <li className={styles.link}>
            <Link href="/crafts">Crafts</Link>
          </li>
          <li className={styles.link}>
            <Link href="/links">Links</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
