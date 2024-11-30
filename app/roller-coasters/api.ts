import { Park } from './types';

export const getParks = async (): Promise<Park[]> => {
  const response = await fetch(
    `${process.env.ROLLER_COASTER_TRACKER_API}/parks`,
    {
      headers: {
        Accept: 'application/json',
      },
      next: {
        tags: ['roller-coasters'],
      },
    }
  );
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
        tags: ['roller-coasters'],
      },
    }
  );

  if (!response.ok) {
    return undefined;
  }

  const park = await response.json();
  return park;
};
