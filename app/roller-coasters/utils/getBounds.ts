import { LngLatBounds } from 'maplibre-gl';

import { ParkCoasters } from '../types';

export const getBounds = (parks: ParkCoasters[]): LngLatBounds => {
  const coasters = parks.flatMap((park) => park.coasters);

  const latitudes = coasters.map((coaster) => coaster.location.lat);
  const longitudes = coasters.map((coaster) => coaster.location.lng);

  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);

  const minLong = Math.min(...longitudes);
  const maxLong = Math.max(...longitudes);

  return new LngLatBounds([
    { lon: minLong, lat: minLat },
    { lon: maxLong, lat: maxLat },
  ]);
};
