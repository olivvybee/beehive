import type { MDXComponents } from 'mdx/types';

// This file is required to use MDX in `app` directory.
export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...components,
  };
};