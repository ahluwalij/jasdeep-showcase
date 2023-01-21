import * as React from 'react';

import DarkModeButton from '@/components/buttons/DarkModeButton';

// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

export default function Header() {
  //* In order to properly hydrate the page, we need to wait until
  //* the UI is mounted on the client
  // eslint-disable-next-line unused-imports/no-unused-vars

  return (
    <header className='fixed top-0 z-10 w-full bg-transparent'>
      <div className='flex h-14 items-center justify-end px-8'>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            <DarkModeButton />
          </ul>
        </nav>
      </div>
    </header>
  );
}
