import NextLink from 'next/link';

export type LinkProps = Omit<React.ComponentProps<typeof NextLink>, 'prefetch'>;

/**
 * Wrapper around next/link to avoid https://github.com/vercel/next.js/discussions/50958
 */
export const Link = (props: LinkProps) => (
  <NextLink {...props} prefetch={false} />
);
