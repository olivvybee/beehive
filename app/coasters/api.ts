import { Park } from './types';
import { REQUEST_TAG } from './constants';

export const getParks = async (): Promise<Park[]> => {
  const response = await fetch(`${process.env.LOGALISER_API}/coasters/ridden`, {
    headers: {
      Accept: 'application/json',
    },
    next: {
      tags: [REQUEST_TAG],
    },
  });
  const parks = await response.json();
  return parks;
};

export const getPark = async (parkId: string): Promise<Park | undefined> => {
  const response = await fetch(
    `${process.env.ROLLER_COASTER_TRACKER_API}/parks/${parkId}`,
    {
      headers: {
        Accept: 'application/json',
      },
      next: {
        tags: [REQUEST_TAG],
      },
    }
  );

  if (!response.ok) {
    return undefined;
  }

  const park = await response.json();
  return park;
};
