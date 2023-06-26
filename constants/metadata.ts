import { Metadata } from 'next';

type OpenGraph = Metadata['openGraph'];

export const baseOpenGraph: OpenGraph = {
  siteName: "Liv's Beehive",
  locale: 'en-GB',
  type: 'website',
  images: [{ url: '/apple-icon.png' }],
  description:
    "Hi, I'm Liv, and welcome to my beehive! Around the internet, I'm known as olivvybee.",
};
