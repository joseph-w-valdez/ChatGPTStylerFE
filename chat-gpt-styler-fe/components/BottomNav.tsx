import { HundredThreeSixStylerLogo } from '@/public/assets/logos';
import { DiscordIcon, GitHubIcon, TeamIcon } from '@/public/assets/misc_icons';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className='w-full px-6 md:px-10 py-8'>
      <div className='grid place-items-center md:grid-cols-2'>
        <div className='grid gap-2 place-items-center md:place-items-start'>
          <div className='flex items-center gap-2'>
            <HundredThreeSixStylerLogo className='w-10 h-10' />
            <h2 className='text-3xl text-teal-500 font-semibold'>
              ChatGPT Styler
            </h2>
          </div>
          <p className='text-xs'>
            ChatGPT Styler is a user interface customization tool developed by a
            group of hobbyist developers. All rights reserved. ChatGPT Styler
            utilizes OpenAI&apos;s ChatGPT model. This group is independent and
            not affiliated with OpenAI. By using ChatGPT Styler, you agree to
            the terms and conditions. The developers reserve the right to make
            updates without notice.
          </p>
        </div>
        <div className='w-full grid place-items-end'>
          <div>
            <div className='grid grid-cols-3'>
              <button
                className='grid place-items-center'
                onClick={() =>
                  window.open('https://discord.gg/CtYukeFD', '_blank')
                }
              >
                <DiscordIcon className='h-10 w-10' />
                <p className='font-medium'>Discord</p>
              </button>
              <button
                className='grid place-items-center'
                onClick={() =>
                  window.open(
                    'https://github.com/joseph-w-valdez/chatGPTStyler',
                    '_blank'
                  )
                }
              >
                <GitHubIcon className='h-10 w-10' />
                <p className='font-medium'>GitHub</p>
              </button>
              <button
                className='grid place-items-center'
                onClick={() => redirect('/developers')}
              >
                <TeamIcon className='h-10 w-10' />
                <p className='font-medium'>Our Team</p>
              </button>
            </div>
            <div className='grid grid-cols-2 place-items-center text-xs text-neutral-500 font-medium'>
              <Link href=''>Report Bugs</Link>
              <Link href=''>Release Notes</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
