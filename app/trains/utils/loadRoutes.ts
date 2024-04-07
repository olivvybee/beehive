import fs from 'fs';
import { FeatureCollection } from 'geojson';

import { Route } from '../Route';
import { OPERATORS, OTHER_OPERATOR } from '../constants/operators';

const ROUTES_DIR = './app/trains/routes';

export const loadRoutes = (): Route[] => {
  const operatorDirs = fs
    .readdirSync(ROUTES_DIR)
    .filter((name) => fs.lstatSync(`${ROUTES_DIR}/${name}`).isDirectory());

  const routes = operatorDirs.flatMap((operatorId) => {
    const operator =
      OPERATORS.find((operator) => operator.id === operatorId) ||
      OTHER_OPERATOR;

    const routeFiles = fs
      .readdirSync(`${ROUTES_DIR}/${operatorId}`)
      .filter((filename) => filename.endsWith('.geojson'));

    const operatorRoutes = routeFiles.map((filename) => {
      const id = filename
        .toLowerCase()
        .replace('.geojson', '')
        .replaceAll(' ', '-');

      const path = `${ROUTES_DIR}/${operatorId}/${filename}`;
      const contents = fs.readFileSync(path, 'utf-8');
      const data = JSON.parse(contents) as FeatureCollection;

      return { id, operator, data };
    });

    return operatorRoutes;
  });

  return routes;
};
