import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Footer() {
  return (
    <footer>
      <div className='layout flex h-14 items-center justify-between border-t'>
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
          </ul>
        </nav>
      </div>
    </footer>
  );
}
