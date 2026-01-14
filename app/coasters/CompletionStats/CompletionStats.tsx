import _sortBy from 'lodash/sortBy';

import { Park } from '../types';

import styles from './CompletionStats.module.css';
import { ParkCompletion } from './ParkCompletion';

export interface CompletionStatsProps {
  parks: Park[];
}

export const CompletionStats = ({ parks }: CompletionStatsProps) => {
  const sortedParks = _sortBy(parks, ['name']);

  return (
    <ul className={styles.list}>
      {sortedParks.map((park) => (
        <ParkCompletion key={park.id} park={park} />
      ))}
    </ul>
  );
};
