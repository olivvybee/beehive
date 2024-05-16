import { Park } from '../types';

export const PARKS: Park[] = [
  { id: 'thorpe-park', name: 'Thorpe Park' },
  { id: 'chessington', name: 'Chessington World of Adventures' },
  { id: 'alton-towers', name: 'Alton Towers' },
  { id: 'magic-kingdom', name: 'Magic Kingdom' },
  { id: 'animal-kingdom', name: 'Animal Kingdom' },
  { id: 'hollywood-studios', name: 'Hollywood Studios' },
  { id: 'epcot', name: 'EPCOT' },
  { id: 'seaworld-orlando', name: 'SeaWorld Orlando' },
  { id: 'universal-florida', name: 'Universal Studios Florida' },
  { id: 'islands-of-adventure', name: 'Islands of Adventure' },
  { id: 'busch-gardens-tampa', name: 'Busch Gardens Tampa' },
];

export const UNKNOWN_PARK: Park = { id: 'xxx', name: 'Unknown' };
