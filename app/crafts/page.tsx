import { Metadata } from 'next';

import { baseOpenGraph } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'Crafts',
  openGraph: {
    ...baseOpenGraph,
    title: 'Crafts',
  },
};

const CraftsPage = () => (
  <>
    <h2>Crafts</h2>
    <p>
      Eventually this page will describe some of the crafting-related things I
      get up to.
    </p>
  </>
);

export default CraftsPage;