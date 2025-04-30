import { Link } from '@/components/Link';
import {
  IoLogoGithub,
  IoLogoMastodon,
  IoNewspaper,
  IoLogoTwitch,
  IoStorefront,
  IoLogoYoutube,
} from 'react-icons/io5';

import { buildMetadata } from '@/utils/metadata';

import styles from './page.module.css';
import { FEDI_URL } from '@/constants';
import { ButtonGrid } from '@/components/ButtonGrid';

export const metadata = buildMetadata({
  title: 'Links',
  description: 'Places to find olivvybee around the internet.',
});

const links = [
  {
    name: 'Blog',
    url: '/blog',
    icon: IoNewspaper,
  },
  {
    name: 'Fediverse',
    url: FEDI_URL,
    icon: IoLogoMastodon,
  },
  {
    name: 'Github',
    url: 'https://github.com/olivvybee',
    icon: IoLogoGithub,
  },
  {
    name: 'Ko-fi store',
    url: 'https://ko-fi.com/olivvybee/shop',
    icon: IoStorefront,
  },
  {
    name: 'Twitch',
    url: 'https://twitch.tv/olivvybee',
    icon: IoLogoTwitch,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@olivvybee',
    icon: IoLogoYoutube,
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

    <hr className={styles.divider} />

    <h2>Cool beings and places</h2>

    <ButtonGrid />
  </>
);

export default LinksPage;
