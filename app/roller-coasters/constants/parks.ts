import { Park } from '../types';

interface GroupedParks {
  name: string;
  parks: Park[];
}

export const GROUPED_PARKS: GroupedParks[] = [
  {
    name: 'UK',
    parks: [
      { id: 'thorpe-park', name: 'Thorpe Park' },
      { id: 'chessington', name: 'Chessington World of Adventures' },
      { id: 'alton-towers', name: 'Alton Towers' },
      { id: 'legoland-windsor', name: 'Legoland Windsor' },
    ],
  },
  {
    name: 'France',
    parks: [
      { id: 'disneyland-paris', name: 'Disneyland Park' },
      { id: 'walt-disney-studios-park', name: 'Walt Disney Studios Park' },
    ],
  },
  {
    name: 'Spain',
    parks: [
      { id: 'portaventura', name: 'PortAventura' },
      { id: 'ferrari-land', name: 'Ferrari Land' },
    ],
  },
  {
    name: 'Florida',
    parks: [
      { id: 'magic-kingdom', name: 'Magic Kingdom' },
      { id: 'animal-kingdom', name: 'Animal Kingdom' },
      { id: 'hollywood-studios', name: 'Hollywood Studios' },
      { id: 'epcot', name: 'EPCOT' },
      { id: 'seaworld-orlando', name: 'SeaWorld Orlando' },
      { id: 'universal-florida', name: 'Universal Studios Florida' },
      { id: 'islands-of-adventure', name: 'Islands of Adventure' },
      { id: 'busch-gardens-tampa', name: 'Busch Gardens Tampa' },
    ],
  },
];

export const ALL_PARKS = GROUPED_PARKS.flatMap((group) => group.parks);

export const UNKNOWN_PARK: Park = { id: 'xxx', name: 'Unknown' };
