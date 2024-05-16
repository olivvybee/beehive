'use client';

import { useMap } from 'react-map-gl/maplibre';

import { ParkCoasters } from '../types';

import styles from './ParkChooser.module.css';
import { getBounds } from '../utils/getBounds';
import { usePathname } from 'next/navigation';
import { FaLink } from 'react-icons/fa6';

interface ParkChooserProps {
  parks: ParkCoasters[];
}

export const ParkChooser = ({ parks }: ParkChooserProps) => {
  const maps = useMap();

  const onClickPark = (park: ParkCoasters) => {
    if (maps.rollerCoasterMap) {
      const bounds = getBounds([park]);
      maps.rollerCoasterMap.fitBounds(bounds, { padding: 128 });
    }
  };

  return (
    <div className={styles.parkChooser}>
      <h3 className={styles.heading}>Theme parks</h3>

      <ul className={styles.grid}>
        {parks.map((park) => (
          <PresetItem
            key={park.park.id}
            park={park}
            onClick={() => onClickPark(park)}
          />
        ))}
      </ul>

      <p className={styles.helperText}>
        Click a park to zoom to that park's coasters. Copy the permalink url (
        <span className={styles.permalink}>
          <FaLink />
        </span>
        ) to link to a specific park view.
      </p>
    </div>
  );
};

interface ParkItemProps {
  park: ParkCoasters;
  onClick: () => void;
}

export const PresetItem = ({ park, onClick }: ParkItemProps) => {
  const pathname = usePathname();

  const permalinkUrl = `${pathname}?park=${park.park.id}`;

  return (
    <li className={styles.item}>
      <a href={permalinkUrl} className={styles.permalink}>
        <FaLink />
      </a>
      <button className={styles.button} onClick={onClick}>
        {park.park.name}
      </button>
    </li>
  );
};
