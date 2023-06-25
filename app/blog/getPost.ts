import fs from 'fs';
import matter from 'gray-matter';

import { Post } from './types';
import { filenameToSlug, slugToFilename } from './postFilename';

export const getPostByFilename = async (filename: string): Promise<Post> => {
  const rawText = fs.readFileSync(`./app/blog/posts/${filename}`);
  const { content, data } = matter(rawText);

  const slug = filenameToSlug(filename);

  const meta = {
    title: 'Placeholder title',
    date: new Date().toISOString(),
    ...data,
  };

  return {
    content,
    meta,
    slug,
  };
};

export const getPostBySlug = async (slug: string[]) => {
  const filename = slugToFilename(slug);
  return getPostByFilename(filename);
};
