import { Suspense } from 'react';

import { buildMetadata } from '@/utils/metadata';
import { Tabs } from '@/components/Tabs/Tabs';

import { RollerCoastersMap } from './RollerCoastersMap';
import { RollerCoastersMapContextProvider } from './RollerCoastersMapContext';
import { getParks } from './api';
import { CoasterList } from './CoasterList';
import { CoasterWithPark } from './types';
import { CompletionStats } from './CompletionStats';
import { RefreshCacheButton } from './RefreshCacheButton';

import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'Coaster credits',
  description: "Data about all the roller coasters I've ridden.",
});

const RollerCoasters = async () => {
  const parks = await getParks();
  const coasters: CoasterWithPark[] = parks.flatMap((park) =>
    park.coasters.map((coaster) => ({ ...coaster, park }))
  );

  const totalCredits = coasters.filter((coaster) => coaster.ridden).length;

  return (
    <>
      <h2>Coaster credits</h2>

      <p>
        This is data about all the roller coasters I have ridden. I only include
        coasters at theme parks I have visited, to reduce the clutter and noise
        from the thousands of coasters around the world.
      </p>

      <div className={styles.wrapper}>
        <span className={styles.totalCredits}>
          Total credits: {totalCredits}
        </span>

        <Tabs
          tabs={[
            {
              id: 'list',
              name: 'List',
              content: <CoasterList coasters={coasters} />,
            },
            {
              id: 'completion',
              name: 'Completion',
              content: <CompletionStats parks={parks} />,
            },
            {
              id: 'map',
              name: 'Map',
              content: (
                <RollerCoastersMapContextProvider>
                  <RollerCoastersMap parks={parks} />
                </RollerCoastersMapContextProvider>
              ),
            },
          ]}
        />

        <RefreshCacheButton />
      </div>
    </>
  );
};

const RollerCoastersPage = () => (
  <Suspense>
    <RollerCoasters />
  </Suspense>
);

export default RollerCoastersPage;
