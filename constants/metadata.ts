import { Metadata } from 'next';

type OpenGraph = Metadata['openGraph'];

export const baseOpenGraph: OpenGraph = {
  siteName: "Liv's Beehive",
  locale: 'en-GB',
  type: 'website',
  images: [{ url: '/apple-icon.png' }],
};
