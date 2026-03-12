import { buildMetadata } from '@/utils/metadata';

import { TrainsMap } from './TrainsMap';
import { loadRoutes } from './utils/loadRoutes';
import { Key } from './Key/Key';
import { TrainsMapContextProvider } from './TrainsMapContext';
import { PresetChooser } from './PresetChooser/PresetChooser';

import styles from './page.module.css';
import { Suspense } from 'react';

export const metadata = buildMetadata({
  title: 'Train map',
  description: "A map of all the train routes I've taken.",
});

const Trains = () => {
  const routes = loadRoutes();

  return (
    <TrainsMapContextProvider>
      <h2>Train map</h2>

      <p>
        This is a hopefully fairly up to date map of all the train routes I have
        taken (and can remember).
      </p>

      <TrainsMap routes={routes} />

      <div className={styles.keyAndPresets}>
        <PresetChooser routes={routes} />
        <Key />
      </div>
    </TrainsMapContextProvider>
  );
};

const TrainsPage = () => (
  <Suspense>
    <Trains />
  </Suspense>
);

export default TrainsPage;
