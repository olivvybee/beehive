import path from 'path';
import fs from 'fs';
import { Station } from '../Station';

export const loadStations = (): Station[] => {
  const stationsFile = path.resolve('.', 'app', 'trains', 'stations.json');
  const contents = fs.readFileSync(stationsFile, 'utf-8');
  return JSON.parse(contents);
};
