import type { FeatureCollection } from 'geojson';
import { Operator } from './constants/operators';

export interface Route {
  id: string;
  operator: Operator;
  data: FeatureCollection;
}
