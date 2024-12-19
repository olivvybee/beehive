'use server';

import { revalidateTag } from 'next/cache';
import { REQUEST_TAG } from './constants';

export const refreshCache = () => revalidateTag(REQUEST_TAG);
