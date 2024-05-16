'use client';

import { useMap } from 'react-map-gl/maplibre';

import { PRESETS } from '../constants/presets';
import { Preset } from '../types';

import styles from './PresetChooser.module.css';

export const PresetChooser = () => {
  const { rollerCoasterMap } = useMap();

  const onClickPreset = (preset: Preset) => {
    rollerCoasterMap?.fitBounds([preset.sw, preset.ne]);
  };

  return (
    <div className={styles.presetChooser}>
      <h3 className={styles.heading}>Interesting views</h3>

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
