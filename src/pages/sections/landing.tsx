import * as React from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function Landing() {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          color: 0xd27d2d,
          points: 9.0,
          maxDistance: 15.0,
          spacing: 20.0,
          backgroundAlpha: 0,
          THREE,
        })
      );
    }
  }, [vantaEffect]);

  return (
    <>
      <Seo templateTitle='Home' />
      <main>
        <section
          className='min-h-fit bg-white transition-all dark:bg-dark '
          ref={vantaRef}
        >
          <div className='layout relative flex min-h-screen flex-col items-start justify-start py-6 text-center sm:py-8 md:py-10 lg:py-12'>
            <h1 className='flex min-h-[192px] flex-col items-start font-bold tracking-normal text-primary dark:text-[#FAD5A5] max-[640px]:text-6xl max-[400px]:text-5xl sm:text-7xl md:text-8xl'>
              <div>Jasdeep</div>
              <div>Ahluwalia</div>
            </h1>
            <h2 className='prose flex max-w-screen-sm items-start text-left text-3xl font-semibold leading-10 tracking-wide dark:prose-invert max-[768px]:mt-60 max-[700px]:mt-52 max-[500px]:mt-44 max-[436px]:mt-32 max-[390px]:mt-12 sm:text-4xl md:mt-72 xl:mt-[27.5rem]'>
              Fullstack Developer with a passion for developing amazing things
              for amazing people.
            </h2>

            {/* <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink> */}

            <div className='mt-12 flex w-full flex-col'>
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-4xl font-semibold dark:prose-invert sm:text-5xl'
                    href='https://beta.sellerchain.com'
                  >
                    Sellerchain
                  </UnderlineLink>
                </div>
                <div className='prose w-5/6 pt-12 text-left dark:prose-invert md:w-2/5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore necessitatibus repellendus maxime quisquam
                  reprehenderit nobis voluptas adipisci asperiores deserunt
                  repellat.
                </div>
              </div>
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-4xl font-semibold dark:prose-invert sm:text-5xl'
                    href='https://beta.sellerchain.com'
                  >
                    Sellerchain
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-2xl mt-2 text-3xl dark:prose-invert sm:text-4xl'>
                    2021-2022
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:w-2/5 md:pt-12 md:prose-xl lg:prose-2xl'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iure provident corrupti ad explicabo sint, recusandae
                    tenetur commodi consectetur hic veritatis officiis sunt quis
                    aspernatur eius porro! Libero, quis voluptas incidunt
                    voluptatum quas commodi odio sapiente minus, quaerat
                    molestias quibusdam ab neque voluptates! Ullam suscipit nisi
                    tempore ab culpa nam dolor!
                  </p>
                </div>
              </div>
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-4xl font-semibold dark:prose-invert sm:text-5xl'
                    href='https://beta.sellerchain.com'
                  >
                    Sellerchain
                  </UnderlineLink>
                </div>
                <div className='prose w-5/6 pt-12 text-left dark:prose-invert md:w-2/5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore necessitatibus repellendus maxime quisquam
                  reprehenderit nobis voluptas adipisci asperiores deserunt
                  repellat.
                </div>
              </div>
            </div>

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
