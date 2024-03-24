import { Dispatch, SetStateAction, ReactNode } from "react";

// InstallButtton.tsx
export interface InstallButtonTypes {
  options: OptionType[]
}

export interface ActiveLinkTypes {
  svg: ReactNode,
  name: string,
  linkRedirect: string
}

export interface BrowserSelectPopupTypes {
  options: OptionType[],
  setActiveLink: Dispatch<SetStateAction<any>>,
  isBrowserPopupActive: boolean,
  setIsBrowserPopupActive: Dispatch<SetStateAction<any>>
}

export interface OptionType {
  id: number,
  buttonContent: {
    svg: ReactNode,
    name: string,
    linkRedirect: string
  };
}
