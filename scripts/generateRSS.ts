import fs from 'fs';
import path from 'path';

import { Feed } from 'feed';
import matter from 'gray-matter';
import { marked } from 'marked';

import { filenameToSlug } from '../app/blog/postFilename';

const generate = async () => {
  const date = new Date();

  const feed = new Feed({
    title: "Liv's Beehive",
    id: 'https://beehive.gay',
    link: 'https://beehive.gay',
    favicon: `https://beehive.gay/favicon.ico`,
    updated: date,
    language: 'en-GB',
    copyright: `© 2013-${date.getFullYear()} Liv Flowers`,
    feedLinks: {
      atom: `https://beehive.gay/atom.xml`,
    },
    author: {
      name: 'Liv Flowers',
      link: `https://beehive.gay`,
    },
  });

  const postsDirectory = './app/blog/posts';
  const files = fs.readdirSync(postsDirectory);

  files.reverse().forEach((filename) => {
    const rawText = fs.readFileSync(
      path.join(postsDirectory, filename),
      'utf-8'
    );
    const slug = filenameToSlug(filename).join('/');

    const { content, data } = matter(rawText);

    const html = marked(content, {
      mangle: false,
      headerIds: false,
    });

    feed.addItem({
      title: data.title || 'TITLE',
      id: `https://beehive.gay/blog/${slug}`,
      link: `https://beehive.gay/blog/${slug}`,
      content: html,
      date: data.date ? new Date(data.date) : new Date(),
    });
  });

  const outputPath = './public/atom.xml';
  fs.writeFileSync(outputPath, feed.atom1());
};

generate();
