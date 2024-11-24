import Link from 'next/link';
import { SmallLogo } from '@/public/assets/logos';
import ChromeInstallButton from './ChromeInstallButton';

export default function NavBar() {
  return (
    <header className='fixed top-0 left-0 z-50 w-screen grid place-items-center px-6 md:px-10 py-4 h-20 bg-gradient-to-r from-black to-teal-500'>
      <div className='grid grid-cols-2 place-content-between max-w-screen-2xl w-full mx-auto'>
        <div className='place-self-start'>
          <Link
            aria-label='Open Home'
            href='/'
            className='flex justify-between items-center'
          >
            <SmallLogo className='h-10 w-10' />
            <p className='pl-2 text-teal-500 font-semibold'>ChatGPT Styler</p>
          </Link>
        </div>
        <div className='hidden place-self-end md:grid'>
          <ChromeInstallButton />
        </div>
      </div>
    </header>
  );
}
