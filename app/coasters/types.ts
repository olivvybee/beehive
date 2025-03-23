import { LngLatLike } from 'maplibre-gl';

export interface Coaster {
  id: number;
  name: string;
  ridden: boolean;
  riddenDate?: string;
  opened: string;
  latitude: number;
  longitude: number;
  rcdb: string;
}

export type CoasterWithPark = Coaster & {
  park: Park;
};

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
