import ReactMarkdown, { Options, Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { CodeBlock } from '../CodeBlock';
import { Abbr } from '../Abbr';
import { Link } from '../Link';

const components: Components = {
  a: ({ href = '', ...props }) => <Link href={href} {...props} />,

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

  abbr: ({ children, title = '', ...props }) => (
    <Abbr title={title} {...props}>
      {children}
    </Abbr>
  ),
};

export const Markdown = (options: Options) => (
  <ReactMarkdown
    rehypePlugins={[rehypeRaw]}
    components={components}
    {...options}
  />
);
