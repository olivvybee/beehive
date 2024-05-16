import { PropsWithChildren } from 'react';
import styles from './Key.module.css';

export const Key = () => (
  <div className={styles.key}>
    <h3 className={styles.heading}>Key</h3>

    <ul className={styles.list}>
      <KeyItem colour="var(--red)">Not ridden</KeyItem>
      <KeyItem colour="var(--green)">Ridden</KeyItem>
      <KeyItem colour="var(--purple)">Ridden, closed</KeyItem>
    </ul>
  </div>
);

interface KeyItemProps extends PropsWithChildren {
  colour: string;
}

const KeyItem = ({ colour, children }: KeyItemProps) => (
  <li className={styles.item}>
    <div className={styles.swatch} style={{ backgroundColor: colour }} />

    <span className={styles.itemName}>{children}</span>
  </li>
);
