'use client';

import { useMap } from 'react-map-gl/maplibre';
import _groupBy from 'lodash/groupBy';

import { Park } from '../types';

import styles from './ParkChooser.module.css';
import { getBounds } from '../utils/getBounds';
import { usePathname } from 'next/navigation';
import { FaLink } from 'react-icons/fa6';

interface ParkChooserProps {
  parks: Park[];
}

export const ParkChooser = ({ parks }: ParkChooserProps) => {
  const { rollerCoasterMap } = useMap();

  const groupedParks = _groupBy(parks, 'country');

  const groups = Object.entries(groupedParks).map(([country, parks]) => {
    const groupParkIds = parks.map((park) => park.id);
    const groupParks = parks.filter((park) => groupParkIds.includes(park.id));
    return {
      name: country,
      parks: groupParks,
    };
  });

  const onClickGroup = (group: { name: string; parks: Park[] }) => {
    if (rollerCoasterMap) {
      const bounds = getBounds(group.parks);
      rollerCoasterMap.fitBounds(bounds, { padding: 128 });
    }
  };

  const onClickPark = (park: Park) => {
    if (rollerCoasterMap) {
      const bounds = getBounds([park]);
      rollerCoasterMap.fitBounds(bounds, { padding: 128 });
    }
  };

  return (
    <div className={styles.parkChooser}>
      <h3 className={styles.heading}>Theme parks</h3>

      {groups.map((group) => (
        <div key={group.name}>
          <h4 className={styles.groupName}>
            <button
              className={styles.button}
              onClick={() => onClickGroup(group)}>
              {group.name}
            </button>
          </h4>

          <ul className={styles.grid}>
            {group.parks.map((park) => (
              <ParkItem
                key={park.id}
                park={park}
                onClick={() => onClickPark(park)}
              />
            ))}
          </ul>
        </div>
      ))}

      <p className={styles.helperText}>
        {' '}
        Click a group name to zoom in on that group. Click a park to zoom to
        that park's coasters. Copy the permalink url (
        <span className={styles.permalink}>
          <FaLink />
        </span>
        ) to link to a specific view.
      </p>
    </div>
  );
};

interface ParkItemProps {
  park: Park;
  onClick: () => void;
}

export const ParkItem = ({ park, onClick }: ParkItemProps) => {
  const pathname = usePathname();

  const permalinkUrl = `${pathname}?park=${park.id}`;

  return (
    <li className={styles.item}>
      <a href={permalinkUrl} className={styles.permalink}>
        <FaLink />
      </a>
      <button className={styles.button} onClick={onClick}>
        {park.name}
      </button>
    </li>
  );
};
