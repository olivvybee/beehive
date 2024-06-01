'use client';

import { useContext, useEffect } from 'react';
import Map, { useMap, Source, Layer, Marker } from 'react-map-gl/maplibre';
import { Popup } from 'maplibre-gl';

import { Route } from './Route';
import { getBounds } from './utils/getBounds';
import { trainsMapContext } from './TrainsMapContext';
import { Station, StationStatus } from './Station';

import 'maplibre-gl/dist/maplibre-gl.css';

import styles from './TrainsMap.module.css';

interface TrainsMapProps {
  routes: Route[];
  stations: Station[];
  useOperatorColours?: boolean;
}

const DEFAULT_COLOUR = 'rgb(255, 255, 255)';

const getMarkerColour = (station: Station) => {
  switch (station.status) {
    case StationStatus.NotVisited:
      return 'var(--red)';
    case StationStatus.PassedThrough:
      return 'var(--orange)';
    case StationStatus.Visited:
      return 'var(--green)';
  }
};

const getStatusText = (station: Station) => {
  switch (station.status) {
    case StationStatus.NotVisited:
      return 'Not visited';
    case StationStatus.PassedThrough:
      return 'Stopped';
    case StationStatus.Visited:
      return 'Visited';
  }
};

export const TrainsMap = ({
  routes,
  stations,
  useOperatorColours = true,
}: TrainsMapProps) => {
  const { selectedOperator, stationsFilter } = useContext(trainsMapContext);
  const { trainMap } = useMap();

  const visibleRoutes = selectedOperator
    ? routes.filter((route) => route.operator.id === selectedOperator.id)
    : routes;

  const visibleStations =
    stationsFilter !== undefined
      ? stations.filter((station) => station.status >= stationsFilter)
      : [];

  const bounds = getBounds(visibleRoutes);

  useEffect(() => {
    if (trainMap) {
      trainMap.fitBounds(bounds, { padding: 64 });
    }
  }, [bounds]);

  const protomapsKey = process.env.NEXT_PUBLIC_PROTOMAPS_API_KEY;
  if (!protomapsKey) {
    return <div>Error: No Protomaps API key present in environment</div>;
  }

  return (
    <Map
      id="trainMap"
      style={{ width: '100%', height: 600, marginTop: 32, marginBottom: 32 }}
      mapStyle={`https://api.protomaps.com/styles/v2/black.json?key=${protomapsKey}`}
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

      {visibleStations
        .toSorted((a, b) => a.status - b.status)
        .map((station) => {
          const popup = new Popup();

          if (typeof window !== 'undefined') {
            popup.setOffset([0, -8]);
            popup.setMaxWidth('50%');
            popup.setHTML(`
            <div class="${styles.popup}">
              <span class="${styles.stationName}">${station.name}</span>
              <table class="${styles.stationDetails}">
                <tr><td>Code</td> <td>${station.id}</td></tr>
                <tr><td>Status</td> <td>${getStatusText(station)}</td></tr>
              </table>
            </div>`);
          }

          return (
            <Marker
              key={station.id}
              latitude={station.location.lat}
              longitude={station.location.lng}
              anchor="bottom"
              popup={popup}>
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 16,
                  background: getMarkerColour(station),
                }}
              />
            </Marker>
          );
        })}
    </Map>
  );
};
