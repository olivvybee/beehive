import { Link } from '@/components/Link';

import { getParks } from '../api';

import { RefreshCacheButton } from './RefreshCacheButton/RefreshCacheButton';

import styles from './page.module.css';

const CoasterUpdatePage = async () => {
  const parks = await getParks();

  return (
    <>
      <h2>Update roller coasters</h2>

      <ul className={styles.parkList}>
        {parks.map((park) => (
          <li key={park.id} className={styles.parkListItem}>
            <Link
              href={`/coasters/update/${park.id}`}
              className={styles.parkLink}>
              {park.name}
            </Link>
          </li>
        ))}
      </ul>

      <hr />

      <RefreshCacheButton />
    </>
  );
};

export default CoasterUpdatePage;
