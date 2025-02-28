'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { formatDate } from 'date-fns';
import {
  IoCaretForward,
  IoCheckmarkCircle,
  IoEllipseOutline,
} from 'react-icons/io5';

import { ProgressBar } from '@/components/ProgressBar';

import { Park } from '../types';

import styles from './CompletionStats.module.css';

export interface ParkCompletionProps {
  park: Park;
}

export const ParkCompletion = ({ park }: ParkCompletionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const coasters = park.coasters.toSorted((a, b) => {
    return a.name < b.name ? -1 : 1;
  });

  const coasterCount = coasters.length;
  const riddenCount = coasters.filter((coaster) => coaster.ridden).length;
  const percentage = Math.round((riddenCount / coasterCount) * 100);

  return (
    <li key={park.id} className={styles.listItem}>
      <button className={styles.clickable} onClick={() => setIsOpen(!isOpen)}>
        <IoCaretForward
          className={classNames(styles.expanderTriangle, {
            [styles.open]: isOpen,
          })}
        />

        {coasterCount === riddenCount ? (
          <IoCheckmarkCircle color="var(--green)" />
        ) : (
          <IoEllipseOutline />
        )}

        <span className={styles.parkName}>{park.name}</span>

        <div className={styles.progress}>
          <span>
            {percentage}% ({riddenCount}/{coasterCount})
          </span>
          <ProgressBar
            className={styles.progressBar}
            percentage={percentage}
            aria-hidden={true}
          />
        </div>
      </button>

      {isOpen && (
        <ul className={classNames(styles.coasterList)}>
          {coasters.map((coaster) => (
            <li className={styles.coasterListItem} key={coaster.id}>
              {coaster.ridden ? (
                <IoCheckmarkCircle
                  color="var(--green)"
                  className={styles.coasterIcon}
                />
              ) : (
                <IoEllipseOutline className={styles.coasterIcon} />
              )}

              {/* <div className={styles.coasterDetails}> */}
              <span className={styles.coasterName}>
                <a href={`https://rcdb.com/${coaster.id}.htm`}>
                  {coaster.name}
                </a>
              </span>

              {coaster.riddenDate && (
                <span className={styles.date}>
                  {formatDate(coaster.riddenDate, 'dd MMM yyyy')}
                </span>
              )}
              {/* </div> */}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
