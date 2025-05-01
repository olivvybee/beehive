import classNames from 'classnames';

import buttons from './buttons.json';

import styles from './ButtonGrid.module.css';

interface Button {
  src: string;
  alt: string;
  title: string;
  href?: string;
  vertical?: boolean;
}

interface ButtonGridProps {
  id?: string;
}

export const ButtonGrid = ({ id }: ButtonGridProps) => (
  <div id={id} className={styles.buttonGrid}>
    <div className={styles.horizontalButtons}>
      {buttons
        .filter((button) => !button.vertical)
        .map((button) => (
          <ButtonGridItem key={button.title} button={button} />
        ))}
    </div>
    <div className={styles.verticalButtons}>
      {buttons
        .filter((button) => button.vertical)
        .map((button) => (
          <ButtonGridItem key={button.title} button={button} />
        ))}
    </div>
  </div>
);

interface ButtonGridItemProps {
  button: Button;
}

const ButtonGridItem = ({ button }: ButtonGridItemProps) => {
  const image = (
    <img
      src={button.src}
      alt={button.alt}
      title={button.title}
      className={classNames(styles.item, {
        [styles.vertical]: button.vertical,
      })}
    />
  );

  return button.href ? (
    <a
      href={button.href}
      className={classNames(styles.item, styles.link, {
        [styles.vertical]: button.vertical,
      })}>
      {image}
    </a>
  ) : (
    image
  );
};
