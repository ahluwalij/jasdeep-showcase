import clsx from 'clsx';
import * as React from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import Footer from '@/components/layout/Footer';
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
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          color: 0xd27d2d,
          points: 9.0,
          maxDistance: 15.0,
          spacing: 20.0,
          backgroundAlpha: 0,
          scale: 1.0,
          scaleMobile: 1.0,
          THREE,
        })
      );
    }
    handleMenuClick();
  }, [vantaEffect]);

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [popCard, setPopCard] = React.useState('hidden');
  const [fade, setFade] = React.useState(false);

  const handleMenuClick = () => {
    setPopCard('inline-block');
    setFade(true);
  };
  //
  // async function getRepoClones(): Promise<number> {
  //   const url =
  //     'https://api.github.com/repos/ahluwalij/jasdeep-showcase/traffic/clones';
  //   const headers = new Headers({
  //     Accept: 'application/vnd.github+json',
  //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  //     'X-GitHub-Api-Version': '2022-11-28',
  //   });

  //   try {
  //     const response = await fetch(url, { method: 'GET', headers });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     return data.count;
  //   } catch (error) {
  //     // console.error('Error fetching repository clones:', error);
  //     return 0;
  //   }
  // }

  // getRepoClones().then((clones) => {
  //   const clonesEl = document.getElementById('clones');
  //   if (clonesEl != null) clonesEl.innerHTML = clones.toString();
  //   // console.log(`Number of clones: ${clones}`);
  // });

  return (
    <>
      <Seo templateTitle='Home' />
      <main>
        <section
          className={clsx(
            'bg-white transition-all dark:bg-dark',
            fade ? 'opacity-100' : 'opacity-0'
          )}
          ref={vantaRef}
        >
          <div className='layout relative flex min-h-screen flex-col items-start justify-start pt-6 text-center sm:pt-8 md:pt-10 lg:pt-12 '>
            <div
              className='relative block translate-y-12 transform text-6xl font-black transition-all duration-500 ease-out'
              data-replace='{ "translate-y-12": "translate-y-0" }'
            >
              <h1 className='flex min-h-[192px] flex-col items-start font-bold tracking-normal text-primary dark:text-[#FAD5A5] max-[640px]:text-6xl max-[400px]:text-5xl sm:text-7xl md:text-8xl'>
                <div>Jasdeep</div>
                <div>Ahluwalia</div>
                <div className='text-md flex flex-col items-start gap-1 text-left md:text-lg'>
                  <div className='flex flex-col gap-1 lg:flex-row'>
                    <h3>How did I make this?</h3>
                    <h3>
                      Check out the{' '}
                      <UnderlineLink
                        className='font-bold text-slate-700 dark:text-gray-300'
                        href='https://github.com/ahluwalij/jasdeep-showcase'
                      >
                        source code
                      </UnderlineLink>{' '}
                      on my{' '}
                      <ArrowLink
                        className='font-bold text-slate-700 dark:text-gray-300'
                        href='https://github.com/ahluwalij'
                      >
                        GitHub
                      </ArrowLink>
                    </h3>
                  </div>
                  {/* <h3 className='flex flex-wrap gap-1'>
                    With
                    <div
                      id='clones'
                      className='font-bold text-slate-700 dark:text-gray-300'
                    >
                      ...
                    </div>
                    clones and
                    <div
                      id='views'
                      className='font-bold text-slate-700 dark:text-gray-300'
                    >
                      ...
                    </div>
                    views in the last 14 days
                  </h3> */}
                </div>
              </h1>

              {/* <h2 className='prose flex max-w-screen-sm items-start text-left text-3xl font-semibold leading-10 tracking-wide dark:prose-invert max-[768px]:mt-60 max-[700px]:mt-52 max-[500px]:mt-44 max-[436px]:mt-32 max-[390px]:mt-12 sm:text-4xl md:mt-72 xl:mt-[27.5rem]'>
                Fullstack Developer with a passion for developing amazing things
                for amazing people.
              </h2> */}
            </div>

            <div className='mt-auto flex w-full justify-center'>
              <Footer />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
