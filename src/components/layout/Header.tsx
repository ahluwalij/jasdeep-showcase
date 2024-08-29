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
        {/* Navigation Links - Visible on larger screens */}
        <ul className='hidden w-full items-center justify-end space-x-4 md:flex'>
          <PrimaryLink
            className={clsx(
              'dark:text-[#FAD5A5]',
              router.pathname !== '/' && 'block'
            )}
            href='/'
          >
            Home
          </PrimaryLink>
          <PrimaryLink
            className={clsx(
              'dark:text-[#FAD5A5]',
              router.pathname !== '/work' && 'block'
            )}
            href='/work'
          >
            Work
          </PrimaryLink>
          <PrimaryLink
            className={clsx(
              'dark:text-[#FAD5A5]',
              router.pathname !== '/education' && 'block'
            )}
            href='/education'
          >
            Education
          </PrimaryLink>
          <PrimaryLink
            className={clsx(
              'dark:text-[#FAD5A5]',
              router.pathname !== '/projects' && 'block'
            )}
            href='/projects'
          >
            Projects
          </PrimaryLink>
          <PrimaryLink
            className={clsx(
              'dark:text-[#FAD5A5]',
              router.pathname !== '/aiml' && 'block'
            )}
            href='/aiml'
          >
            AI/ML
          </PrimaryLink>
          <DarkModeButton />
        </ul>
        {/* Hamburger Icon */}
        <div className='relative z-30 md:hidden' onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span className='hamburger-top bg-[#D27D2D] dark:bg-[#FAD5A5]'></span>
            <span className='hamburger-middle bg-[#D27D2D] dark:bg-[#FAD5A5]'></span>
            <span className='hamburger-bottom bg-[#D27D2D] dark:bg-[#FAD5A5]'></span>
          </div>
        </div>
        {/* Navigation Menu */}
        <nav
          className={`fixed inset-0 z-20 flex flex-col items-center justify-center bg-white bg-opacity-100 transition-transform duration-500 ease-in-out dark:bg-dark md:hidden ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          } md:static md:translate-y-0 md:flex-row md:bg-transparent md:bg-opacity-0`}
        >
          <ul className='flex h-screen w-full flex-col items-center justify-center space-y-4 md:h-auto md:flex-row md:space-x-4 md:space-y-0'>
            {/* Navigation Links */}
            <PrimaryLink
              className={`dark:text-[#FAD5A5] ${
                router.pathname !== '/' ? 'block' : ''
              }`}
              href='/'
            >
              Home
            </PrimaryLink>
            <PrimaryLink
              className={`dark:text-[#FAD5A5] ${
                router.pathname !== '/work' ? 'block' : ''
              }`}
              href='/work'
            >
              Work
            </PrimaryLink>
            <PrimaryLink
              className={`dark:text-[#FAD5A5] ${
                router.pathname !== '/education' ? 'block' : ''
              }`}
              href='/education'
            >
              Education
            </PrimaryLink>
            <PrimaryLink
              className={`dark:text-[#FAD5A5] ${
                router.pathname !== '/projects' ? 'block' : ''
              }`}
              href='/projects'
            >
              Projects
            </PrimaryLink>
            <PrimaryLink
              className={`dark:text-[#FAD5A5] ${
                router.pathname !== '/aiml' ? 'block' : ''
              }`}
              href='/aiml'
            >
              AI/ML
            </PrimaryLink>
            <DarkModeButton />
          </ul>
        </nav>
      </div>

      {/* Hamburger/Close Button Styles */}
      <style jsx>{`
        .hamburger {
          cursor: pointer;
          width: 30px;
          height: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          z-index: 30;
        }
        .hamburger span {
          display: block;
          height: 3px;
          width: 100%;
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

        nav {
          transform: translateY(-100%);
          visibility: hidden;
          transition: transform 0.5s ease-in-out, visibility 0s linear 0.5s;
        }
        nav.translate-y-0 {
          transform: translateY(0);
          visibility: visible;
          transition: transform 0.5s ease-in-out, visibility 0s linear 0s;
        }
      `}</style>
    </header>
  );
}
