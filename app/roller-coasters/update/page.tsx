import { Link } from '@/components/Link';
import { Park } from '../types';

import styles from './page.module.css';

const CoasterUpdatePage = async () => {
  const response = await fetch(
    `${process.env.ROLLER_COASTER_TRACKER_API}/parks`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );
  const parks: Park[] = await response.json();

  return (
    <>
      <h2>Update roller coasters</h2>

      <ul className={styles.parkList}>
        {parks.map((park) => (
          <li key={park.id} className={styles.parkListItem}>
            <Link
              href={`/roller-coasters/update/${park.id}`}
              className={styles.parkLink}>
              {park.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CoasterUpdatePage;
