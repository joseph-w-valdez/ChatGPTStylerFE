'use client';

import { ChromeIcon } from '@/public/assets/misc_icons/';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Dispatch, SetStateAction, ReactNode, useState } from 'react';
import { useActiveLinkContext } from './ActiveLinkContext';

interface BrowserSelectPopupTypes {
  options: OptionType[];
  setActiveLink: Dispatch<SetStateAction<any>>;
  isBrowserPopupActive: boolean;
  setIsBrowserPopupActive: Dispatch<SetStateAction<any>>;
}

interface OptionType {
  buttonContent: {
    svg: ReactNode;
    name: string;
    linkRedirect: string;
  };
}

const options: OptionType[] = [
  {
    buttonContent: {
      svg: <ChromeIcon />,
      name: 'Chrome',
      linkRedirect:
        'https://chromewebstore.google.com/detail/chatgpt-styler/mmfefeellkogplnodhfnggcpkomlaapj?hl=en&authuser=0&pli=1',
    },
  },
];

export default function InstallButton() {
  const [isBrowserPopupActive, setIsBrowserPopupActive] =
    useState<boolean>(false);
  const { activeLink, setActiveLink } = useActiveLinkContext();

  return (
    <div className='flex justify-between text-white rounded-md w-60 h-11 px-2 py-1.5 items-center bg-teal-500 shadow-lg shadow-teal-800/50 relative'>
      <button
        aria-label='Open'
        onClick={() => window.open(activeLink.linkRedirect, '_blank')}
        className='flex items-center gap-2'
      >
        {activeLink.svg}
        {`Install for ${activeLink.name}!`}
      </button>
      <div className='ml-2 w-0.5 h-full border bg-white'></div>
      <button
        aria-label='Open Dropdown'
        onClick={() => setIsBrowserPopupActive(!isBrowserPopupActive)}
      >
        <ChevronDownIcon className='w-8 h-8 font-thin hover:text-teal-800/50' />
      </button>

      <BrowserSelectPopup
        options={options}
        setActiveLink={setActiveLink}
        isBrowserPopupActive={isBrowserPopupActive}
        setIsBrowserPopupActive={setIsBrowserPopupActive}
      />
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
      aria-label='Select Browser'
      key={options.indexOf(i)}
      onClick={() => {
        setActiveLink(i.buttonContent);
        setIsBrowserPopupActive(!isBrowserPopupActive);
      }}
      className='flex items-center gap-2 w-full px-2 hover:bg-teal-900'
    >
      {i.buttonContent.svg}
      {i.buttonContent.name}
    </button>
  ));

  return (
    <div
      className={`w-44 py-2 rounded-md bg-teal-800 shadow-lg absolute -bottom-10 -right-4 transition-transform transform origin-center ${
        isBrowserPopupActive ? 'scale-100 delay-150' : 'scale-0'
      }`}
    >
      {items}
    </div>
  );
};
