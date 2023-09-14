import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <footer className='flex h-14 w-full items-center'>
      <div className='flex w-full justify-center gap-4 leading-4'>
        <div>
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='https://www.linkedin.com/in/jasdeep-ahluwalia/'>
            Jasdeep Ahluwalia.
          </UnderlineLink>
        </div>
        <div>
          <UnderlineLink href='https://www.linkedin.com/in/jasdeep-ahluwalia/'>
            LinkedIn
          </UnderlineLink>
        </div>
        <div>
          <UnderlineLink href='https://github.com/ahluwalij'>
            GitHub
          </UnderlineLink>
        </div>
        {/* <div>
          <UnderlineLink href='https://jasdeep.vercel.app/'>
            Old Website
          </UnderlineLink>
        </div> */}
        <div>
          <UnderlineLink href='/files/resume'>Resume</UnderlineLink>
        </div>
      </div>
    </footer>
  );
}
