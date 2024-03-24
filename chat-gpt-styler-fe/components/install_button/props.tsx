import { useState } from 'react';
import { OptionType, ActiveLinkTypes } from './interface';
import { ChromeIcon } from '@/public/assets/misc_icons';

export const options: OptionType[] = [
  {
    id: 1,
    buttonContent: {
      svg: <ChromeIcon />,
      name: 'Chrome',
      linkRedirect: 'https://www.youtube.com/',
    },
  },
  {
    id: 2,
    buttonContent: {
      svg: <ChromeIcon />,
      name: 'GitHub',
      linkRedirect: 'https://www.github.com/',
    },
  },
];
