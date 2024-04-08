import { Link } from '@/components/Link';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
  title: 'Code',
  description:
    'Code projects made by a bee who happens to be a software engineer.',
});

const CodePage = () => (
  <>
    <h2>Code</h2>
    <p>
      These are some code projects I work on or have worked on in my spare time.
    </p>
    <p>
      My <Link href="/trains">interactive train map</Link> shows all the train
      lines I have travelled on.
    </p>
    <hr />
    <p>More coming soon...</p>
  </>
);

export default CodePage;
