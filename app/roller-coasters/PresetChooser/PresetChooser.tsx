'use client';

import { useMap } from 'react-map-gl/maplibre';

import { PRESETS } from '../constants/presets';
import { Preset } from '../types';

import styles from './PresetChooser.module.css';
import classNames from 'classnames';

export const PresetChooser = () => {
  const { rollerCoasterMap } = useMap();

  const onClickPreset = (preset: Preset) => {
    rollerCoasterMap?.fitBounds([preset.sw, preset.ne]);
  };

  const logCurrentView = () => {
    if (rollerCoasterMap) {
      const bounds = rollerCoasterMap.getBounds();
      const ne = bounds.getNorthEast();
      const sw = bounds.getSouthWest();
      console.log(JSON.stringify({ sw, ne }).slice(1, -1));
    }
  };

  return (
    <div className={styles.presetChooser}>
      <h3 className={styles.heading}>Interesting views</h3>

      {process.env.NODE_ENV === 'development' && (
        <button
          className={classNames(styles.button, styles.logButton)}
          onClick={logCurrentView}>
          Log current view
        </button>
      )}

      <ul className={styles.grid}>
        {PRESETS.map((preset) => (
          <PresetItem
            key={preset.id}
            preset={preset}
            onClick={() => onClickPreset(preset)}
          />
        ))}
      </ul>
    </div>
  );
};

interface PresetItemProps {
  preset: Preset;
  onClick: () => void;
}

export const PresetItem = ({ preset, onClick }: PresetItemProps) => (
  <li className={styles.item}>
    <button className={styles.button} onClick={onClick}>
      {preset.name}
    </button>
  </li>
);
