import { Metadata } from 'next';

import { baseOpenGraph } from '@/constants/metadata';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blobbee',
  description: 'An emoji pack of cute little bees',
  openGraph: {
    ...baseOpenGraph,
    title: 'Blobbee',
    description: 'An emoji pack of cute little bees',
    images: ['/img/blobbee/preview.png'],
  },
};

const BlobbeePage = () => (
  <article>
    <h2>Blobbee</h2>

    <p>
      Blobbee is an emoji pack based on{' '}
      <a href="https://volpeon.ink/projects/emojis/neofox/">
        Neofox by Volpeon
      </a>
      .
    </p>

    <img className={styles.preview} src="/img/blobbee/preview.png" />

    <p>
      Feel free to use them on mastodon, discord, or anywhere else, and{' '}
      <a rel="me" href="https://tech.lgbt/@olivvybee">
        let me know
      </a>{' '}
      any more I can add (no guarantees).
    </p>

    <p>
      <a href="/assets/blobbee.zip" download={true}>
        Download (.zip)
      </a>
    </p>

    <div className={styles.meta}>
      <span className={styles.metaName}>Last updated</span>
      <span>2023-07-07</span>

      <span className={styles.metaName}>License</span>
      <span>
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY-NC-SA 4.0
        </a>
      </span>
    </div>
  </article>
);

export default BlobbeePage;
