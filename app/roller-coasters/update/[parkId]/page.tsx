import { notFound } from 'next/navigation';
import { Park } from '../../types';
import { Editor } from './Editor';

interface CoasterListPageProps {
  params: {
    parkId: string;
  };
}

const CoasterListPage = async ({ params }: CoasterListPageProps) => {
  const { parkId } = params;
  const response = await fetch(
    `${process.env.ROLLER_COASTER_TRACKER_API}/parks/${parkId}`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );

  if (!response.ok) {
    if (response.status === 404) {
      return notFound();
    }

    const error = await response.text();
    return <div>Error: {error}</div>;
  }

  const park: Park = await response.json();

  return (
    <>
      <h2>Update coasters at {park.name}</h2>

      <Editor coasters={park.coasters} />
    </>
  );
};

export default CoasterListPage;
