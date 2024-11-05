import React, { useEffect, useState } from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

export default function Resume() {
  const [isFileFound, setIsFileFound] = useState(false);

  useEffect(() => {
    // Check if the resume file exists
    fetch('../assets/Jasdeep_Ahluwalia_Resume.pdf')
      .then((response) => {
        if (response.ok) {
          setIsFileFound(true);
        } else {
          setIsFileFound(false);
        }
      })
      .catch(() => setIsFileFound(false));
  }, []);

  return (
    <main className='flex h-screen flex-col'>
      <Seo templateTitle='Resume' />
      <div className='absolute hidden items-center justify-end bg-transparent pr-4 sm:right-[6.25rem] sm:top-[0.8rem] sm:flex md:right-28 md:top-[0.625rem]'>
        {isFileFound && (
          <nav>
            <ul className='flex items-center justify-between space-x-4'>
              <ButtonLink variant='dark' href='/'>
                Home
              </ButtonLink>
            </ul>
          </nav>
        )}
      </div>
      <div className='flex-grow bg-white'>
        <iframe
          src='../assets/Jasdeep_Ahluwalia_Resume.pdf'
          width='100%'
          height='100%'
          title='Resume PDF'
          className='h-full w-full'
        />
      </div>
    </main>
  );
}
