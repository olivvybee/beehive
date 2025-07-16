'use client';

import { useContext } from 'react';
import Map, { Marker } from 'react-map-gl/maplibre';
import { Popup } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import { Park } from './types';
import { rollerCoastersMapContext } from './RollerCoastersMapContext';
import { CrossMarker, TickMarker } from './MarkerPin';
import { getBounds } from './utils/getBounds';
import { formatDate } from './utils/formatDate';

import styles from './RollerCoastersMap.module.css';
import { ParkChooser } from './ParkChooser/ParkChooser';

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
    <div className={styles.wrapper}>
      <Map
        id="rollerCoasterMap"
        style={{ width: '100%', height: 600, borderRadius: 6 }}
        mapStyle={`https://api.protomaps.com/styles/v2/dark.json?key=${protomapsKey}`}
        attributionControl={false}
        initialViewState={{
          bounds: initialBounds,
          fitBoundsOptions: {
            padding: 128,
          },
        }}>
        {parks.flatMap((park) =>
          park.coasters
            .filter((coaster) => coaster.latitude && coaster.longitude)
            .map((coaster) => {
              const popup = new Popup();

              if (typeof window !== 'undefined') {
                popup.setOffset({
                  'top-left': [0, -3],
                  top: [0, -3],
                  'top-right': [0, -3],
                  right: [-20, -20],
                  'bottom-right': [0, -40],
                  bottom: [0, -40],
                  'bottom-left': [0, -40],
                  left: [20, -20],
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
                ${
                  coaster.opened
                    ? `<tr><td>Opened</td> <td>${formatDate(
                        coaster.opened
                      )}</td></tr>`
                    : ''
                }
              </table>
              <a href="https://rcdb.com/${
                coaster.id
              }.htm" target="_blank">View on RCDB</a>
            </div>`);
              }

              return (
                <Marker
                  key={coaster.id}
                  latitude={coaster.latitude}
                  longitude={coaster.longitude}
                  anchor="bottom"
                  popup={popup}>
                  {coaster.ridden ? <TickMarker /> : <CrossMarker />}
                </Marker>
              );
            })
        )}
      </Map>

      <ParkChooser parks={parks} />
    </div>
  );
};
