import { Metadata } from 'next';

import { baseOpenGraph } from '@/constants/metadata';

import { TrainsMap } from './TrainsMap';
import { loadRoutes } from './loadRoutes';
import { OperatorsKey } from './OperatorKey';
import { TrainsMapContextProvider } from './TrainsMapContext';

const _metadata = {
  title: 'Train map',
  description: "A map of all the train routes I've taken.",
};

export const metadata: Metadata = {
  ..._metadata,
  openGraph: {
    ...baseOpenGraph,
    ..._metadata,
  },
};

const TrainsPage = () => {
  const routes = loadRoutes();

  return (
    <TrainsMapContextProvider>
      <h2>Train map</h2>

      <TrainsMap routes={routes} />

      <OperatorsKey />

      <p>
        This is a hopefully fairly up to date map of all the train routes I have
        taken (and can remember).
      </p>
      <p>
        It doesn't include the London Underground because I have no hope of
        knowing which parts of the network I have used and where the tracks are
        on a map.
      </p>
    </TrainsMapContextProvider>
  );
};

export default TrainsPage;
