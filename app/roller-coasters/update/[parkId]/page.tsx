import { notFound } from 'next/navigation';
import { IoChevronBack } from 'react-icons/io5';

import { Link } from '@/components/Link';

import { getPark } from '../../api';

import { Editor } from './Editor';
import styles from './page.module.css';

interface CoasterListPageProps {
  params: {
    parkId: string;
  };
}

const CoasterListPage = async ({ params }: CoasterListPageProps) => {
  const { parkId } = params;
  const park = await getPark(parkId);

  if (!park) {
    return notFound();
  }

  return (
    <>
      <Link href="/roller-coasters/update" className={styles.backLink}>
        <IoChevronBack /> Back to park list
      </Link>

      <h2>Update coasters at {park.name}</h2>

      <Editor coasters={park.coasters} />
    </>
  );
};

export default CoasterListPage;
