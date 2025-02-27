import classNames from 'classnames';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps {
  percentage: number;
  color?: string;
  'aria-hidden'?: boolean;
  className?: string;
}

export const ProgressBar = ({
  percentage,
  color = 'var(--green)',
  ['aria-hidden']: ariaHidden,
  className,
}: ProgressBarProps) => (
  <div
    className={classNames(styles.progressBar, className)}
    aria-hidden={ariaHidden}>
    <div
      className={styles.fill}
      style={{ width: `${percentage}%`, backgroundColor: color }}
    />
  </div>
);
