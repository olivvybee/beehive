import { notFound } from 'next/navigation';

import { getPark } from '../../api';

import { Editor } from './Editor';

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
      <h2>Update coasters at {park.name}</h2>

      <Editor coasters={park.coasters} />
    </>
  );
};

export default CoasterListPage;
