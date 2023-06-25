import ReactMarkdown, { Options } from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export const Markdown = (options: Options) => (
  <ReactMarkdown rehypePlugins={[rehypeRaw]} {...options} />
);
