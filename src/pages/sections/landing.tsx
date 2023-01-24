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
          className='min-h-fit bg-white transition-all dark:bg-dark'
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
              {/* SELLERCHAIN PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-5xl font-semibold dark:prose-invert'
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
                  <p>
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
                  </p>
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
                    className='leading-1 prose text-left text-5xl font-semibold dark:prose-invert'
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
                  <p>
                    Premium proxy service that utilized advanced configurations
                    of Squid Proxy.
                    <ul>
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
                    </ul>
                  </p>
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
              {/* HASH PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-5xl font-semibold dark:prose-invert'
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
                  <p>
                    Electron framework built blockchain minting bot focused
                    primarily on Ethereum and Solana.
                    <ul>
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
                    </ul>
                  </p>
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
              {/* ALGOTRADER PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-5xl font-semibold dark:prose-invert'
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
                  <p>
                    Created a Python script to automatically buy and sell
                    Perpetual Contracts based on both famous and custom
                    algorithms.
                    <ul>
                      <li>
                        Built an API to integrate the script into any market
                        chart service.
                      </li>
                      <li>
                        Created with Python, Pandas, CCXT, TradingView API, and
                        Flask
                      </li>
                    </ul>
                  </p>
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
