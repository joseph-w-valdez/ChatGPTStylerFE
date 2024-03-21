import { Dispatch, SetStateAction } from "react";

// InstallButtton.tsx
export interface InstallButtonTypes {
  options: OptionType[]
}

export interface ActiveLinkTypes {
  src: string,
  alt: string,
  name: string,
  linkRedirect: string
}

export interface BrowserSelectPopupTypes {
  options: OptionType[]
  setActiveLink: Dispatch<SetStateAction<any>>
  isBrowserPopupActive: boolean,
  setIsBrowserPopupActive: Dispatch<SetStateAction<any>>
}

export interface OptionType {
  id: number;
  buttonContent: {
    src: string;
    alt: string;
    name: string;
    linkRedirect: string
  };
}
