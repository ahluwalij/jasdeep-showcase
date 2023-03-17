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
          color: 0xd27d2d,
          points: 9.0,
          maxDistance: 15.0,
          spacing: 20.0,
          backgroundAlpha: 0,
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
                <h3 className='text-md flex items-start gap-1 md:text-lg'>
                  How did I make this? Check out the{' '}
                  <UnderlineLink
                    className='font-bold text-slate-700 dark:text-gray-300'
                    href='https://github.com/ahluwalij/portfolio-by-jazz'
                  >
                    source code
                  </UnderlineLink>
                  on my{' '}
                  <UnderlineLink
                    className='font-bold text-slate-700 dark:text-gray-300'
                    href='https://github.com/ahluwalij'
                  >
                    GitHub
                  </UnderlineLink>
                </h3>
              </h1>

              <h2 className='prose flex max-w-screen-sm items-start text-left text-3xl font-semibold leading-10 tracking-wide dark:prose-invert max-[768px]:mt-60 max-[700px]:mt-52 max-[500px]:mt-44 max-[436px]:mt-32 max-[390px]:mt-12 sm:text-4xl md:mt-72 xl:mt-[27.5rem]'>
                Fullstack Developer with a passion for developing amazing things
                for amazing people.
              </h2>
            </div>

            {/* <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink> */}

            <div className='mt-36 flex w-full flex-col'>
              {/* SELLERCHAIN PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://beta.sellerchain.com'
                  >
                    Sellerchain
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-4 text-xl dark:prose-invert md:text-3xl'>
                    June 2022 - August 2022
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:w-2/5 md:pt-12 md:prose-xl lg:prose-2xl'>
                  <h6>
                    Helped revamp existing and new applications into modern,
                    scalable projects to merchants and developer partners.
                    Proposed, wrote technical designs, documented, and
                    implemented various platform features and components for the
                    distributed UI toolkit. Successfully shipped a redesign of
                    the{' '}
                    <UnderlineLink
                      className='leading-7'
                      href='https://shipmentmakerpro.com'
                    >
                      Shipment Maker Pro
                    </UnderlineLink>{' '}
                    website navigation following Material UI convention. Worked
                    with a design and other development teams to efficiently
                    provide a great user experience.
                    <br />
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://www.jasdeepahluwalia.com/experience/sellerchain'
                    >
                      Learn More
                    </ArrowLink>
                  </div>
                </div>
              </div>
              {/* PROXYFARM PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://proxy-farm.com'
                  >
                    Proxyfarm
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    January 2021 - August 2021
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:w-2/5 md:pt-12 md:prose-xl lg:prose-2xl'>
                  <h6>
                    Premium proxy service that utilized advanced configurations
                    of Squid Proxy.
                    <div className='ml-6'>
                      <li>
                        Utilized MongoDB to handle proxies and customer orders
                        on an online storefront made with React Redux and
                        Stripe.
                      </li>
                      <li>
                        Developed a user dashboard on our website, Worked with
                        IP providers locally and internationally.
                      </li>
                      <li>
                        Set up and automated Squid Proxy Servers: IP masking, IP
                        forwarding, Traffic Filtering, User:Pass authentication,
                        Log Storage and Deletion, Residential IP pool.
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://www.jasdeepahluwalia.com/experience/proxyfarm'
                    >
                      Learn More
                    </ArrowLink>
                  </div>
                </div>
              </div>
              {/* HASH PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://www.youtube.com/watch?v=v_RfGE2vPys'
                  >
                    Hash
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    January 2022 - May 2022
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:w-2/5 md:pt-12 md:prose-xl lg:prose-2xl'>
                  <h6>
                    Electron framework built blockchain minting bot focused
                    primarily on Ethereum and Solana.
                    <div className='ml-6'>
                      <li>
                        Developed a multi-platform app through Electron-Forge,
                        with a fully on-chain authentication system.
                      </li>
                      <li>
                        Built the frontend using using React, TailwindCSS,
                        Electron.
                      </li>
                      <li>
                        Utilized Asarmor and Bytenode for App Security and Code
                        Obfuscation - Stored Persistent and Non-Persistent app
                        data for saving account login and app configurations and
                        utilized AWS S3 for storing token metadata.
                      </li>
                      <li>Successful Alpha Period with over 50 users.</li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://www.jasdeepahluwalia.com/projects/hash'
                    >
                      Learn More
                    </ArrowLink>
                  </div>
                </div>
              </div>
              {/* ALGOTRADER PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://github.com/ahluwalij/AlgoTrader'
                  >
                    AlgoTrader
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    January 2023
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:w-2/5 md:pt-12 md:prose-xl lg:prose-2xl'>
                  <h6>
                    Created a Python script to automatically buy and sell
                    Perpetual Contracts based on both famous and custom
                    algorithms.
                    <div className='ml-6'>
                      <li>
                        Built an API to integrate the script into any market
                        chart service.
                      </li>
                      <li>
                        Created with Python, Pandas, CCXT, TradingView API, and
                        Flask
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://github.com/ahluwalij/AlgoTrader'
                    >
                      See the repository
                    </ArrowLink>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
}
