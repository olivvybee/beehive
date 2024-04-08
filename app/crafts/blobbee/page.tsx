import { buildMetadata } from '@/utils/metadata';

import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'Blobbee',
  description: 'An emoji pack of cute little bees',
  images: ['/img/blobbee/blobbee.png'],
});

const BlobbeePage = () => (
  <>
    <h2>Blobbee</h2>

    <p>
      Blobbee is an emoji pack starring bees, based on{' '}
      <a href="https://volpeon.ink/projects/emojis/neofox">Neocat</a> and{' '}
      <a href="https://volpeon.ink/projects/emojis/neofox/">Neofox</a> by
      Volpeon.
    </p>

    <img
      src="/img/blobbee/preview.png"
      alt="A grid of bee emojis making various expressions. They have cute yellow faces."
      className={styles.preview}
    />

    <p>
      The actual emojis are published{' '}
      <a href="https://github.com/olivvybee/blobbee/releases/latest">
        on github
      </a>{' '}
      so that I can make distinct releases with changelogs. It also allows me to
      automate exporting the various files and metadata necessary to make
      importing them on fedi much easier.
    </p>

    <p>
      Blobbee is licensed under{' '}
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        CC BY-NC-SA 4.0
      </a>
      . Feel free to use them on fedi, discord, or anywhere else.
    </p>

    <p>
      I create blobbees in{' '}
      <a href="https://affinity.serif.com/en-gb/designer/">Affinity Designer</a>{' '}
      and export them to SVG for github. Then I have a github action which
      creates PNG versions and puts them in .zip and .tar.gz archives for
      release.
    </p>

    <h3>Old blobbees</h3>

    <p>
      I've preserved the old ("v1") blobbees for archival purposes. I don't
      recommend using them in practice because the expressions are hard to read
      when the images are emoji-sized.
    </p>

    <img
      src="/img/blobbee/v1.png"
      alt="A grid of bee emojis similar to the ones above, but with grey faces and more black outlines."
      className={styles.preview}
    />

    <p>
      <a href="/assets/blobbee-v1.zip" download={true}>
        Download Blobbee v1 (.zip)
      </a>
    </p>
  </>
);

export default BlobbeePage;
