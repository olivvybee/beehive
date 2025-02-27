import { Suspense } from 'react';

import { buildMetadata } from '@/utils/metadata';

import { RollerCoastersMap } from './RollerCoastersMap';
import { ParkChooser } from './ParkChooser/ParkChooser';
import { RollerCoastersMapContextProvider } from './RollerCoastersMapContext';
import { Key } from './Key/Key';
import { getParks } from './api';

import styles from './page.module.css';
import { Tabs } from '@/components/Tabs/Tabs';
import { CoasterList } from './CoasterList';
import { CoasterWithPark } from './types';

export const metadata = buildMetadata({
  title: 'Roller coaster map',
  description: "A map of all the roller coasters I've ridden.",
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

        <aside>
          <h3 id="implementation">How I implemented this</h3>

          <p>
            For each coaster, I find its data on{' '}
            <a href="https://rcdb.com">RCDB</a> and save it in a{' '}
            <a href="https://developers.cloudflare.com/d1/">
              Cloudflare D1 database
            </a>{' '}
            along with data about the theme park it resides in. The page then
            loads all the coasters from the database to display in the list or
            on the map.
          </p>
          <p>
            The map itself is rendered using a React wrapper around{' '}
            <a href="https://maplibre.org/maplibre-gl-js/docs/">
              <code>maplibre-gl</code>
            </a>
            . Each coaster from the database is turned into a marker on the map
            with a popup containing the data.
          </p>
          <p>
            When you select a group or park, the minimum and maximum longitudes
            and latitudes are calculated for the coasters in that view and the
            map is recentred using those coordinates, so that they are nicely
            framed in the viewport.
          </p>
          <p>
            The code is available{' '}
            <a href="https://github.com/olivvybee/beehive/tree/main/app/coasters">
              on github
            </a>{' '}
            if you're interested in the fine details.
          </p>
        </aside>
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
