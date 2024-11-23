import { LngLatLike } from 'maplibre-gl';

export interface Coaster {
  id: number;
  name: string;
  ridden: boolean;
  riddenDate?: string;
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
