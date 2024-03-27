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
      <a rel="me" href="https://honeycomb.engineer/@olivvybee">
        let me know
      </a>{' '}
      any more I can add (no guarantees).
    </p>

    <p>
      <a href="/assets/blobbee.zip" download={true}>
        Download Blobbee only (.zip)
      </a>{' '}
      (License:{' '}
      <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
      )
    </p>

    <h3>Blobbee and Friends</h3>

    <p>
      There's also a smaller pack called Blobbee and Friends which uses{' '}
      <a href="https://volpeon.ink/projects/emojis/neofox/">Neofox</a>,{' '}
      <a href="https://volpeon.ink/projects/emojis/neocat/">Neocat</a>, and{' '}
      <a href="https://volpeon.ink/projects/emojis/bunhd/">BunHD</a> by Volpeon,
      and is therefore licensed differently to reflect the licenses of those
      emojis.
    </p>

    <img
      src="/img/blobbee/preview_friends.png"
      alt="A grid of bee emojis hugging various other emoji animals, including a fox, a cat, and a bunny."
      className={styles.preview}
    />

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

    <h3>Changelog</h3>

    <ul>
      <li>
        2024-02-06
        <ul>
          <li>
            Added <code>blobbee_mouse_hug</code> to the Friends pack.
          </li>
        </ul>
      </li>
      <li>
        2023-12-05
        <ul>
          <li>
            Added <code>blobbee_laugh</code>, <code>blobbee_santa</code>,{' '}
            <code>blobbee_scream</code>, and <code>blobee_sweat_smile</code>
          </li>
          <li>
            Adjusted the faces of <code>blobbee_pleased</code>,{' '}
            <code>blobbee_sad</code>,<code>blobbee_woozy</code>, and{' '}
            <code>blobbee_smug</code> to be more readable at small sizes
          </li>
        </ul>
      </li>

      <li>
        2023-10-17
        <ul>
          <li>Separated into two downloads with separate licenses</li>
          <li>
            Added <code>blobbee_party</code>
          </li>
        </ul>
      </li>
    </ul>
  </article>
);

export default BlobbeePage;
