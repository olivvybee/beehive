import { TrainsMap } from './TrainsMap';
import { getBounds } from './getBounds';
import { loadRoutes } from './loadRoutes';

const TrainsPage = () => {
  const routes = loadRoutes();

  return (
    <>
      <h2>Train map</h2>

      <TrainsMap routes={routes} />

      <p>
        This is a hopefully fairly up to date map of all the train routes I have
        taken (and can remember).
      </p>
      <p>
        It doesn't include the London Underground because I have no hope of
        knowing which parts of the network I have used and where the tracks are
        on a map.
      </p>
    </>
  );
};

export default TrainsPage;
