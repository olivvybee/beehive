import { MetadataRoute } from 'next';
import { getAllPosts } from './blog/getAllPosts';
import { slugToUrl } from './blog/utils';

const sitemap = (): MetadataRoute.Sitemap => {
  const blogPosts = getAllPosts().map((post) => ({
    url: `https://beehive.gay${slugToUrl(post.slug)}`,
  }));

  return [
    { url: 'https://beehive.gay' },
    { url: 'https://beehive.gay/blog' },
    ...blogPosts,
    { url: 'https://beehive.gay/coasters' },
    { url: 'https://beehive.gay/code' },
    { url: 'https://beehive.gay/crafts' },
    { url: 'https://beehive.gay/links' },
    { url: 'https://beehive.gay/trains' },
  ];
};

export default sitemap;
