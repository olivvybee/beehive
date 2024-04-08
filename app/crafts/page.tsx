import { buildMetadata } from '@/utils/metadata';
import { Link } from '@/components/Link';

export const metadata = buildMetadata({
  title: 'Crafts',
  description: 'Crafty things a bee gets up to.',
});

const CraftsPage = () => (
  <>
    <h2>Crafts</h2>
    <p>
      These are my creative outlets and things I like to get up to that don't
      involve code.
    </p>
    <p>
      My main creative outlets are{' '}
      <Link href="/crafts/cross-stitch">cross stitch</Link> and{' '}
      <Link href="/crafts/3d-printing">3D printing</Link>. I've tried a few
      times to learn to crochet, but my fingers are stubborn and refuse to do
      what they need to do.
    </p>
  </>
);

export default CraftsPage;
