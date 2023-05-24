import * as React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';

export default function Resume() {
  return (
    <div className='h-fit overflow-visible'>
      <object
        data='../assets/Jasdeep_Ahluwalia_Resume.pdf'
        type='application/pdf'
        width='100%'
        height='100%'
        className='h-screen'
      >
        <div className='flex h-screen items-center justify-center text-center'>
          <div>
            It seems like my PDF resume isn't loading for you(most likely
            mobile). However, feel free to go through my{' '}
            <PrimaryLink href='/work'>Work Experience</PrimaryLink> and my{' '}
            <PrimaryLink href='/projects'>Projects</PrimaryLink> so you can
            still get to know me!
          </div>
        </div>
      </object>
    </div>
  );
}
