import { buildMetadata } from '@/utils/metadata';
import { loadCoasters } from './utils/loadCoasters';
import { Suspense } from 'react';
import { RollerCoastersMap } from './RollerCoastersMap';

export const metadata = buildMetadata({
  title: 'Roller coaster map',
  description: "A map of all the roller coasters I've ridden.",
});

const RollerCoasters = () => {
  const parks = loadCoasters();

  return (
    <>
      <h2>Roller coaster map</h2>

      <RollerCoastersMap parks={parks} />
    </>
  );
};

const RollerCoastersPage = () => (
  <Suspense>
    <RollerCoasters />
  </Suspense>
);

export default RollerCoastersPage;
