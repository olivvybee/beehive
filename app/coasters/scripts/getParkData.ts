import path from 'path';
import fs from 'fs';

import * as cheerio from 'cheerio';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

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

interface NewCoaster {
  id: number;
  name: string;
  ridden: boolean;
  opened: string;
  closed: string | undefined;
  latitude: number;
  longitude: number;
}

const run = async (rcdbUrl: string) => {
  const parkPage = await fetch(rcdbUrl);
  const text = await parkPage.text();
  const $ = cheerio.load(text);

  const parkName = $('#feature h1').text();
  const country = $('#feature > div > a').last().text();

  const parkId = parkName.toLowerCase().replaceAll(' ', '-');

  const coastersData = await fetchCoasters(parkName);

  const coasters: NewCoaster[] = coastersData.map((coaster) => ({
    id: coaster.id,
    name: coaster.name,
    ridden: false,
    opened: coaster.status.date.opened,
    closed: coaster.status.date.closed || undefined,
    latitude: parseFloat(coaster.coords.lat),
    longitude: parseFloat(coaster.coords.lng),
  }));

  const parkData = {
    id: parkId,
    name: parkName,
    country,
    coasters,
  };

  const parksDir = path.resolve('.', 'parks');

  if (!fs.existsSync(parksDir)) {
    fs.mkdirSync(parksDir);
  }
  const outputPath = path.resolve('.', 'parks', `${parkId}.json`);
  const output = JSON.stringify(parkData, null, 2);
  fs.writeFileSync(outputPath, output);
};

const argv = yargs(hideBin(process.argv)).parseSync();
const rcdbUrl = argv._[0] as string;
run(rcdbUrl);
