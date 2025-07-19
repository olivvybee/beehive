import { Link } from '@/components/Link';
import { buildMetadata } from '@/utils/metadata';
import { CodeProject } from './CodeProject';

import styles from './page.module.css';

import { projects, inactiveProjects } from './projects';

export const metadata = buildMetadata({
  title: 'Code',
  description:
    'Code projects made by a bee who happens to be a software engineer.',
});

const CodePage = () => (
  <>
    <h2>Code</h2>
    <p>These are some code projects I've worked on in my spare time.</p>

    <ul className={styles.codeProjectList}>
      {projects.map((project) => (
        <CodeProject key={project.name} {...project} />
      ))}
    </ul>

    <hr />

    <h3>Inactive projects</h3>
    <p>
      These are old projects which are no longer available and I don't update
      them anymore. They're listed here as a historical archive.
    </p>

    <ul className={styles.codeProjectList}>
      {inactiveProjects.map((project) => (
        <CodeProject key={project.name} {...project} />
      ))}
    </ul>
  </>
);

export default CodePage;
