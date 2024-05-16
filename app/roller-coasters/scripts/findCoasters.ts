import path from 'path';
import fs from 'fs';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { Coaster } from '../types';

interface SearchResponseCoasterImage {
  id: number;
  name: string;
  url: string;
  copyName: string;
  copyDate: string;
}

interface SearchResponseCoaster {
  id: number;
  name: string;
  park: {
    name: string;
    id: number;
  };
  city: string;
  state: string;
  country: string;
  region: string;
  link: string;
  status: {
    state: string;
    date: {
      opened: string;
      closed?: string;
    };
  };
  make: string;
  model: string;
  type: string;
  design: string;
  stats: {
    length: string;
    height: string;
    speed: string;
    inversions: string;
    duration: string;
    elements: string;
    arrangement: string;
    capacity: string;
    designer: string;
    formerNames?: string;
  };
  mainPicture: SearchResponseCoasterImage;
  pictures: SearchResponseCoasterImage[];
  coords: {
    lat: string;
    lng: string;
  };
}

interface SearchResponse {
  coasters: SearchResponseCoaster[];
  totalMatch: number;
}

const RCDB_SEARCH_ENDPOINT = 'https://rcdb-api.vercel.app/api/coasters/search';

const fetchCoasters = async (themePark: string) => {
  const normalisedParkName = themePark.toLowerCase().trim();

  const urlParams = new URLSearchParams({ q: themePark }).toString();
  const url = `${RCDB_SEARCH_ENDPOINT}?${urlParams}`;
  const response = await fetch(url);
  const data: SearchResponse = await response.json();
  return data.coasters.filter(
    (coaster) => coaster.park.name.toLowerCase().trim() === normalisedParkName
  );
};

const run = async (themePark: string) => {
  const result = await fetchCoasters(themePark);

  const coasters: Coaster[] = result.map((coaster) => {
    const status = coaster.status.state.replace('Operated', 'Closed');
    const previousNames = coaster.stats.formerNames
      ?.split(',')
      .map((name) => (name.endsWith(' (') ? name.slice(0, -2) : name));

    return {
      name: coaster.name,
      ridden: true,
      previousNames: previousNames || [],
      status,
      openDate: coaster.status.date.opened,
      closeDate: coaster.status.date.closed || undefined,
      location: {
        lat: parseFloat(coaster.coords.lat),
        lng: parseFloat(coaster.coords.lng),
      },
      link: `https://rcdb.com${coaster.link}`,
    };
  });

  console.log(result, coasters);

  const filename = themePark.toLowerCase().replaceAll(' ', '-');
  const outputPath = path.resolve(
    '.',
    'app',
    'roller-coasters',
    'scripts',
    `${filename}.json`
  );
  const output = JSON.stringify(coasters, null, 2);
  fs.writeFileSync(outputPath, output);
};

const argv = yargs(hideBin(process.argv)).parseSync();
const themeParks = argv._[0] as string;
run(themeParks);
