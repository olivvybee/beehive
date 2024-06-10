import classNames from 'classnames';

import styles from './ButtonGrid.module.css';

interface Button {
  id: string;
  src: string;
  alt: string;
  href?: string;
  title?: string;
}

const BUTTONS: Button[] = [
  {
    id: 'beehive.gay',
    src: '/button.png',
    alt: 'A bee and the text "beehive.gay" with a rainbow underline.',
    title: 'beehive.gay',
  },
  {
    id: 'theresnotime',
    src: 'https://theresnotime.co.uk/button.png',
    alt: 'A fox and the text "TheresNoTime" on a subtle non-binary flag background.',
    href: 'https://theresnotime.co.uk',
    title: 'TheresNoTime (Sammy)',
  },
  {
    id: 'honeycomb.engineer',
    src: '/buttons/honeycomb-engineer.png',
    alt: 'A rainbow beehive and the text "honeycomb.engineer".',
    href: 'https://honeycomb.engineer',
    title: 'honeycomb.engineer',
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
      title={button.title}
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
