import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
  title: 'Crafts',
  description: 'Crafty things a bee gets up to.',
});

const CraftsPage = () => (
  <>
    <h2>Crafts</h2>
    <p>
      My main creative outlets are <a href="#cross-stitch">cross stitch</a> and{' '}
      <a href="#3d-printing">3D printing</a>. I've tried a few times to learn to
      crochet, but my fingers are stubborn and refuse to do what they need to
      do.
    </p>

    <h3 id="cross-stitch">Cross stitch</h3>
    <p>
      I like cross stitch because it doesn't take a lot of brain power. It's
      essentially painting-by-numbers, but with string. I do a lot of it while
      watching TV or listening to podcasts.
    </p>
    <p>
      Most of the time I stitch other people's designs, but I have designed a
      few of my own when I couldn't find something specific.
    </p>
    <p>
      My finished pieces are almost all framed and hung on the wall leading up
      the stairs in my house.
    </p>

    <p>
      <img
        alt="A set of twelve framed cross stitches hung on the wall above some stairs. All the images have different themes, and they're hung randomly on the wall rather than being aligned with one another."
        src="/img/cross-stitch/stairs-1.jpeg"
      />
    </p>
    <p>
      <img
        alt="Another ten cross stitches hung further up the same wall."
        src="/img/cross-stitch/stairs-2.jpeg"
      />
    </p>

    <h3 id="3d-printing">3D printing</h3>
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
      <a href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA</a> on{' '}
      <a href="https://www.printables.com/@olivvybee/models">Printables</a>.
    </p>
    <p>
      I've also designed and printed a few different earrings, which I used to
      sell on Etsy. I'm not currently using my Etsy store, but I am considering
      putting the earrings on my{' '}
      <a href="https://ko-fi.com/olivvybee">ko-fi store</a> instead.
    </p>
  </>
);

export default CraftsPage;
