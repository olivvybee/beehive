import { FEDI_URL, FEDI_USERNAME } from '@/constants';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
  title: 'fedi.beehive.gay has shut down',
  description: 'A memorial for a tiny fediverse instance',
});

const FediPage = () => (
  <>
    <h2>fedi.beehive.gay has shut down</h2>

    <p>
      My old fedi instance, <code>fedi.beehive.gay</code>, has now been
      permanently shut down and removed from the internet.
    </p>

    <p>
      If you're looking to follow me, you can find me on my new instance at{' '}
      <a href={FEDI_URL}>{FEDI_USERNAME}</a>.
    </p>

    <h3>Why did I shut it down?</h3>

    <p>
      The old instance was hosted on{' '}
      <a href="https://fedi.monster">Fedi Monster</a>, which charges a small
      monthly fee in exchange for hosting an instance and taking care of things
      like updates and maintenance.
    </p>
    <p>
      In early 2024, the admin of Fedi Monster announced they were looking to
      step away and hand the service over to someone else. Since it didn't seem
      like anyone was taking over, I was concerned about the future of the
      service and wanted to move away.
    </p>
    <p>
      I migrated my account to{' '}
      <a href="https://meow.woem.cat">a friend's instance</a> but didn't get on
      with <a href="https://iceshrimp.dev/iceshrimp/iceshrimp">iceshrimp</a>,
      the alternative to mastodon that was running there.
    </p>
    <p>
      I decided I wanted to run my own instance again, so as a test I set up{' '}
      <code>honeycomb.engineer</code> running on a Raspberry Pi in a cupboard in
      my home office. Once I was sure it could handle the load, I migrated to
      it, and that's where I stayed.
    </p>
    <p>
      I downloaded an archive of all my posts from <code>fedi.beehive.gay</code>
      , so they aren't lost. Someday I may host them somewhere (or import them
      into my new instance).
    </p>
  </>
);

export default FediPage;
