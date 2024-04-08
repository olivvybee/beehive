import { buildMetadata } from '@/utils/metadata';
import { Link } from '@/components/Link';
import { ProjectList } from '@/components/ProjectList/ProjectList';

export const metadata = buildMetadata({
  title: 'Crafts',
  description: 'Crafty things a bee gets up to.',
});

const CraftsPage = () => (
  <>
    <h2>Crafts</h2>

    <p>
      These are my creative outlets and things I like to get up to that don't
      involve code.
    </p>

    <ProjectList directoryPath="./app/crafts" urlPath="/crafts" />

    <p>
      Not listed here: I've tried a few times to learn to crochet, but my
      fingers are stubborn and refuse to do what they need to do.
    </p>
  </>
);

export default CraftsPage;
