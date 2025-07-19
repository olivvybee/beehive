import { FaLaptopCode } from 'react-icons/fa';
import styles from './CodeProject.module.css';
import { Link } from '@/components/Link';
import { IconType } from 'react-icons';

export interface CodeProjectProps {
  name: string;
  description: string;
  imageUrl?: string;
  icon?: IconType;
  sourceCodeUrl?: string;
  projectUrl?: string;
}

export const CodeProject = ({
  name,
  description,
  imageUrl,
  icon: Icon = FaLaptopCode,
  sourceCodeUrl,
  projectUrl,
}: CodeProjectProps) => (
  <li className={styles.codeProject}>
    <div className={styles.projectImage}>
      {imageUrl ? (
        <img src={imageUrl} alt="" className={styles.projectImage} />
      ) : (
        <Icon size={64} />
      )}
    </div>

    <div className={styles.projectInfo}>
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.projectDescription}>{description}</p>

      <div className={styles.projectLinks}>
        {projectUrl && <Link href={projectUrl}>View project</Link>}
        {sourceCodeUrl && <a href={sourceCodeUrl}>View source code</a>}
      </div>
    </div>
  </li>
);
