import ReactMarkdown, { Options, Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { CodeBlock } from '../CodeBlock';

const components: Components = {
  code: ({ node, children, className, inline, ...props }) => {
    if (inline) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    const language = className
      ? className.match(/language-(\w+)/)?.[1]
      : undefined;

    return <CodeBlock language={language}>{String(children)}</CodeBlock>;
  },
};

export const Markdown = (options: Options) => (
  <ReactMarkdown
    rehypePlugins={[rehypeRaw]}
    components={components}
    {...options}
  />
);
