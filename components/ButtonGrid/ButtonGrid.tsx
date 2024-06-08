import classNames from 'classnames';

import styles from './ButtonGrid.module.css';

interface Button {
  id: string;
  src: string;
  alt: string;
  href?: string;
}

const BUTTONS: Button[] = [
  {
    id: 'beehive.gay',
    src: '/button.png',
    alt: 'A pixel art bee and the text "beehive.gay" with a rainbow underline.',
  },
  {
    id: 'theresnotime',
    src: 'https://theresnotime.co.uk/button.png',
    alt: 'A pixel art fox and the text "TheresNoTime" on a subtle non-binary flag background.',
    href: 'https://theresnotime.co.uk',
  },
];

export const ButtonGrid = () => (
  <div className={styles.buttonGrid}>
    {BUTTONS.map((button) => (
      <ButtonGridItem key={button.id} button={button} />
    ))}
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
      className={classNames(styles.item, styles.button)}
    />
  );

  return button.href ? (
    <a href={button.href} className={classNames(styles.item, styles.link)}>
      {image}
    </a>
  ) : (
    image
  );
};
