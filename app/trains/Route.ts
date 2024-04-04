import type { FeatureCollection } from 'geojson';

export interface Route {
  id: string;
  colour?: string;
  data: FeatureCollection;
}
