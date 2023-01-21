import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function Landing() {
  return (
    <>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-white dark:bg-dark'>
          <div className='layout relative flex min-h-screen flex-col items-start justify-start py-12 text-center'>
            <h1 className='flex min-h-[192px] flex-col items-start text-5xl font-bold md:text-7xl lg:text-8xl'>
              <div>Jasdeep</div>
              <div>Ahluwalia</div>
            </h1>
            <h2 className='prose mt-2 flex items-start text-left text-xl dark:prose-invert md:text-3xl'>
              Fullstack Developer and with a passion for developing amazing
              things for amazing people.
            </h2>

            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink>

            <UnstyledLink
              href='https://vercel.com/ahluwalij/portfolio-by-jazz'
              className='mt-4'
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width='92'
                height='32'
                src='https://vercel.com/button'
                alt='View on Vercel'
              />
            </UnstyledLink>

            <footer className='absolute bottom-2 flex items-end gap-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://jasdeepahluwalia.com'>
                Jasdeep Ahluwalia
              </UnderlineLink>
              <p className='mt-2 text-sm'>
                <ArrowLink href='https://github.com/ahluwalij/portfolio-by-jazz'>
                  See the repository
                </ArrowLink>
              </p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
