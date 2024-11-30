'use server';

import { revalidateTag } from 'next/cache';

export interface Result {
  success: boolean;
  error?: string;
}

export const saveChanges = async (
  coasterIds: number[],
  includeDate: boolean,
  apiKey: string
): Promise<Result> => {
  const data = {
    coasters: coasterIds,
    includeDate,
  };

  const response = await fetch(
    `${process.env.ROLLER_COASTER_TRACKER_API}/coasters/markRidden`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ['Content-Type']: 'application/json',
        Authorization: `Bearer ${apiKey || 'incorrect'}`,
      },
      body: JSON.stringify(data),
    }
  );

  revalidateTag('roller-coasters');

  if (!response.ok) {
    const text = await response.text();
    return { success: false, error: text };
  }

  return { success: true };
};
