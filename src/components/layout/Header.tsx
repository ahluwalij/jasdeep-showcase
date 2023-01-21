import { useTheme } from 'next-themes';
import * as React from 'react';

import TextButton from '@/components/buttons/TextButton';

// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

export default function Header() {
  //* In order to properly hydrate the page, we need to wait until
  //* the UI is mounted on the client
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className='fixed top-0 z-10 w-full bg-transparent'>
      <div className='flex h-14 items-center justify-end px-8'>
        {/* <UnstyledLink href='/' className='font-bold hover:text-primary'>
          Home
        </UnstyledLink> */}
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {/* {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))} */}
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
