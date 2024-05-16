'use client';

import { useEffect } from 'react';
import Map, { Marker, useMap, Source, Layer } from 'react-map-gl/maplibre';
import { Popup } from 'maplibre-gl';

import { ParkCoasters } from './types';
import { getBounds } from './utils/getBounds';

import 'maplibre-gl/dist/maplibre-gl.css';

import styles from './RollerCoastersMap.module.css';

interface RollerCoastersMapProps {
  parks: ParkCoasters[];
}

export const RollerCoastersMap = ({ parks }: RollerCoastersMapProps) => {
  const { rollerCoasterMap } = useMap();

  const bounds = getBounds(parks);

  useEffect(() => {
    if (rollerCoasterMap) {
      rollerCoasterMap.fitBounds(bounds, { padding: 64 });
    }
  }, [bounds]);

  const protomapsKey = process.env.NEXT_PUBLIC_PROTOMAPS_API_KEY;
  if (!protomapsKey) {
    return <div>Error: No Protomaps API key present in environment</div>;
  }

  return (
    <Map
      id="rollerCoasterMap"
      style={{ width: '100%', height: 600, marginTop: 32, marginBottom: 32 }}
      mapStyle={`https://api.protomaps.com/styles/v2/black.json?key=${protomapsKey}`}
      attributionControl={false}
      initialViewState={{
        bounds,
        fitBoundsOptions: {
          padding: 128,
        },
      }}>
      {parks.flatMap((park) =>
        park.coasters.map((coaster) => {
          const popup = new Popup();

          if (typeof window !== 'undefined') {
            popup.setMaxWidth('50%');
            popup.setHTML(`
            <div class="${styles.popup}">
              <span class="${styles.coasterName}">${coaster.name}</span>
              <table class="${styles.coasterDetails}">
                <tr><td>Ridden</td> <td>${
                  coaster.ridden ? 'Yes' : 'No'
                }</td></tr>
                <tr><td>Status</td> <td>${coaster.status}</td></tr>
                <tr><td>Opening date</td> <td>${coaster.openDate}</td></tr>
                ${
                  coaster.closeDate
                    ? `<tr><td>Closing date</td> <td>${coaster.closeDate}</td></tr>`
                    : ''
                }
              </table>
              <a href="${coaster.link}" target="_blank">View on RCDB</a>
            </div>`);
          }

          return (
            <Marker
              key={`${park.park.name}-${coaster.name}`}
              latitude={coaster.location.lat}
              longitude={coaster.location.lng}
              color={coaster.ridden ? '#6bb58b' : '#e7504b'}
              popup={popup}
            />
          );
        })
      )}
    </Map>
  );
};

/*
 park.coasters.map((coaster) => {
          const popup = new Popup();
          popup.setText('beans');

          return (
            <Marker
              key={`${park.park.name}-${coaster.name}`}
              latitude={coaster.location.lat}
              longitude={coaster.location.lng}
              color={coaster.ridden ? 'green' : 'red'}
              popup={popup}
            />
          );
        })
        */
