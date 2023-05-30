import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import * as React from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';

import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

<Viewer fileUrl='../assets/Jasdeep_Ahluwalia_Sellerchain_Recommendation.pdf' />;

export default function Resume() {
  return (
    <main>
      <Seo templateTitle='Resume' />
      <header className='fixed top-0 z-10 w-full bg-transparent'>
        <div className='flex h-14 items-center justify-end pr-4'>
          <nav>
            <ul className='flex items-center justify-between space-x-4'>
              <ButtonLink variant='dark' href='/'>
                Home
              </ButtonLink>
            </ul>
          </nav>
        </div>
      </header>
      <div className='bg-white py-10'>
        <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
          <Viewer fileUrl='../assets/Jasdeep_Ahluwalia_Sellerchain_Recommendation.pdf' />
        </Worker>
      </div>
    </main>
  );
}
