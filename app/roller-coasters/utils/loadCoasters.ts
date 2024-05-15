import path from 'path';
import fs from 'fs';

import { Coaster, Park, ParkCoasters } from '../types';
import { PARKS, UNKNOWN_PARK } from '../constants/parks';

const PARKS_DIR = path.resolve('.', 'app', 'roller-coasters', 'coasters');

export const loadCoasters = (): ParkCoasters[] => {
  const parkFiles = fs
    .readdirSync(PARKS_DIR)
    .filter((name) => name.endsWith('.json'));

  const parks = parkFiles.map((filename) => {
    const parkId = filename.replace('.json', '');
    const park = PARKS.find((park) => park.id === parkId) || UNKNOWN_PARK;

    const filePath = path.resolve(PARKS_DIR, filename);
    const contents = fs.readFileSync(filePath, 'utf-8');
    const coasters = JSON.parse(contents) as Coaster[];

    return { park, coasters };
  });

  return parks;
};
