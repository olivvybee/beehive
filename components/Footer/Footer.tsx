import Link from 'next/link';

import { BackToTopLink } from '../BackToTopLink';
import styles from './Footer.module.css';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span>© 2013-{year} Liv Asch</span>

        <Link href="/atom.xml" prefetch={false}>
          RSS
        </Link>

        <BackToTopLink />
      </div>
    </footer>
  );
};
