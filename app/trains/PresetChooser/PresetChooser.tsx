'use client';

import { useContext } from 'react';
import { useMap } from 'react-map-gl/maplibre';

import { Route } from '../Route';
import { getBounds } from '../utils/getBounds';
import {
  GROUPED_OPERATORS,
  GroupedOperators,
  Operator,
} from '../constants/operators';
import { trainsMapContext } from '../TrainsMapContext';

import styles from './PresetChooser.module.css';
import { TRAM_OPERATORS } from './PresetChooser.constants';

interface PresetChooserProps {
  routes: Route[];
}

export const PresetChooser = ({ routes }: PresetChooserProps) => {
  const { trainMap } = useMap();
  const { setSelectedOperatorIds } = useContext(trainsMapContext);

  const onClickPreset = (operators: Operator[]) => {
    setSelectedOperatorIds(operators.map((operator) => operator.id));

    const matchingRoutes = routes.filter((route) =>
      operators.some((operator) => operator.id === route.operator.id),
    );

    const bounds = getBounds(matchingRoutes);
    trainMap?.fitBounds(bounds, { padding: 128 });
  };

  return (
    <div className={styles.presetChooser}>
      <div className={styles.section}>
        <h3 className={styles.heading}>Areas</h3>
        <ul className={styles.grid}>
          {GROUPED_OPERATORS.map((group) => (
            <PresetItem
              key={group.name}
              name={group.name}
              onClick={() => onClickPreset(group.operators)}
            />
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Filters</h3>
        <ul className={styles.grid}>
          <PresetItem
            name="Trams"
            onClick={() => onClickPreset(TRAM_OPERATORS)}
          />
        </ul>
      </div>
    </div>
  );
};

interface PresetItemProps {
  name: string;
  onClick: () => void;
}

export const PresetItem = ({ name, onClick }: PresetItemProps) => (
  <li className={styles.item}>
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  </li>
);
