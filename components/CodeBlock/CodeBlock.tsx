import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';

import './Syntax.css';
import styles from './CodeBlock.module.css';
import classNames from 'classnames';

const languageMap: { [label: string]: string[] } = {
  CSS: ['css'],
  Javascript: ['js', 'javascript'],
  JSX: ['jsx'],
  Markdown: ['md', 'markdown'],
  MDX: ['mdx'],
  'Objective-C': ['objc', 'objectivec'],
  Python: ['py', 'python'],
  TSX: ['tsx'],
  Typescript: ['ts', 'typescript'],
};

const getLanguageLabel = (language: string) => {
  return (
    Object.keys(languageMap).find((label) =>
      languageMap[label].includes(language)
    ) || language
  );
};

export interface CodeBlockProps {
  children: string | string[];
  language?: string;
}

export const CodeBlock = ({ children, language }: CodeBlockProps) => (
  <div className={styles.codeBlock}>
    {language && (
      <span className={styles.languageTag}>{getLanguageLabel(language)}</span>
    )}

    <SyntaxHighlighter
      className={classNames(styles.code, 'syntax')}
      language={language}
      useInlineStyles={false}
      codeTagProps={{ className: `language-${language}` }}>
      {children}
    </SyntaxHighlighter>
  </div>
);
