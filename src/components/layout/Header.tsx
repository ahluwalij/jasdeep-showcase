import { useTheme } from 'next-themes';
import * as React from 'react';

import TextButton from '@/components/buttons/TextButton';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className='z-5 sticky top-0 bg-white dark:bg-dark'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Home
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
            <TextButton
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? 'light' : 'dark'}
            </TextButton>
          </ul>
        </nav>
      </div>
    </header>
  );
}
