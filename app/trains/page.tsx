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

      <h3 id="implementation">How I implemented this</h3>

      <p>
        For each route, I use{' '}
        <a href="https://brouter.de/brouter-web/#map=17/standard&profile=rail">
          BRouter
        </a>{' '}
        to draw the route and export it as a GeoJSON file. Those files are then
        grouped by operator in the filesystem, and there's code to read all the
        files from those directories and parse the JSON.
      </p>
      <p>
        The map itself is rendered using a React wrapper around{' '}
        <a href="https://maplibre.org/maplibre-gl-js/docs/">
          <code>maplibre-gl</code>
        </a>
        . Each of the parsed GeoJSON files is turned into a layer on the map,
        colour coded by operator (the colours are defined separately, not in the
        JSON).
      </p>
      <p>
        When you select an operator, all the other layers are removed from the
        map. Then the minimum and maximum longitudes and latitudes are
        calculated for the remaining routes and the map is recentred using those
        coordinates, so that the routes are nicely framed in the viewport.
      </p>
      <p>
        The code is available{' '}
        <a href="https://github.com/olivvybee/beehive/tree/main/app/trains">
          on github
        </a>{' '}
        if you're interested in the fine details.
      </p>
    </TrainsMapContextProvider>
  );
};

export default TrainsPage;
