'use client';

import { ChromeIcon } from '@/public/assets/misc_icons';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ActiveLinkTypes, BrowserSelectPopupTypes } from './interface';
import { options } from './props';

export default function InstallButton() {
  const [isBrowserPopupActive, setIsBrowserPopupActive] =
    useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<ActiveLinkTypes>({
    svg: <ChromeIcon className='h-8 w-8 hover:text-teal-800/50' />,
    name: 'Chrome',
    linkRedirect: 'https://www.google.com',
  });

  return (
    <div className='flex justify-between text-white rounded-md w-60 h-11 px-2 py-1.5 items-center bg-teal-500 shadow-lg shadow-teal-800/50 relative bottom-0 left-0'>
      <button
        onClick={() => window.open(activeLink.linkRedirect, '_blank')}
        className='flex items-center gap-2'
      >
        {activeLink.svg}
        {`Install for ${activeLink.name}!`}
      </button>
      <div className='ml-2 w-0.5 h-full border bg-white'></div>
      <button onClick={() => setIsBrowserPopupActive(!isBrowserPopupActive)}>
        <ChevronDownIcon className='w-8 h-8 font-thin hover:text-teal-800/50' />
      </button>
      {isBrowserPopupActive && (
        <BrowserSelectPopup
          options={options}
          setActiveLink={setActiveLink}
          isBrowserPopupActive={isBrowserPopupActive}
          setIsBrowserPopupActive={setIsBrowserPopupActive}
        />
      )}
    </div>
  );
}

const BrowserSelectPopup = ({
  options,
  setActiveLink,
  isBrowserPopupActive,
  setIsBrowserPopupActive,
}: BrowserSelectPopupTypes) => {
  const items = options.map((i) => (
    <button
      key={i.id}
      onClick={() => {
        setActiveLink(i.buttonContent);
        setIsBrowserPopupActive(!isBrowserPopupActive);
      }}
      className='flex items-center gap-2 w-full px-2 hover:bg-green-900'
    >
      {i.buttonContent.svg}
      {i.buttonContent.name}
    </button>
  ));

  return (
    <div className='w-44 py-2 rounded-md bg-green-800 shadow-lg shadow-green-900/50 absolute bottom-0 left-0'>
      {items}
    </div>
  );
};
