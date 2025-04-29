import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  EmailIcon,
} from '@/components/SocialIcons'
import logoColumbia from '@/images/logos/columbia.jpg'
import logoTlservices from '@/images/logos/tlservices.png'
import logoAidSupply from '@/images/logos/aidsupply.png'
import logoEmsa from '@/images/logos/emsa.png'
import logoGlasshouse from '@/images/logos/glasshouse.png'
import logoArmy from '@/images/logos/army.png'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 4.75 10.75 8m0 0-3.5 3.25M10.75 8h-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, children, ...props }) {
  return (
    <Link className="group -m-1 p-1 flex items-center" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      {children && (
        <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200">
          {children}
        </span>
      )}
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center ">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Columbia University',
      title: 'Technical Instructor',
      logo: logoColumbia,
      start: '2025',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'TL Services',
      title: 'Software Developer',
      logo: logoTlservices,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Aid Supply',
      title: 'Software Developer',
      logo: logoAidSupply,
      start: '2024',
      end: '2023',
    },
    {
      company: 'Emergency Medical Services Authority',
      title: 'Travel Logistics Coordinator',
      logo: logoEmsa,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Glass House',
      title: 'Operations Coordinator',
      logo: logoGlasshouse,
      start: '2013',
      end: '2019',
    },
    {
      company: 'United States Army',
      title: 'Signal Support Systems Specialist',
      logo: logoArmy,
      start: '2009',
      end: '2013',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="https://docs.google.com/document/d/e/2PACX-1vRSqfs03GF2KBIpJa5BBh3lEwCvjCx9t6I9EMBAiZy1KTh2JYsUOZmQWgSq7HRPPRmbySXBB2A-OOIz/pub" target="_noblank" rel="noopener noreferrer" variant="secondary" className="group mt-6 w-full">
        Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  const images = [
    {
      src: 'https://github.com/Topher2014/PortfolioImages/blob/main/images/photos/1.jpg?raw=true', 
      alt: 'Washington scene'
    },
    {
      src: 'https://github.com/Topher2014/PortfolioImages/blob/main/images/photos/2.jpg?raw=true', 
      alt: 'Huskies'
    },
    {
      src: 'https://github.com/Topher2014/PortfolioImages/blob/main/images/photos/3.jpg?raw=true', 
      alt: 'Portrait photo'
    },
    {
      src: 'https://github.com/Topher2014/PortfolioImages/blob/main/images/photos/4.jpg?raw=true', 
      alt: 'Keyboard'
    },
    {
      src: 'https://github.com/Topher2014/PortfolioImages/blob/main/images/photos/5.jpg?raw=true', 
      alt: 'Glacier'
    }
  ];
  
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              width={288}  
              height={320}
              quality={90}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I am a results-driven Full Stack Software Developer with expertise in NextJS, ExpressJS, PostgreSQL and RESTful APIs, specializing in creating robust applications that seamlessly integrate across web and mobile platforms. My experience ranges from architecting music streaming platforms and e-commerce solutions to volunteering for humanitarian aid logistics in Ukraine, showcasing my commitment to leveraging technology for meaningful impact. With a military background as a Signal Support Systems Specialist and formal education from Flatiron School, I bring a unique blend of technical discipline and creative problem-solving to every project. I excel at translating complex business requirements into elegant technical solutions, focusing on performance, security, and scalability while collaborating effectively across diverse teams. Even during my personal time, I am immersed in code, constantly exploring new technologies and building side projects that fuel my passion for development while sharpening the skills I bring to every professional engagement.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/Topher2014"
              target="_noblank"
              rel="noopener noreferrer"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/topherludlow/"
              target="_noblank"
              rel="noopener noreferrer"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="mailto:topherludlow@protonmail.com"
              aria-label="Send an email"
              icon={EmailIcon}
            >
              topherludlow@protonmail.com
            </SocialLink>
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="flex justify-center items-center">
          <div className="w-4/5">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
