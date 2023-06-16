import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';

import DarkModeButton from '@/components/buttons/DarkModeButton';
import PrimaryLink from '@/components/links/PrimaryLink';

// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

export default function Header() {
  //* In order to properly hydrate the page, we need to wait until
  //* the UI is mounted on the client
  // eslint-disable-next-line unused-imports/no-unused-vars

  const router = useRouter();
  return (
    <header className='fixed top-0 z-10 w-full bg-transparent'>
      <div className='flex h-14 items-center justify-end px-8'>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            <PrimaryLink
              className={clsx(
                'hidden dark:text-[#FAD5A5]',
                router.pathname != '/' ? 'block' : ''
              )}
              href='/'
            >
              Home
            </PrimaryLink>
            <PrimaryLink
              className={clsx(
                'hidden dark:text-[#FAD5A5]',
                router.pathname != '/work' ? 'block' : ''
              )}
              href='/work'
            >
              Work
            </PrimaryLink>
            <PrimaryLink
              className={clsx(
                'hidden dark:text-[#FAD5A5]',
                router.pathname != '/education' ? 'block' : ''
              )}
              href='/education'
            >
              Education
            </PrimaryLink>
            <PrimaryLink
              className={clsx(
                'hidden dark:text-[#FAD5A5]',
                router.pathname != '/projects' ? 'block' : ''
              )}
              href='/projects'
            >
              Projects
            </PrimaryLink>
            <PrimaryLink
              className={clsx(
                'hidden dark:text-[#FAD5A5]',
                router.pathname != '/aiml' ? 'block' : ''
              )}
              href='/aiml'
            >
              AI/ML
            </PrimaryLink>
            <DarkModeButton />
          </ul>
        </nav>
      </div>
    </header>
  );
}
