import classNames from 'classnames';

import styles from './ButtonGrid.module.css';

interface Button {
  src: string;
  alt: string;
  title: string;
  href?: string;
  vertical?: boolean;
}

const BUTTONS: Button[] = [
  {
    src: '/button.png',
    alt: 'A bee and the text "beehive.gay" with a rainbow underline.',
    title: 'beehive.gay',
  },
  {
    src: 'https://theresnotime.co.uk/button.png',
    alt: 'A fox and the text "TheresNoTime" on a subtle non-binary flag background.',
    href: 'https://theresnotime.co.uk',
    title: 'TheresNoTime (Sammy)',
  },
  {
    src: '/buttons/honeycomb-engineer.png',
    alt: 'A rainbow beehive and the text "honeycomb.engineer".',
    href: 'https://honeycomb.engineer',
    title: 'honeycomb.engineer',
  },
  {
    src: 'https://k4m1.net/button.gif',
    alt: 'K4M1 meows @ you',
    href: 'https://k4m1.net/',
    title: 'K4M1',
  },
  {
    src: 'https://taavi.wtf/img/buttons/me/taavi.png',
    alt: 'Taavi',
    href: 'https://taavi.wtf/',
    title: 'Taavi',
  },
  {
    src: 'https://flufftech.net/button.png',
    alt: 'The word "Rail" and a fox on a non-binary flag background.',
    href: 'https://flufftech.net/',
    title: 'Rail',
  },
  {
    src: 'https://david.garden/wp-content/uploads/2024/09/david-site-button.png',
    alt: '"david.garden" in the middle in pink, a plant on the left, and a dog emoji with pink hair on the right',
    href: 'https://david.garden/',
    title: 'david wolfpaw',
  },
  {
    src: 'https://enikofox.com/enikodoesbadthingstocode.png',
    alt: '"Eniko does bad things to code" and a girl with blurple hair.',
    href: 'https://enikofox.com',
    title: 'Eniko Fox',
  },
  {
    src: '/buttons/lf.png',
    alt: 'QR code registration marks with LF in the middle. Below is the text "enter the next line" and a hand drawn laptop with a winking face made from a greater than sign and an underscore.',
    href: 'https://lf-net.org',
    title: 'Littlefox',
    vertical: true,
  },
  {
    src: 'https://symtrkl.gay/img/88x31/symtrkl-dot-gay.png',
    alt: '"SymTrkl dot Gay" written on top of a light pink to light blue to light pink gradient.',
    href: 'https://symtrkl.gay',
    title: 'SymTrkl',
  },
];

interface ButtonGridProps {
  id?: string;
}

export const ButtonGrid = ({ id }: ButtonGridProps) => (
  <div id={id} className={styles.buttonGrid}>
    <div className={styles.horizontalButtons}>
      {BUTTONS.filter((button) => !button.vertical).map((button) => (
        <ButtonGridItem key={button.title} button={button} />
      ))}
    </div>
    <div className={styles.verticalButtons}>
      {BUTTONS.filter((button) => button.vertical).map((button) => (
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
