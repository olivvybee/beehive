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
  {
    id: 'k4m1',
    src: 'https://k4m1.net/button.gif',
    alt: 'K4M1 meows @ you',
    href: 'https://k4m1.net/',
    title: 'K4M1',
  },
  {
    id: 'taavi',
    src: 'https://taavi.wtf/img/buttons/me/taavi.png',
    alt: 'Taavi',
    href: 'https://taavi.wtf/',
    title: 'Taavi',
  },
  {
    id: 'rail',
    src: 'https://flufftech.net/button.png',
    alt: 'The word "Rail" and a fox on a non-binary flag background.',
    href: 'https://flufftech.net/',
    title: 'Rail',
  },
  {
    id: 'david.garden',
    src: 'https://david.garden/wp-content/uploads/2024/09/david-site-button.png',
    alt: '"david.garden" in the middle in pink, a plant on the left, and a dog emoji with pink hair on the right',
    href: 'https://david.garden/',
    title: 'david wolfpaw',
  },
  {
    id: 'eniko',
    src: 'https://enikofox.com/enikodoesbadthingstocode.png',
    alt: '"Eniko does bad things to code" and a girl with blurple hair.',
    href: 'https://enikofox.com',
    title: 'Eniko Fox',
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
