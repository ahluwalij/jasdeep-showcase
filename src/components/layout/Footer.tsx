import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <footer className='flex h-14 w-full items-center'>
      <div className='flex w-full justify-center leading-4'>
        <div className='mr-1'>
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='https://jasdeepahluwalia.com'>
            Jasdeep Ahluwalia
          </UnderlineLink>
        </div>
      </div>
    </footer>
  );
}
