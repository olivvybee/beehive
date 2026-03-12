import { Link } from '@/components/Link';

import { BackToTopLink } from '../BackToTopLink';
import styles from './Footer.module.css';
import { ButtonGrid } from '../ButtonGrid';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerLinks}>
        <BackToTopLink />

        <Link href="/atom.xml">RSS</Link>

        <a href="https://github.com/olivvybee/beehive">Source code</a>
      </div>

      <ButtonGrid />
    </div>
  </footer>
);
