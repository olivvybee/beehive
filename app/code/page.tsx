import { Metadata } from 'next';

import { baseOpenGraph } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'Code',
  openGraph: {
    ...baseOpenGraph,
    title: 'Code',
  },
};

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
