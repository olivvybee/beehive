import fs from 'fs';
import { FeatureCollection } from 'geojson';

import { Route } from './Route';

const ROUTES_DIR = './app/trains/routes';

export const loadRoutes = (): Route[] => {
  const routeFiles = fs
    .readdirSync(ROUTES_DIR)
    .filter((filename) => filename.endsWith('.geojson'));

  const routes = routeFiles.map((filename) => {
    const id = filename
      .toLowerCase()
      .replace('.geojson', '')
      .replaceAll(' ', '-');

    const path = `${ROUTES_DIR}/${filename}`;
    const contents = fs.readFileSync(path, 'utf-8');
    const data = JSON.parse(contents) as FeatureCollection;

    const colour =
      data.features[0].properties?.colour ||
      data.features[0].properties?.color ||
      'white';

    return { id, colour, data };
  });

  return routes;
};
