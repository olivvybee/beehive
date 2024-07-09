import styles from './Abbr.module.css';

interface AbbrProps {
  children: React.ReactNode;
  title: string;
}

export const Abbr = ({ children, title }: AbbrProps) => (
  <abbr className={styles.abbr} tabIndex={0}>
    {children}
    <span className={styles.abbrPopup}>{title}</span>
  </abbr>
);
