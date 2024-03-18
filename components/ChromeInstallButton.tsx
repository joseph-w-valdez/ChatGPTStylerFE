'use client';

import { ChromeIcon } from '@/public/assets/misc_icons';

export default function ChromeInstallButton() {
  return (
    <button
      aria-label='Open'
      onClick={() =>
        window.open(
          'https://chromewebstore.google.com/detail/chatgpt-styler/mmfefeellkogplnodhfnggcpkomlaapj?hl=en&authuser=0&pli=1',
          '_blank'
        )
      }
      className='flex items-center gap-2 text-white bg-teal-500 h-11 p-4 rounded-md text-lg font-medium shadow-lg shadow-teal-800/50 hover:bg-teal-600'
    >
      <ChromeIcon />
      Install for Chrome!
    </button>
  );
}
