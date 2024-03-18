'use client';

import { MediumLogo } from '@/public/assets/logos';
import { DiscordIcon, GitHubIcon, TeamIcon } from '@/public/assets/misc_icons';
import SocialLink from './SocialLink';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full px-6 md:px-10 py-8 shadow-inner shadow-gray-600'>
      <div className='grid place-items-center md:grid-cols-2 max-w-screen-2xl w-full mx-auto'>
        <div className='grid gap-2 place-items-center md:place-items-start'>
          <div className='flex items-center gap-2'>
            <MediumLogo className='w-10 4k:w-14 h-10 4k:h-14' />
            <h2 className='text-3xl 4k:text-5xl text-teal-500 font-semibold'>
              ChatGPT Styler
            </h2>
          </div>
          <p className='text-xs 4k:text-xl'>
            ChatGPT Styler is a user interface customization tool developed by a
            group of hobbyist developers. All rights reserved. ChatGPT Styler
            utilizes OpenAI&apos;s ChatGPT model. This group is independent and
            not affiliated with OpenAI. By using ChatGPT Styler, you agree to
            the terms and conditions. The developers reserve the right to make
            updates without notice.
          </p>
        </div>
        <div className='w-full grid place-items-center md:place-items-end'>
          <div>
            <div className='grid gap-2 grid-cols-3'>
              <SocialLink
                socialSrc='https://discord.gg/cD5zSZ3rea'
                socialIcon={
                  <DiscordIcon className='h-10 4k:h-14 w-10 4k:w-14' />
                }
                socialName='Discord'
                newTab={true}
              />
              <SocialLink
                socialSrc='https://github.com/joseph-w-valdez/chatGPTStyler'
                socialIcon={
                  <GitHubIcon className='h-10 4k:h-14 w-10 4k:w-14' />
                }
                socialName='GitHub'
                newTab={true}
              />
              <SocialLink
                socialSrc='/developers'
                socialIcon={<TeamIcon className='h-10 4k:h-14 w-10 4k:w-14' />}
                socialName='Our Team'
                newTab={false}
              />
            </div>
            <div className='grid grid-cols-2 place-items-center text-xs text-neutral-500 font-medium'>
              <Link
                aria-label='Open Bug Report'
                href='https://discord.gg/HVVkPbpqw4'
                target='_blank'
                className='hover:text-black'
              >
                Report Bugs
              </Link>
              <Link
                aria-label='Open Release Notes'
                href='https://discord.gg/A73aBJQr6m'
                className='hover:text-black'
              >
                Release Notes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
