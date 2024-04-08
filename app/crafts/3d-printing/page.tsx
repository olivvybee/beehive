import { Link } from '@/components/Link';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
  title: '3D printing',
  description: 'Things made of plastic by a bee.',
});

const _3DPrintingPage = () => (
  <>
    <h2>3D printing</h2>
    <p>
      I've never really had a big interest in 3D printing ornaments that sit on
      a shelf collecting dust; I use my 3D printer as a functional tool to make
      useful things.
    </p>
    <p>
      The majority of my 3D printing these days is making box inserts for board
      games, so that the components are nicely organised in the box and it's
      easy to set up the game. I design a lot of them myself, and I post the
      STLs for free under{' '}
      <Link href="http://creativecommons.org/licenses/by-sa/4.0/">
        CC-BY-SA
      </Link>{' '}
      on{' '}
      <Link href="https://www.printables.com/@olivvybee/models">
        Printables
      </Link>
      .
    </p>
    <p>
      I've also designed and printed a few different earrings, which I used to
      sell on Etsy. I'm not currently using my Etsy store, but I am considering
      putting the earrings on my{' '}
      <Link href="https://ko-fi.com/olivvybee">ko-fi store</Link> instead.
    </p>
  </>
);

export default _3DPrintingPage;
