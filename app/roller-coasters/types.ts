import { LngLatLike } from 'maplibre-gl';

export interface Coaster {
  name: string;
  ridden: boolean;
  opened: string;
  closed?: string;
  latitude: number;
  longitude: number;
  rcdb: string;
}

export interface Park {
  id: string;
  name: string;
  country: string;
  coasters: Coaster[];
}

export interface Preset {
  id: string;
  name: string;
  sw: LngLatLike;
  ne: LngLatLike;
}
