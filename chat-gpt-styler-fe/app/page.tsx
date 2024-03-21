import NavBar from '@/components/NavBar';
import InstallButton from '@/components/install_button/InstallButton';

export default function Home() {
  return (
    <main className='h-screen'>
      <NavBar />
      <div className='grid place-items-center h-screen  px-6 md-px-10'>
        <div className='grid justify-items-center gap-2'>
          <div className='text-center'>
            <h1 className='text-4xl font-semibold drop-shadow-lg'>
              Style Enhancer for
            </h1>
            <h1 className='text-6xl font-bold text-teal-500 drop-shadow-lg'>
              ChatGPT
            </h1>
          </div>
          <p className='text-lg font-medium'>
            Meet <span>ChatGPT Styler</span> - the ultimate Chrome extension to
            effortlessly enhance ChatGPT&apos;s look and feel!
          </p>
          <InstallButton />
          <p>Windows and MacOS</p>
        </div>
      </div>
    </main>
  );
}
