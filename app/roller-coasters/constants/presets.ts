import { Preset } from '../types';

export const PRESETS: Preset[] = [
  {
    id: 'uk',
    name: 'UK',
    sw: { lat: 49.92782402008578, lng: -14.40899663542794 },
    ne: { lat: 58.75781064891754, lng: 5.886197218258957 },
  },
  {
    id: 'florida',
    name: 'Florida',
    sw: { lng: -82.760159681085, lat: 27.762160654932586 },
    ne: { lng: -81.10449292905965, lat: 28.855377147362304 },
  },
];
