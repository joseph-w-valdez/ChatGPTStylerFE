import InstallButton from './install_button/InstallButton';
import { FourtyFiveStylerLogo } from '@/public/assets/logos';

export default function NavBar() {
  return (
    <div className='flex fixed top-0 left-0 z-50 w-screen justify-start px-6 md:px-10 py-4 min-h-[64px] bg-gradient-to-r from-black to-teal-500 md:justify-between'>
      <div className='flex justify-between items-center'>
        <FourtyFiveStylerLogo className='h-10 w-10' />
        <p className='pl-2 text-teal-500 font-semibold'>ChatGPT Styler</p>
      </div>
      <div className='hidden md:flex'>
        <InstallButton />
      </div>
    </div>
  );
}
