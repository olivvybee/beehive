import fs from 'fs';
import path from 'path';

import { remove as removeExif, load, dump } from 'piexifjs';

const imagesDirectory = path.resolve('./public/img');
const files = fs.readdirSync(imagesDirectory, {
  recursive: true,
  encoding: null,
});
const jpgFiles = files.filter(
  (name) => name.endsWith('jpg') || name.endsWith('jpeg')
);
const filePaths = jpgFiles.map((name) => path.join(imagesDirectory, name));

filePaths.forEach((filePath) => {
  const fileContents = fs.readFileSync(filePath, 'binary');
  const updatedContents = removeExif(fileContents);
  fs.writeFileSync(filePath, updatedContents, { encoding: 'binary' });
});
