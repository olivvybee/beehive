'use client';

import { usePathname } from 'next/navigation';
import { useMap } from 'react-map-gl/maplibre';
import { FaLink } from 'react-icons/fa';

import { PRESETS, Preset } from './presets';

import styles from './PresetChooser.module.css';

export const PresetChooser = () => {
  const { trainMap } = useMap();

  const onClickPreset = (preset: Preset) => {
    trainMap?.fitBounds([preset.sw, preset.ne]);
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
