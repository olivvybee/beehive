import fs from 'fs';
import path from 'path';
import { Link } from '../Link';

import styles from './ProjectList.module.css';

interface ProjectInfo {
  href: string;
  name: string;
  description: string;
  imageUrl?: string;
}

export interface ProjectListProps {
  /* Path to a directory containing one subdirectory for each project to be displayed */
  directoryPath: string;
  /* Base URL path for where all the projects are linked from */
  urlPath: string;
}

export const ProjectList = ({ directoryPath, urlPath }: ProjectListProps) => {
  const directories = fs
    .readdirSync(directoryPath)
    .filter((name) =>
      fs.lstatSync(path.resolve(directoryPath, name)).isDirectory()
    );

  const projectInfo = directories.map((name): ProjectInfo => {
    const projectPath = path.resolve(directoryPath, name);
    const metaPath = path.resolve(projectPath, 'meta.json');

    const metaContents = fs.readFileSync(metaPath, 'utf-8');
    const info = JSON.parse(metaContents);

    const href = `${urlPath}/${name}`;

    return {
      ...info,
      href,
    };
  });

  return (
    <ul className={styles.projectList}>
      {projectInfo.map((info) => (
        <ProjectListItem key={info.href} info={info} />
      ))}
    </ul>
  );
};

interface ProjectListItemProps {
  info: ProjectInfo;
}

const ProjectListItem = ({ info }: ProjectListItemProps) => (
  <li className={styles.projectListItem}>
    <Link href={info.href} className={styles.projectLink}>
      <img
        src={info.imageUrl || '/img/project-placeholder.png'}
        className={styles.projectImage}
      />

      <div className={styles.info}>
        <h3 className={styles.projectName}>{info.name}</h3>
        <p className={styles.projectDescription}>{info.description}</p>
      </div>
    </Link>
  </li>
);
