'use client';

import Map, { Marker } from 'react-map-gl/maplibre';
import { Popup } from 'maplibre-gl';

import { Coaster, ParkCoasters } from './types';
import { getBounds } from './utils/getBounds';

import 'maplibre-gl/dist/maplibre-gl.css';

import styles from './RollerCoastersMap.module.css';
import { useContext } from 'react';
import { rollerCoastersMapContext } from './RollerCoastersMapContext';

const getMarkerColour = (coaster: Coaster) => {
  if (!coaster.ridden) {
    return 'var(--red)';
  }
  if (coaster.closeDate) {
    return 'var(--purple)';
  }

  return 'var(--green)';
};

interface RollerCoastersMapProps {
  parks: ParkCoasters[];
}

export const RollerCoastersMap = ({ parks }: RollerCoastersMapProps) => {
  const { selectedPark } = useContext(rollerCoastersMapContext);

  const selectedParkData = parks.find(
    (park) => park.park.id === selectedPark?.id
  );
  const parksForBounds = selectedParkData ? [selectedParkData] : parks;
  const initialBounds = getBounds(parksForBounds);

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
        bounds: initialBounds,
        fitBoundsOptions: {
          padding: 128,
        },
      }}>
      {parks.flatMap((park) =>
        park.coasters.map((coaster) => {
          const previousNames = coaster.previousNames.join(', ');
          const opened = coaster.openDate.slice(0, 4);
          const closed = coaster.closeDate?.slice(0, 4);

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
                <tr><td>Opened</td> <td>${opened}</td></tr>
                ${
                  coaster.closeDate
                    ? `<tr><td>Closed</td> <td>${closed}</td></tr>`
                    : ''
                }
                ${
                  coaster.previousNames.length
                    ? `<tr><td>AKA</td> <td>${previousNames}</td></tr>`
                    : ''
                }
              </table>
              <a href="${coaster.link}" target="_blank">View on RCDB</a>
            </div>`);
          }

          const markerColour = getMarkerColour(coaster);

          return (
            <Marker
              key={`${park.park.name}-${coaster.name}`}
              latitude={coaster.location.lat}
              longitude={coaster.location.lng}
              color={markerColour}
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
