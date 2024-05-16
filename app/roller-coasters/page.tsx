import { Suspense } from 'react';

import { buildMetadata } from '@/utils/metadata';

import { loadCoasters } from './utils/loadCoasters';
import { RollerCoastersMap } from './RollerCoastersMap';
import { ParkChooser } from './ParkChooser/ParkChooser';
import { RollerCoastersMapContextProvider } from './RollerCoastersMapContext';
import { PresetChooser } from './PresetChooser/PresetChooser';

import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'Roller coaster map',
  description: "A map of all the roller coasters I've ridden.",
});

const RollerCoasters = () => {
  const parks = loadCoasters();

  return (
    <RollerCoastersMapContextProvider>
      <h2>Roller coaster map</h2>

      <RollerCoastersMap parks={parks} />

      <div className={styles.parksAndPresets}>
        <ParkChooser parks={parks} />
        <PresetChooser />
      </div>
    </RollerCoastersMapContextProvider>
  );
};

const RollerCoastersPage = () => (
  <Suspense>
    <RollerCoasters />
  </Suspense>
);

export default RollerCoastersPage;
