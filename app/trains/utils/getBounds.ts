import { LineString } from 'geojson';
import { LngLatBounds } from 'maplibre-gl';

import { Route } from '../Route';

export const getBounds = (routes: Route[]): LngLatBounds => {
  const lines = routes.flatMap((route) =>
    route.data.features
      .filter((feature) => feature.geometry.type === 'LineString')
      .map((feature) => feature.geometry as LineString)
  );

  const latitudes = lines.flatMap((line) =>
    line.coordinates.map((coordinate) => coordinate[1])
  );
  const longitudes = lines.flatMap((line) =>
    line.coordinates.map((coordinate) => coordinate[0])
  );

  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);

  const minLong = Math.min(...longitudes);
  const maxLong = Math.max(...longitudes);

  return new LngLatBounds([
    { lon: minLong, lat: minLat },
    { lon: maxLong, lat: maxLat },
  ]);
};
