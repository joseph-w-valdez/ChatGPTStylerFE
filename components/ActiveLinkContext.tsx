'use client';

import React, { createContext, useContext, useState } from 'react';
import { ChromeIcon } from '@/public/assets/misc_icons';

interface ActiveLinkTypes {
  svg: JSX.Element;
  name: string;
  linkRedirect: string;
}

interface ContextValueTypes {
  activeLink: ActiveLinkTypes;
  setActiveLink: React.Dispatch<React.SetStateAction<ActiveLinkTypes>>;
}

const ActiveLinkContext = createContext<ContextValueTypes>({
  activeLink: {
    svg: <ChromeIcon className='h-8 w-8 hover:text-teal-800/50' />,
    name: 'Chrome',
    linkRedirect:
      'https://chromewebstore.google.com/detail/chatgpt-styler/mmfefeellkogplnodhfnggcpkomlaapj?hl=en&authuser=0&pli=1',
  },
  setActiveLink: () => {},
});

export const useActiveLinkContext = () => useContext(ActiveLinkContext);

export const ActiveLinkProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeLink, setActiveLink] = useState({
    svg: <ChromeIcon />,
    name: 'Chrome',
    linkRedirect:
      'https://chromewebstore.google.com/detail/chatgpt-styler/mmfefeellkogplnodhfnggcpkomlaapj?hl=en&authuser=0&pli=1',
  });

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};
