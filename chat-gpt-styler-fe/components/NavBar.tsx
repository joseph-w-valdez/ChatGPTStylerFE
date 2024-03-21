import Image from 'next/image';
import InstallButton from './install_button/InstallButton';

export default function NavBar() {
  return (
    <div className='flex fixed w-full justify-start px-6 md:px-10 py-4  bg-gradient-to-r from-black to-teal-500 md: justify-between'>
      <div className='flex justify-between items-center'>
        <Image
          src='/assets/logos/45x45_STYLER_LOGO.svg'
          alt='ChatGPT Styler Logo'
          width={45}
          height={45}
        />
        <p className='pl-2 text-teal-500 font-semibold'>ChatGPT Styler</p>
      </div>
      <div className='hidden md:flex'>
        <InstallButton />
      </div>
    </div>
  );
}
