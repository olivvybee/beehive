import fs from 'fs';
import { getPostByFilename } from './getPost';

export const getAllPosts = async () => {
  const posts = await Promise.all(
    fs
      .readdirSync('./app/blog/posts')
      .filter((filename) => filename.endsWith('.mdx'))
      .map((filename) => getPostByFilename(filename))
  );

  return posts.sort((post1, post2) =>
    post1.meta.date > post2.meta.date ? -1 : 1
  );
};