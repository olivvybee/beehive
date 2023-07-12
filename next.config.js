/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/:year(\\d{1,})/:month(\\d{1,})/:day(\\d{1,})/:slug',
      destination: '/blog/:year/:month/:day/:slug',
      permanent: true,
    },
    {
      source: '/.well-known/:path*',
      destination: 'https://fedi.beehive.gay/.well-known/:path*',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
