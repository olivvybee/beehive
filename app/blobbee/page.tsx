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
    images: ['/img/blobbee/meta.png'],
  },
};

const BlobbeePage = () => (
  <article>
    <h2>Blobbee</h2>

    <p>
      Blobbee is an emoji pack loosely based on{' '}
      <a href="https://volpeon.ink/projects/emojis/neofox/">
        Neofox by Volpeon
      </a>
      .
    </p>

    <img
      src="/img/blobbee/preview.png"
      alt="A grid of bee emojis making the same expressions as blobcat, in the heavy outline style of neofox."
      className={styles.preview}
    />

    <p>
      Feel free to use them on fedi, discord, or anywhere else, and{' '}
      <a rel="me" href="https://fedi.beehive.gay/@olivvybee">
        let me know
      </a>{' '}
      any more I can add (no guarantees).
    </p>

    <p>
      <a href="/assets/blobbee_and_friends.zip" download={true}>
        Download Blobbee + Friends (.zip)
      </a>{' '}
      (License:{' '}
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        CC BY-NC-SA 4.0
      </a>
      )
    </p>

    <p>
      <a href="/assets/blobbee.zip" download={true}>
        Download Blobbee only (.zip)
      </a>{' '}
      (License:{' '}
      <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
      )
    </p>
  </article>
);

export default BlobbeePage;
