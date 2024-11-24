import { ReactNode } from 'react';
import Link from 'next/link';

interface SocialLinkTypes {
  socialIcon: ReactNode;
  socialName: string;
  socialSrc: string;
  newTab: boolean;
}

export default function SocialLink({
  socialIcon,
  socialName,
  socialSrc,
  newTab,
}: SocialLinkTypes) {
  return (
    <Link
      aria-label={`Open ${socialName}`}
      href={socialSrc}
      target={newTab ? '_blank' : '_self'}
      className='grid place-items-center hover:bg-[#d2f0e6] hover:border-[3px] hover:border-[#14b8a6] hover:rounded-md hover:text-[#14b8a6] h-[72px] w-[80px]'
    >
      {socialIcon}
      <p className='font-medium'>{socialName}</p>
    </Link>
  );
}
