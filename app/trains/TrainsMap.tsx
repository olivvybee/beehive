'use client';

import Map, { Source, Layer } from 'react-map-gl/maplibre';

import 'maplibre-gl/dist/maplibre-gl.css';
import { Route } from './Route';
import { getBounds } from './getBounds';

interface TrainsMapProps {
  routes: Route[];
  useOperatorColours?: boolean;
}

const DEFAULT_COLOUR = 'rgb(255, 255, 255)';

export const TrainsMap = ({
  routes,
  useOperatorColours = true,
}: TrainsMapProps) => {
  const bounds = getBounds(routes);

  return (
    <Map
      style={{ width: '100%', height: 600, marginTop: 32, marginBottom: 32 }}
      mapStyle="https://api.protomaps.com/styles/v2/black.json?key=049cfdd8e69e2fe8"
      attributionControl={false}
      initialViewState={{
        bounds,
        fitBoundsOptions: {
          padding: 32,
        },
      }}>
      {routes.map((route) => (
        <Source key={route.id} id={route.id} type="geojson" data={route.data}>
          <Layer
            type="line"
            paint={{
              'line-color': useOperatorColours
                ? route.operator.colour
                : DEFAULT_COLOUR,
              'line-width': 2,
              'line-opacity': 0.8,
            }}
          />
        </Source>
      ))}
    </Map>
  );
};
