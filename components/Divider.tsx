import ChromeInstallButton from './ChromeInstallButton';

export default function Divider() {
  return (
    <section className='w-full p-6 md:px-10 md:py-12 bg-[#1A1A1A] text-white shadow-inner shadow-gray-700'>
      <div className='grid gap-4 md:gap-0 place-items-center md:grid-cols-2 max-w-screen-2xl w-full mx-auto'>
        <div className='md:justify-self-start'>
          <h2 className='grid gap-1 text-center text-lg font-semibold md:hidden'>
            <span className='text-xl'>Ready to Download?</span> Switch to
            Desktop to Download!
          </h2>
          <h2 className='hidden md:flex text-lg md:text-3xl 4k:text-5xl font-semibold'>
            Ready To Download?
          </h2>
        </div>
        <div className='hidden md:grid gap-2 text-center justify-center md:justify-self-end'>
          <ChromeInstallButton />
          <p className='4k:text-2xl'>Windows and MacOS</p>
        </div>
      </div>
    </section>
  );
}
