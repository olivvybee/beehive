import fs from 'fs';
import removeMarkdown from 'remove-markdown';

export const getPostText = (filename: string) => {
  const contents = fs.readFileSync(filename, 'utf-8');
  const rawText = removeMarkdown(contents, { useImgAltText: false });

  const metaEndIndex = rawText.indexOf('};');
  const startIndex = metaEndIndex !== -1 ? metaEndIndex + 4 : 0;
  const postText = rawText.slice(startIndex).trim();
  return postText;
};
