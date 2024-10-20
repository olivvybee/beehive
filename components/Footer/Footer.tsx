import { Link } from '@/components/Link';

import { BackToTopLink } from '../BackToTopLink';
import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <BackToTopLink />

      <Link href="/atom.xml">RSS</Link>

      <a href="https://github.com/olivvybee/beehive">Source code</a>
    </div>
  </footer>
);
