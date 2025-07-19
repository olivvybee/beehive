import { RiRobot2Line } from 'react-icons/ri';
import { TbRollercoaster, TbTrack } from 'react-icons/tb';

import { CodeProjectProps } from './CodeProject';

export const projects: CodeProjectProps[] = [
  {
    name: 'Roller coaster credits tracker',
    description:
      "A list of every roller coaster I've ever ridden. The data can also be displayed as a map and as a progress bar for each theme park.",
    projectUrl: '/coasters',
    sourceCodeUrl:
      'https://github.com/olivvybee/beehive/tree/main/app/coasters',
    icon: TbRollercoaster,
  },
  {
    name: 'Train map',
    description:
      "An interactive map showing every train route I've ever ridden, colour coded by operator.",
    projectUrl: '/trains',
    sourceCodeUrl: 'https://github.com/olivvybee/beehive/tree/main/app/trains',
    icon: TbTrack,
  },
  {
    name: 'imagenerator',
    description:
      'An open source image and meme generator created to give more control over the output, without tracking or watermarks.',
    projectUrl: 'https://imagenerator.net',
    sourceCodeUrl: 'https://github.com/olivvybee/imagenerator',
    imageUrl: 'https://imagenerator.net/apple-touch-icon.png',
  },
  {
    name: 'Gaydient',
    description:
      'A list of pride flags that provides customisable CSS code for implementing the flags as CSS gradients.',
    projectUrl: 'https://gaydient.com',
    sourceCodeUrl: 'https://github.com/olivvybee/gaydient',
    imageUrl: 'https://gaydient.com/apple-touch-icon.png',
  },
  {
    name: 'Logaliser',
    description:
      'A work-in-progress "everything tracker" designed to generate stats in the style of spotify wrapped, but for all my interests. It can currently track roller coasters and train journeys.',
    projectUrl: 'https://logaliser.beehive.gay',
    sourceCodeUrl: 'https://github.com/olivvybee/logaliser',
    imageUrl: 'https://logaliser.beehive.gay/icon.png',
  },
  {
    name: 'Get verbed',
    description:
      'A fedi bot which posts in the format "Get [verb]ed, [subject]" (e.g. "Get petted, nerd").',
    projectUrl: 'https://honeycomb.engineer/@getverbed',
    sourceCodeUrl: 'https://github.com/olivvybee/get-verbed',
    imageUrl: '/img/neocat_knife.png',
  },
];

export const inactiveProjects: CodeProjectProps[] = [
  {
    name: 'Orbit',
    description:
      'This was a tool for generating "friends circles" images on twitter, based on the people you interact with the most. It was shut down when twitter changed ownership and prohibited access to its API.',
    sourceCodeUrl: 'https://github.com/olivvybee/orbit',
  },
  {
    name: 'Cakebot',
    description:
      "This was a general-purpose discord bot which had commands to do various things like wish people happy birthday (the origin of the name), ping someone next time they were active, and play minesweeper. It was switched off when I left the main discord server that was using it, and it hasn't been kept up to date with changes to the discord API.",
    sourceCodeUrl: 'https://github.com/olivvybee/cake-bot',
  },
];
