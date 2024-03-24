import Image from 'next/image';
import { DevsTypes, DevBiosTypes } from './interface';
import {
  LinkedInIcon,
  GitHubIcon,
  PortfolioIcon,
} from '@/public/assets/misc_icons';

const Devs: DevsTypes[] = [
  {
    key: 1,
    pfpSrc: '/assets/developers_pfps/Joseph_Valdez.png',
    name: 'Joseph Valdez',
    role: 'Product Manager/Lead Developer',
    bio: 'Current Software Engineer at Wildfire Systems Inc. I love to build cool things that solve everyday problems and tinker with custom applications, extensions, and scripts for fun. I also love to play fighting games and make both digital and physical art!',
    linkedIn: 'https://www.linkedin.com/in/joseph-w-valdez/',
    gitHub: 'https://josephvaldez.vercel.app/',
    portfolio: 'https://josephvaldez.vercel.app/',
  },
  {
    key: 2,
    pfpSrc: '/assets/developers_pfps/Kevin_Lay.png',
    name: 'Kevin Lay',
    role: 'Lead Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    linkedIn: 'https://www.linkedin.com/in/laykevin/',
    gitHub: 'https://github.com/laykevin',
  },
  {
    key: 3,
    pfpSrc: '/assets/developers_pfps/Matt_Cha.png',
    name: 'Mathew Cha',
    role: 'Developer',
    bio: 'Hi! My name is Matthew Cha, and I am a software engineer with a Bachelor&#39;s degree in Business. I have a strong passion for writing impactful software that improves and benefits the lives of other people and I enjoy collaborating with others to learn, contribute, and meet the end goal!',
    linkedIn: 'https://www.linkedin.com/in/matthew-cha/',
    gitHub: 'https://github.com/matt-cha',
    portfolio: 'https://matthewcha.vercel.app/',
  },
  {
    key: 4,
    pfpSrc: '/assets/developers_pfps/Daniel_Perez.png',
    name: 'Daniel Perez',
    role: 'Quality Assurance',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    linkedIn: 'https://www.linkedin.com/in/daniel-f-perez/',
    gitHub: 'https://github.com/Daniel-PerezF',
    portfolio: 'https://www.danielperez.io/',
  },
  {
    key: 5,
    pfpSrc: '/assets/developers_pfps/Lamberto_Martinez.png',
    name: 'Lamberto Martinez',
    role: 'Developer',
    bio: 'After leaving my previous position, I embarked on a journey to enhance my skills and pursue my dream career. I&#39;ve refocused my efforts on becoming a software engineer, honing my skills in JavaScript, HTML, and CSS. My ultimate goal is to excel as a Software Engineer.',
    linkedIn: 'https://www.linkedin.com/in/lambpato/',
    gitHub: 'https://github.com/Lambpato/Lambpato',
    portfolio: 'lamberto-martinez.vercel.app/',
  },
];

export default function Page() {
  <main className='max-w-full'>
    <h1>Meet The Team!</h1>
    <DevBios Devs={Devs} />
  </main>;
}

const DevBios = ({ Devs }: DevBiosTypes) => {
  const items = Devs.map((i) => (
    <div key={i.key}>
      <div>
        <Image
          src={i.pfpSrc}
          alt={`${i.name} Profile Picture`}
          height={100}
          width={100}
        />
      </div>
      <div>
        <div>
          <h3>{i.name},</h3>
          <p>{i.role}</p>
        </div>
        <p>{i.bio}</p>
        <div>
          <button onClick={() => window.open(i.linkedIn, '_blank')}>
            <LinkedInIcon />
            LinkedIn
          </button>
          <button onClick={() => window.open(i.gitHub, '_blank')}>
            <GitHubIcon />
            GitHub
          </button>
          {i.portfolio && (
            <button onClick={() => window.open(i.portfolio, '_blank')}>
              <PortfolioIcon />
              Portfolio
            </button>
          )}
        </div>
      </div>
    </div>
  ));

  return <div>{items}</div>;
};
