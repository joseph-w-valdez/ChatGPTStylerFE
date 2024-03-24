'use client';

import Image from 'next/image';
import BottomNav from '@/components/BottomNav';
import InstallButton from '@/components/install_button/InstallButton';
import { useEffect, useRef } from 'react';

export default function Home() {
  const contentRefFirst = useRef(null);
  const contentRefSecond = useRef(null);
  const contentRefThird = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-x-full');
          entry.target.classList.add('opacity-100', 'translate-x-0');
          observer.unobserve(entry.target);
        }
      });
    });

    if (contentRefThird.current) {
      observer.observe(contentRefThird.current);
    }

    if (contentRefSecond.current) {
      observer.observe(contentRefSecond.current);
    }

    if (contentRefFirst.current) {
      observer.observe(contentRefFirst.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className='h-screen max-w-full'>
      <div className='grid place-items-center h-screen '>
        <div>
          <div className='grid justify-items-center gap-4 px-6 md:px-10 pt-24 md:pt-48 pb-12 md:pb-24'>
            <div className='text-center'>
              <h1 className='text-4xl md:text-6xl font-semibold drop-shadow-lg'>
                Style Enhancer for
              </h1>
              <h1 className='text-6xl md:text-8xl font-bold text-teal-500 drop-shadow-lg'>
                ChatGPT
              </h1>
            </div>
            <p className='text-lg md:text-3xl md:w-2/5 text-center font-medium'>
              Meet{' '}
              <span className='text-xl md:text-3xl font-bold text-teal-500 drop-shadow-lg'>
                ChatGPT Styler
              </span>{' '}
              - the ultimate Chrome extension to effortlessly enhance
              ChatGPT&apos;s look and feel!
            </p>
            <InstallButton />
            <p className='text-lg'>Windows and MacOS</p>
          </div>

          <div className='w-full grid gap-10 md:grid-cols-2 px-6 md:px-10 py-12 md:py-24 bg-[#05211C] text-white'>
            <div
              ref={contentRefFirst}
              className='grid gap-2 order-2 md:py-40 opacity-0 transform translate-x-full transition-all duration-1000'
            >
              <h2 className='text-3xl font-bold md:text-5xl'>
                Fully Transform Your User Experience!
              </h2>
              <p className='text-2xl md:text-3xl'>
                Our project aims to fully revitalize the ChatGPT user experience
                by unlocking extra utility and customization options.
              </p>
            </div>
            <div className='grid gap-10'>
              <div>
                <h2 className='text-xl font-semibold pb-2 md:text-2xl'>
                  Default ChatGPT Layout
                </h2>
                <Image
                  src='/assets/demos/DARKMODE_DEFAULT.png'
                  alt='Default Demo'
                  width={500}
                  height={500}
                  className='rounded-xl'
                />
              </div>
              <div>
                <h2 className='text-xl font-semibold pb-2 md:text-2xl'>
                  With ChatGPT Styler
                </h2>
                <Image
                  src='/assets/demos/DARKMODE_STYLER.png'
                  alt='Styled Demo'
                  width={500}
                  height={500}
                  className='rounded-xl'
                />
              </div>
            </div>
          </div>

          <div className='w-full grid gap-10 md:grid-cols-2 px-6 md:px-10 py-12 md:py-24 bg-[#0A3C33] text-white'>
            <div
              ref={contentRefSecond}
              className='grid gap-10 order-2 opacity-0 transform translate-x-full transition-all duration-1000'
            >
              <div className='grid gap-2'>
                <h2 className='text-3xl font-bold md:text-5xl'>
                  Endless Customization Possibilities!
                </h2>
                <p className='text-2xl md:text-3xl'>
                  Our extension allows users to take FULL advantage of their
                  space by alllowing customization for:
                </p>
              </div>
              <div>
                <ul className='list-disc text-2xl'>
                  <li>Message bubbles with custom colors</li>
                  <li>Extra messagewidth to use full space</li>
                  <li>Message Bubble corner rounding</li>
                  <li>Extra space to type your chat prompts</li>
                  <li>
                    Adding a new button to scroll to the top of the message
                    thread
                  </li>
                  <li>Making opacity-0 default buttons more visible</li>
                </ul>
              </div>
            </div>
            <div className='grid place-items-center'>
              <Image
                src='/assets/demos/DARKMODE_EDITS_DEFAULT.gif'
                alt='Demo gif'
                width={600}
                height={600}
                className='rounded-xl'
              />
            </div>
          </div>

          <div className='w-full grid gap-10 md:grid-cols-2 px-6 md:px-10 py-12 md:py-24 bg-[#4B9C8C] text-white'>
            <div
              ref={contentRefThird}
              className='grid gap-2 order-2 md:py-40 opacity-0 transform translate-x-full transition-all duration-1000'
            >
              <h2 className='text-3xl font-bold md:text-5xl'>Do any Coding?</h2>
              <p className='text-2xl md:text-3xl'>
                Worry no longer about having to scroll to read code snippets!
                Our extension will let you preview code without any extra
                effort!
              </p>
            </div>
            <div className='grid gap-10'>
              <div>
                <h2 className='text-xl font-semibold pb-2 md:text-2xl'>
                  Default ChatGPT Layout
                </h2>
                <Image
                  src='/assets/demos/DARKMODE_CODE_DEFAULT.gif'
                  alt='Demo gif'
                  width={500}
                  height={500}
                  className='rounded-xl'
                />
              </div>
              <div>
                <h2 className='text-xl font-semibold pb-2 md:text-2xl'>
                  With ChatGPT Styler
                </h2>
                <Image
                  src='/assets/demos/DARKMODE_CODE_STYLER.gif'
                  alt='Demo gif'
                  width={500}
                  height={500}
                  className='rounded-xl'
                />
              </div>
            </div>
          </div>

          <div className='w-full p-6 md:px-10 md:py-12 bg-[#1A1A1A] text-white'>
            <div className='grid gap-4 md:gap-0 place-items-center md:grid-cols-2 '>
              <div className='md:justify-self-start'>
                <h2 className='text-lg md:text-3xl font-semibold '>
                  Ready To Download?
                </h2>
              </div>

              <div className='grid gap-2 text-center justify-center md:justify-self-end'>
                <InstallButton />
                <p>Windows and MacOS</p>
              </div>
            </div>
          </div>

          <BottomNav />
        </div>
      </div>
    </main>
  );
}
