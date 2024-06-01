'use client';

import { useContext } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { FaLink } from 'react-icons/fa';

import { ALL_OPERATORS, Operator } from '../constants/operators';
import { trainsMapContext } from '../TrainsMapContext';

import styles from './Key.module.css';
import { StationStatus } from '../Station';

export const Key = () => {
  const {
    selectedOperator,
    setSelectedOperator,
    stationsFilter,
    setStationsFilter,
  } = useContext(trainsMapContext);

  const showStations = stationsFilter !== undefined;
  const showUnvisitedStations = stationsFilter === StationStatus.NotVisited;

  const onClickOperator = (operator: Operator) => {
    if (selectedOperator?.id === operator.id) {
      setSelectedOperator(undefined);
    } else {
      setSelectedOperator(operator);
    }
  };

  return (
    <div className={styles.key}>
      <h3 className={styles.heading}>Operators</h3>

      <ul className={styles.grid}>
        {ALL_OPERATORS.map((operator) => (
          <OperatorsKeyItem
            key={operator.id}
            operator={operator}
            isDimmed={!!selectedOperator && operator.id !== selectedOperator.id}
            onClick={() => onClickOperator(operator)}
          />
        ))}
      </ul>

      <p className={styles.helperText}>
        Click an operator to show just that operator's routes. Click again to
        show all routes. Copy the permalink url (
        <span className={styles.permalink}>
          <FaLink />
        </span>
        ) to link to a specific operator map.
      </p>

      <h3 className={styles.heading}>Stations</h3>

      <div className={styles.stationsCheckboxes}>
        <div className={styles.checkboxItem}>
          <input
            id="show-stations"
            type="checkbox"
            checked={showStations}
            onChange={(e) =>
              setStationsFilter(
                e.target.checked ? StationStatus.PassedThrough : undefined
              )
            }
          />
          <label htmlFor="show-stations">Show stations</label>
        </div>

        {showStations && (
          <div className={styles.checkboxItem}>
            <input
              id="show-unvisited-stations"
              type="checkbox"
              checked={showUnvisitedStations}
              onChange={(e) =>
                setStationsFilter(
                  e.target.checked
                    ? StationStatus.NotVisited
                    : StationStatus.PassedThrough
                )
              }
            />
            <label htmlFor="show-unvisited-stations">
              Show unvisited stations{' '}
              <span className={styles.helperText}>(might be slow)</span>
            </label>
          </div>
        )}
      </div>

      <ul className={classNames(styles.grid, styles.stationsGrid)}>
        <li className={styles.item}>
          <div
            className={styles.swatch}
            style={{ backgroundColor: 'var(--red)' }}
          />
          <span>Not visited</span>
        </li>

        <li className={styles.item}>
          <div
            className={styles.swatch}
            style={{ backgroundColor: 'var(--orange)' }}
          />
          <span>Stopped</span>
        </li>

        <li className={styles.item}>
          <div
            className={styles.swatch}
            style={{ backgroundColor: 'var(--green)' }}
          />
          <span>Visited</span>
        </li>
      </ul>
    </div>
  );
};

interface OperatorsKeyItemProps {
  operator: Operator;
  isDimmed: boolean;
  onClick: () => void;
}

const OperatorsKeyItem = ({
  operator,
  isDimmed,
  onClick,
}: OperatorsKeyItemProps) => {
  const pathname = usePathname();

  const permalinkUrl = `${pathname}?operator=${operator.id}`;

  return (
    <li className={classNames(styles.item, { [styles.dimmed]: isDimmed })}>
      <div
        className={styles.swatch}
        style={{ backgroundColor: operator.colour }}
      />

      <button className={styles.button} onClick={onClick}>
        {operator.name}
      </button>

      <a href={permalinkUrl} className={styles.permalink}>
        <FaLink />
      </a>
    </li>
  );
};
