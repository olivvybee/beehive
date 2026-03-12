'use client';

import { useContext, useEffect, useState } from 'react';
import Map, {
  useMap,
  Source,
  Layer,
  ViewStateChangeEvent,
} from 'react-map-gl/maplibre';
import { LayerSpecification, SourceSpecification } from 'maplibre-gl';

import { Route } from './Route';
import { getBounds } from './utils/getBounds';
import { trainsMapContext } from './TrainsMapContext';
import mapStyle from './mapStyle.json';

import 'maplibre-gl/dist/maplibre-gl.css';

interface TrainsMapProps {
  routes: Route[];
  useOperatorColours?: boolean;
}

const DEFAULT_COLOUR = '#8b73ed';

export const TrainsMap = ({ routes }: TrainsMapProps) => {
  const { selectedOperator, showOperators } = useContext(trainsMapContext);
  const { trainMap } = useMap();

  const visibleRoutes = selectedOperator
    ? routes.filter((route) => route.operator.id === selectedOperator.id)
    : routes;

  const initialBounds = getBounds(routes);

  const [markerSize, setMarkerSize] = useState<number>(8);

  const onZoom = (e: ViewStateChangeEvent) => {
    if (e.viewState.zoom >= 8.25) {
      setMarkerSize(16);
    } else {
      setMarkerSize(8);
    }
  };

  useEffect(() => {
    const bounds = getBounds(visibleRoutes);
    trainMap?.fitBounds(bounds, { padding: 64 });
  }, [visibleRoutes]);

  const protomapsKey = process.env.NEXT_PUBLIC_PROTOMAPS_API_KEY;
  if (!protomapsKey) {
    return <div>Error: No Protomaps API key present in environment</div>;
  }

  const tilesUrl = `https://api.protomaps.com/tiles/v4/{z}/{x}/{y}.mvt?key=${protomapsKey}`

  return (
    <Map
      id="trainMap"
      style={{ width: '100%', height: 600, marginTop: 32, marginBottom: 32 }}
      mapStyle={{
        ...mapStyle,
        version: 8,
        sources: {
          protomaps: {
            ...mapStyle.sources.protomaps,
            tiles: [tilesUrl]
          } as SourceSpecification
        },
        layers: mapStyle.layers as LayerSpecification[]
      }}
      attributionControl={false}
      onZoom={onZoom}
      initialViewState={{
        bounds: initialBounds,
        fitBoundsOptions: {
          padding: 64,
        },
      }}>
      {visibleRoutes.map((route) => (
        <Source key={route.id} id={route.id} type="geojson" data={route.data}>
          <Layer
            type="line"
            paint={{
              'line-color': showOperators
                ? route.operator.colour
                : DEFAULT_COLOUR,
              'line-width': 3,
              'line-opacity': 0.8,
            }}
          />
        </Source>
      ))}
    </Map>
  );
};
