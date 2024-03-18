'use client';

import Image from 'next/image';
import { DevBiosTypes } from './interface';
import { Devs } from './data';
import SocialLink from '@/components/SocialLink';
import {
  LinkedInIcon,
  GitHubIcon,
  PortfolioIcon,
} from '@/public/assets/misc_icons';

export default function DevPage() {
  const DevBios = ({ Devs }: DevBiosTypes) => {
    const items = Devs.map((i) => (
      <div
        key={Devs.indexOf(i)}
        className={'grid place-items-center gap-8 md:grid-cols-4 lg:gap-8'}
      >
        <div
          className={`${
            (Devs.indexOf(i) + 1) % 2 === 0 && 'md:order-2'
          } md:place-self-start md:col-span-1`}
        >
          <Image
            src={i.pfpSrc}
            alt={`${i.name} Profile Picture`}
            height={250}
            width={250}
            className='rounded-full drop-shadow-2xl'
          />
        </div>

        <div
          className={`grid ${
            (Devs.indexOf(i) + 1) % 2 === 0 && 'md:order-1'
          } md:col-span-3 gap-4`}
        >
          <div className='text-center md:text-start'>
            <p className='text-4xl grid  md:block'>
              <span className='font-semibold'>{i.name},</span> {i.role}
            </p>
          </div>
          <p className='text-xl'>{i.bio}</p>
          <div className='w-full grid place-items-start'>
            <div
              className={`grid gap-4 ${
                i.portfolio ? 'grid-cols-3' : 'grid-cols-2'
              }`}
            >
              <SocialLink
                socialIcon={<LinkedInIcon className='w-10 h-10' />}
                socialName='LinkedIn'
                socialSrc={i.linkedIn}
                newTab={true}
              />
              <SocialLink
                socialIcon={<GitHubIcon className='w-10 h-10' />}
                socialName='GitHub'
                socialSrc={i.gitHub}
                newTab={true}
              />
              {i.portfolio && (
                <SocialLink
                  socialIcon={<PortfolioIcon className='w-10 h-10' />}
                  socialName='Portfolio'
                  socialSrc={i.portfolio}
                  newTab={true}
                />
              )}
            </div>
          </div>
          {Devs.indexOf(i) < Devs.length && (
            <hr className='border border-2 border-black' />
          )}
        </div>
      </div>
    ));

    return <div className='px-6 py-28 md:px-10 grid gap-10'>{items}</div>;
  };

  return (
    <main className='pt-32 grid place-items-center gap-5 max-w-screen-2xl w-full mx-auto'>
      <h1 className='text-5xl font-bold '>Meet The Team!</h1>
      <DevBios Devs={Devs} />
    </main>
  );
}
