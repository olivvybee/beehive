import { Metadata } from 'next';

type OpenGraph = NonNullable<Metadata['openGraph']>;

const titleTemplate = {
  template: "%s - Liv's Beehive",
  default: "Liv's Beehive",
};

const description =
  'The personal site of a bee who happens to be a software engineer.';

export const baseOpenGraph: OpenGraph = {
  siteName: "Liv's Beehive",
  locale: 'en-GB',
  type: 'website',
  images: [{ url: '/apple-icon.png' }],
  description,
};

export const metadataTemplate: Metadata = {
  metadataBase: new URL('https://beehive.gay'),
  title: titleTemplate,
  description,
  authors: [{ name: 'Liv Asch', url: 'https://beehive.gay' }],
  other: {
    'fediverse:creator': '@olivvybee@honeycomb.engineer',
  },
  openGraph: {
    ...baseOpenGraph,
    title: titleTemplate,
  },
};

interface BasicMetadata {
  title?: string;
  description?: string;
  type?: 'website' | 'article';
  images?: OpenGraph['images'];
}

export const buildMetadata = (metadata: BasicMetadata): Metadata => ({
  ...metadata,
  openGraph: {
    ...baseOpenGraph,
    ...metadata,
  },
});
