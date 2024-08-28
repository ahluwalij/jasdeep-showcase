import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';

import DarkModeButton from '@/components/buttons/DarkModeButton';
import PrimaryLink from '@/components/links/PrimaryLink';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='fixed top-0 z-10 w-full bg-transparent'>
      <div className='flex h-14 items-center justify-end px-8'>
        {/* Hamburger Icon */}
        <div className='md:hidden' onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
            {/* Navigation Links */}
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

      {/* Hamburger Menu Styles */}
      <style jsx>{`
        .hamburger {
          cursor: pointer;
          width: 30px;
          height: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .hamburger span {
          display: block;
          height: 3px;
          width: 100%;
          background: black;
          transition: all 0.3s ease;
        }
        .hamburger.open .hamburger-top {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.open .hamburger-middle {
          opacity: 0;
        }
        .hamburger.open .hamburger-bottom {
          transform: rotate(-45deg) translate(7px, -6px);
        }
      `}</style>
    </header>
  );
}
