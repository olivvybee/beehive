'use client';

import { refreshCache } from '../cache';

import styles from './RefreshCacheButton.module.css';

export const RefreshCacheButton = () => (
  <button
    onClick={() => refreshCache()}
    className={styles.button}
    type="button">
    Force cache update
  </button>
);
