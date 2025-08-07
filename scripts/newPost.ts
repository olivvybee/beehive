import fs from 'fs';
import path from 'path';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const imgDirectory = './public/img';
const postsDirectory = './app/blog/posts';

const argv = yargs(hideBin(process.argv))
  .command('* <title...>', 'Create a new blog post.', (yargs) => {
    yargs.positional('title', {
      demandOption: true,
      type: 'string',
    });
  })
  .parseSync() as {
  [x: string]: unknown;
  _: (string | number)[];
  $0: string;
  title: string[];
};

const title = argv.title.join(' ');
const kebabCaseTitle = argv.title.map((part) => part.toLowerCase()).join('-');

const date = new Date();
date.setHours(date.getHours() + 3);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);
const isoDate = date.toISOString();

const imgFolderName = isoDate.slice(0, 7);
const imgFolderPath = path.join(imgDirectory, imgFolderName);
if (!fs.existsSync(imgFolderPath)) {
  fs.mkdirSync(imgFolderPath);
}

const postContent = `---
title: "${title}"
date: ${isoDate}
description: ""
hero: /img/${imgFolderName}/xxx.jpg
---

Text goes here...`;

const postFilename = `${isoDate.slice(0, 10)}-${kebabCaseTitle}.md`;
const postPath = path.join(postsDirectory, postFilename);

fs.writeFileSync(postPath, postContent, 'utf-8');
