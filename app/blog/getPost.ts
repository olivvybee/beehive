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

const filenameToSlug = (filename: string) => {
  const slugSegments = filename
    .replace('./', '')
    .replace('.mdx', '')
    .split('-');

  const dateSegments = slugSegments.slice(0, 3);
  const nameSegment = slugSegments.slice(3).join('-');

  return [...dateSegments, nameSegment];
};

const slugToFilename = (slug: string[]) => `${slug.join('-')}.mdx`;
