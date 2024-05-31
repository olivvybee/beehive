'use client';

import { useMap } from 'react-map-gl/maplibre';

import { Route } from '../Route';
import { getBounds } from '../utils/getBounds';
import { GROUPED_OPERATORS, GroupedOperators } from '../constants/operators';

import styles from './PresetChooser.module.css';

interface PresetChooserProps {
  routes: Route[];
}

export const PresetChooser = ({ routes }: PresetChooserProps) => {
  const { trainMap } = useMap();

  const onClickPreset = (preset: GroupedOperators) => {
    const matchingRoutes = routes.filter((route) =>
      preset.operators
        .map((operator) => operator.id)
        .includes(route.operator.id)
    );
    const bounds = getBounds(matchingRoutes);
    trainMap?.fitBounds(bounds, { padding: 128 });
  };

  return (
    <div className={styles.presetChooser}>
      <h3 className={styles.heading}>Interesting views</h3>

      <ul className={styles.grid}>
        {GROUPED_OPERATORS.map((group) => (
          <PresetItem
            key={group.name}
            preset={group}
            onClick={() => onClickPreset(group)}
          />
        ))}
      </ul>
    </div>
  );
};

interface PresetItemProps {
  preset: GroupedOperators;
  onClick: () => void;
}

export const PresetItem = ({ preset, onClick }: PresetItemProps) => (
  <li className={styles.item}>
    <button className={styles.button} onClick={onClick}>
      {preset.name}
    </button>
  </li>
);
