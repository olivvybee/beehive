import { LngLatBounds } from 'maplibre-gl';

import { Park } from '../types';

export const getBounds = (parks: Park[]): LngLatBounds => {
  const coasters = parks
    .flatMap((park) => park.coasters)
    .filter((coaster) => !!coaster.latitude && !!coaster.longitude);

  const latitudes = coasters.map((coaster) => coaster.latitude);
  const longitudes = coasters.map((coaster) => coaster.longitude);

  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);

  const minLong = Math.min(...longitudes);
  const maxLong = Math.max(...longitudes);

  return new LngLatBounds([
    { lon: minLong, lat: minLat },
    { lon: maxLong, lat: maxLat },
  ]);
};
