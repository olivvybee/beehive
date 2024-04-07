import { LngLatLike } from 'maplibre-gl';

export interface Preset {
  id: string;
  name: string;
  sw: LngLatLike;
  ne: LngLatLike;
}

export const PRESETS: Preset[] = [
  {
    id: 'uk',
    name: 'UK',
    sw: { lat: 49.92782402008578, lng: -14.40899663542794 },
    ne: { lat: 58.75781064891754, lng: 5.886197218258957 },
  },
  {
    id: 'greater-london',
    name: 'Greater London',
    sw: { lng: -0.5111719615448465, lat: 51.3011578433555 },
    ne: { lng: 0.2903919755302695, lat: 51.675489907597694 },
  },
];
