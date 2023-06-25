import { filenameToSlug, slugToFilename } from './postFilename';

export const getPostByFilename = async (filename: string): Promise<Post> => {
  const { default: Content, meta } = await import(`./posts/${filename}`);

  const slug = filenameToSlug(filename);

  return {
    Content,
    meta,
    slug,
  };
};

export const getPostBySlug = async (slug: string[]) => {
  const filename = slugToFilename(slug);
  return getPostByFilename(filename);
};
