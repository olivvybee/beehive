import classNames from 'classnames';
import { Coaster, CoasterWithPark, Park } from '../types';

import styles from './CoasterList.module.css';
import { formatDate } from 'date-fns';

interface CoasterListProps {
  coasters: CoasterWithPark[];
}

export const CoasterList = ({ coasters }: CoasterListProps) => {
  const riddenCoasters = coasters
    .filter((coaster) => coaster.ridden)
    .toSorted((a, b) => {
      if (!a.riddenDate && !b.riddenDate) {
        return a.name < b.name ? -1 : 1;
      }

      if (!a.riddenDate) {
        return -1;
      }

      if (!b.riddenDate) {
        return 1;
      }

      return a.riddenDate < b.riddenDate ? -1 : 1;
    });

  return (
    <>
      <p>
        This list of every coaster I've ridden would ideally be in chronological
        order, but I don't know the exact date I rode all of them, so those that
        I don't know the date for are listed in alphabetical order.
      </p>

      <ol className={styles.coasterList}>
        {riddenCoasters.map((coaster) => (
          <li
            key={coaster.id}
            className={classNames({ [styles.noDate]: !coaster.riddenDate })}>
            <div className={styles.listEntry}>
              <div className={styles.names}>
                <span>
                  <a
                    className={styles.link}
                    href={`https://rcdb.com/${coaster.id}.htm`}>
                    {coaster.name}
                  </a>
                </span>

                <span className={styles.parkName}>{coaster.park.name}</span>
              </div>

              <div className={styles.metadata}>
                {coaster.riddenDate && (
                  <span>{formatDate(coaster.riddenDate, 'dd MMM yyyy')}</span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};
