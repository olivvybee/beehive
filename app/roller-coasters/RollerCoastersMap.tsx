'use client';

import Map, { Marker } from 'react-map-gl/maplibre';
import { Point, Popup } from 'maplibre-gl';

import { Coaster, Park } from './types';
import { getBounds } from './utils/getBounds';

import 'maplibre-gl/dist/maplibre-gl.css';

import styles from './RollerCoastersMap.module.css';
import { useContext } from 'react';
import { rollerCoastersMapContext } from './RollerCoastersMapContext';
import { MarkerPin } from './MarkerPin';
import { formatDate } from './utils/formatDate';

const getMarkerColour = (coaster: Coaster) => {
  if (!coaster.ridden) {
    return 'var(--red)';
  }
  if (coaster.closed) {
    return 'var(--purple)';
  }

  return 'var(--green)';
};

interface RollerCoastersMapProps {
  parks: Park[];
}

export const RollerCoastersMap = ({ parks }: RollerCoastersMapProps) => {
  const { selectedParkId } = useContext(rollerCoastersMapContext);

  const selectedParkData = parks.find((park) => park.id === selectedParkId);
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
          const popup = new Popup();

          if (typeof window !== 'undefined') {
            popup.setOffset({
              'top-left': [0, -5],
              top: [0, -5],
              'top-right': [0, -5],
              right: [-10, -25],
              'bottom-right': [0, -35],
              bottom: [0, -35],
              'bottom-left': [0, -35],
              left: [10, -25],
              center: [0, 0],
            });
            popup.setMaxWidth('50%');
            popup.setHTML(`
            <div class="${styles.popup}">
              <span class="${styles.coasterName}">${coaster.name}</span>
              <table class="${styles.coasterDetails}">
                <tr><td>Ridden</td> <td>${
                  coaster.ridden ? 'Yes' : 'No'
                }</td></tr>
                ${
                  coaster.riddenDate
                    ? `<tr><td>Date ridden</td> <td>${formatDate(
                        coaster.riddenDate
                      )}</td></tr>`
                    : ''
                }
                <tr><td>Opened</td> <td>${formatDate(coaster.opened)}</td></tr>
                ${
                  coaster.closed
                    ? `<tr><td>Closed</td> <td>${formatDate(
                        coaster.closed
                      )}</td></tr>`
                    : ''
                }
              </table>
              <a href="${coaster.rcdb}" target="_blank">View on RCDB</a>
            </div>`);
          }

          const markerColour = getMarkerColour(coaster);

          return (
            <Marker
              key={`${park.name}-${coaster.name}`}
              latitude={coaster.latitude}
              longitude={coaster.longitude}
              anchor="bottom"
              popup={popup}>
              <MarkerPin colour={markerColour} />
            </Marker>
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
