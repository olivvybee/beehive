import path from 'path';
import fs from 'fs';

import { config as loadEnv } from 'dotenv';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

interface RunArgs {
  filename: string;
  apiKey: string;
}

const run = async ({ filename, apiKey }: RunArgs) => {
  loadEnv();
  const ROLLER_COASTER_TRACKER_API = process.env.ROLLER_COASTER_TRACKER_API;

  if (!ROLLER_COASTER_TRACKER_API) {
    console.error('ROLLER_COASTER_TRACKER_API env var is not set');
    process.exit(1);
  }

  const resolvedPath = path.resolve(filename);
  const parkData = fs.readFileSync(resolvedPath, 'utf-8');

  const response = await fetch(`${ROLLER_COASTER_TRACKER_API}/parks/add`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      ['Content-Type']: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: parkData,
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(text);
    process.exit(1);
  }

  const result = await response.json();
  console.log(`Successfully added park with id ${result.id}`);
};

const argv = yargs(hideBin(process.argv))
  .option('api-key', {
    alias: 'k',
    type: 'string',
    description: 'API key for the roller coaster tracker',
    demandOption: true,
  })
  .option('filename', {
    alias: 'f',
    type: 'string',
    description: 'Path to a JSON file containing park data to upload',
    demandOption: true,
  })
  .parseSync();

run({ ...argv });
