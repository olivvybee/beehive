import { Suspense } from 'react';

import { buildMetadata } from '@/utils/metadata';

import { RollerCoastersMap } from './RollerCoastersMap';
import { ParkChooser } from './ParkChooser/ParkChooser';
import { RollerCoastersMapContextProvider } from './RollerCoastersMapContext';
import { Key } from './Key/Key';

import styles from './page.module.css';
import { headers } from 'next/headers';

export const metadata = buildMetadata({
  title: 'Roller coaster map',
  description: "A map of all the roller coasters I've ridden.",
});

const RollerCoasters = async () => {
  const response = await fetch(
    `${process.env.ROLLER_COASTER_TRACKER_API}/parks`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );
  const parks = await response.json();

  console.log(JSON.stringify(parks, null, 2));

  return (
    <RollerCoastersMapContextProvider>
      <h2>Roller coaster map</h2>

      <p>
        This is a map of all the roller coasters I have ridden on. I only
        include coasters at theme parks I have visited, otherwise I would need
        to cover the map in red markers.
      </p>

      <RollerCoastersMap parks={parks} />

      <div className={styles.keyAndParks}>
        <Key />
        <ParkChooser parks={parks} />
      </div>

      <h3 id="implementation">How I implemented this</h3>

      <p>
        For each coaster, I find its data on <a href="https://rcdb.com">RCDB</a>{' '}
        and save its data in a JSON file for the theme park it resides in.
        There's code to read all the files from those directories and parse the
        JSON.
      </p>
      <p>
        The map itself is rendered using a React wrapper around{' '}
        <a href="https://maplibre.org/maplibre-gl-js/docs/">
          <code>maplibre-gl</code>
        </a>
        . Each of the JSON files is turned into a layer on the map, with a
        coloured marker for each coaster.
      </p>
      <p>
        When you select a group or park, the minimum and maximum longitudes and
        latitudes are calculated for the coasters in that view and the map is
        recentred using those coordinates, so that they are nicely framed in the
        viewport.
      </p>
      <p>
        The code is available{' '}
        <a href="https://github.com/olivvybee/beehive/tree/main/app/roller-coasters">
          on github
        </a>{' '}
        if you're interested in the fine details.
      </p>
    </RollerCoastersMapContextProvider>
  );
};

const RollerCoastersPage = () => (
  <Suspense>
    <RollerCoasters />
  </Suspense>
);

export default RollerCoastersPage;
