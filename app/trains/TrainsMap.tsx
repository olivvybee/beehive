'use client';

import { useContext, useEffect } from 'react';
import Map, { useMap, Source, Layer } from 'react-map-gl/maplibre';

import { Route } from './Route';
import { getBounds } from './utils/getBounds';
import { trainsMapContext } from './TrainsMapContext';

import 'maplibre-gl/dist/maplibre-gl.css';

interface TrainsMapProps {
  routes: Route[];
  useOperatorColours?: boolean;
}

const DEFAULT_COLOUR = 'rgb(255, 255, 255)';

export const TrainsMap = ({
  routes,
  useOperatorColours = true,
}: TrainsMapProps) => {
  const { selectedOperator } = useContext(trainsMapContext);
  const { trainMap } = useMap();

  const visibleRoutes = selectedOperator
    ? routes.filter((route) => route.operator.id === selectedOperator.id)
    : routes;

  const bounds = getBounds(visibleRoutes);

  useEffect(() => {
    if (trainMap) {
      trainMap.fitBounds(bounds, { padding: 64 });
    }
  }, [bounds]);

  return (
    <Map
      id="trainMap"
      style={{ width: '100%', height: 600, marginTop: 32, marginBottom: 32 }}
      mapStyle={`https://api.protomaps.com/styles/v2/black.json?key=${process.env.NEXT_PUBLIC_PROTOMAPS_API_KEY}`}
      attributionControl={false}
      initialViewState={{
        bounds,
        fitBoundsOptions: {
          padding: 64,
        },
      }}>
      {visibleRoutes.map((route) => (
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
