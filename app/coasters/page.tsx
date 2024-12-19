import { Suspense } from 'react';

import { buildMetadata } from '@/utils/metadata';

import { RollerCoastersMap } from './RollerCoastersMap';
import { ParkChooser } from './ParkChooser/ParkChooser';
import { RollerCoastersMapContextProvider } from './RollerCoastersMapContext';
import { Key } from './Key/Key';
import { getParks } from './api';

import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'Roller coaster map',
  description: "A map of all the roller coasters I've ridden.",
});

const RollerCoasters = async () => {
  const parks = await getParks();

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
        and save it in a{' '}
        <a href="https://developers.cloudflare.com/d1/">
          Cloudflare D1 database
        </a>{' '}
        along with data about the theme park it resides in. The page then loads
        all the coasters from the database to display on the map.
      </p>
      <p>
        The map itself is rendered using a React wrapper around{' '}
        <a href="https://maplibre.org/maplibre-gl-js/docs/">
          <code>maplibre-gl</code>
        </a>
        . Each coaster from the database is turned into a marker on the map with
        a popup containing the data.
      </p>
      <p>
        When you select a group or park, the minimum and maximum longitudes and
        latitudes are calculated for the coasters in that view and the map is
        recentred using those coordinates, so that they are nicely framed in the
        viewport.
      </p>
      <p>
        The code is available{' '}
        <a href="https://github.com/olivvybee/beehive/tree/main/app/coasters">
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
