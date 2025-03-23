import { Park } from './types';
import { REQUEST_TAG } from './constants';

export const getParks = async (): Promise<Park[]> => {
  const response = await fetch(`${process.env.LOGALISER_API}/coasters/ridden`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    next: {
      tags: [REQUEST_TAG],
    },
  });
  const parks = await response.json();
  return parks;
};
