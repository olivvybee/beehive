export const filenameToSlug = (filename: string) => {
  const slugSegments = filename
    .replace('./', '')
    .replace('.mdx', '')
    .split('-');

  const dateSegments = slugSegments.slice(0, 3);
  const nameSegment = slugSegments.slice(3).join('-');

  return [...dateSegments, nameSegment];
};

export const slugToFilename = (slug: string[]) => `${slug.join('-')}.mdx`;
