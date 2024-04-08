import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
  title: 'Cross stitch',
  description: 'Painting by numbers with string, by a bee.',
});

const CrossStitchPage = () => (
  <>
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
  </>
);

export default CrossStitchPage;
