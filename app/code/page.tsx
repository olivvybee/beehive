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
      Eventually this page will describe some of the code-related things I get
      up to.
    </p>
  </>
);

export default CodePage;
