import { Metadata } from 'next';
import Link from 'next/link';
import {
  IoLogoGithub,
  IoLogoMastodon,
  IoNewspaper,
  IoLogoTwitch,
} from 'react-icons/io5';
import { FaEtsy } from 'react-icons/fa6';
import { SiKofi } from 'react-icons/si';

import { baseOpenGraph } from '@/constants/metadata';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Links',
  openGraph: {
    ...baseOpenGraph,
    title: 'Links',
  },
};

const links = [
  {
    name: 'Blog',
    url: '/blog',
    icon: IoNewspaper,
  },
  {
    name: 'Fediverse',
    url: 'https://fedi.beehive.gay/@olivvybee',
    icon: IoLogoMastodon,
  },
  {
    name: 'Github',
    url: 'https://github.com/olivvybee',
    icon: IoLogoGithub,
  },
  {
    name: 'Etsy store',
    url: 'https://olivvycraft.etsy.com',
    icon: FaEtsy,
  },
  {
    name: 'Twitch',
    url: 'https://twitch.tv/olivvybee',
    icon: IoLogoTwitch,
  },
  {
    name: 'Buy me a coffee',
    url: 'https://ko-fi/olivvybee',
    icon: SiKofi,
  },
];

const LinksPage = () => (
  <>
    <h2>Links</h2>
    <p>These are a few of the places you can find me online.</p>

    <ul className={styles.linkList}>
      {links.map((link) => {
        const content = (
          <>
            <link.icon className={styles.icon} /> {link.name}
          </>
        );

        const linkElement = link.url.startsWith('/') ? (
          <Link href={link.url} className={styles.link}>
            {content}
          </Link>
        ) : (
          <a href={link.url} className={styles.link}>
            {content}
          </a>
        );

        return (
          <li className={styles.linkItem} key={link.url}>
            {linkElement}
          </li>
        );
      })}
    </ul>
  </>
);

export default LinksPage;
