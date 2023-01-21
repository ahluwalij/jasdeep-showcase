import * as React from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function Landing() {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          backgroundAlpha: 0,
          THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) setVantaEffect(0);
    };
  }, [vantaEffect]);
  return (
    <>
      <Seo templateTitle='Home' />
      <main>
        <section
          className='bg-white transition-all dark:bg-dark'
          ref={vantaRef}
        >
          <div className='layout relative flex min-h-screen flex-col items-start justify-start py-6 text-center  sm:py-8 md:py-10 lg:py-12'>
            <h1 className='flex min-h-[192px] flex-col items-start font-bold tracking-normal text-primary dark:text-[#FAD5A5] max-[640px]:text-6xl max-[400px]:text-5xl sm:text-7xl md:text-8xl'>
              <div>Jasdeep</div>
              <div>Ahluwalia</div>
            </h1>
            <h2 className='prose flex max-w-screen-sm items-start text-left text-3xl font-semibold leading-normal tracking-wide dark:prose-invert max-[768px]:mt-60 max-[700px]:mt-52 max-[500px]:mt-44 max-[436px]:mt-32 max-[390px]:mt-12 sm:text-4xl md:mt-72 xl:mt-96'>
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
