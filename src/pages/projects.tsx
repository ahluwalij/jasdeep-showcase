import clsx from 'clsx';
import * as React from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function Projects() {
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
          scale: 2.0,
          scaleMobile: 2.0,
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
    <Layout>
      <Seo templateTitle='Work Experience' />
      <main>
        <section
          className={clsx(
            'bg-white transition-all dark:bg-dark',
            fade ? 'opacity-100' : 'opacity-0'
          )}
          ref={vantaRef}
        >
          <div className='layout relative flex min-h-screen flex-col items-start justify-start pt-6 text-center sm:pt-8 md:pt-10 lg:pt-12 '>
            <div className='mt-16 flex w-full flex-col'>
              {/* PLATEPLANNER PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://www.plateplanner.org/'
                  >
                    PlatePlanner
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    May 2023
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Developed a React-based website with Redux for state
                    management to generate personalized meal plans based on
                    user's food preferences and schedule.
                    <div className='ml-6'>
                      <li>
                        Integrated multiple APIs to access 365,000 recipes and
                        nutrition databases, implementing caching to optimize
                        load times and reduce API calls.
                      </li>
                      <li>
                        Engineered a RESTful backend server & relational
                        database using Django and MySQL, enabling users to log
                        in and store favorited meals.
                      </li>
                      <li>
                        Utilized a modern tech stack including JavaScript,
                        React, Python, SQL, JavaScript, HTML, CSS, MySQL,
                        Django, Git, and Redux to create a user-friendly
                        experience.
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://github.com/ahluwalij/plateplanner-meal-generator'
                    >
                      See the repository
                    </ArrowLink>
                  </div>
                </div>
              </div>
              {/* HASH PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert max-[365px]:w-min sm:text-5xl'
                    href='https://www.youtube.com/watch?v=v_RfGE2vPys'
                  >
                    Hash Automation
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    January 2022 - May 2022
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Developed and launched an Ethereum NFT bot that employs
                    Logistic Regression to predict if you should cancel your
                    transaction.
                    <div className='ml-6'>
                      <li>
                        Utilized Apache Kafka to process real-time transactions
                        in parallel, significantly improving the overall speed
                        of blockchain monitoring.
                      </li>
                      <li>
                        Integrated AWS S3 and an on-chain authentication system,
                        resulting in no security breaches during the alpha
                        period with over 140 users.
                      </li>
                      <li>
                        Leveraged React, Electron, and TailwindCSS to develop a
                        desktop app that is Mac, Windows, and Linux compatible.
                      </li>
                      <li>
                        Led a successful 8 month alpha period, gathering
                        valuable feedback for improvements and feature
                        enhancements.
                      </li>
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
              {/* REGEX ENGINE PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <div className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'>
                    RegEx Engine
                  </div>
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    March 2023
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Developed a Regular Expression (RegEx) Engine using OCaml,
                    leveraging Non-deterministic Finite Automaton (NFA) for
                    efficient parsing and matching.
                    <div className='ml-6'>
                      <li>
                        Implemented core regex operations such as concatenation,
                        alternation (union), and Kleene star.
                      </li>
                      <li>
                        Utilized sets for efficient NFA state management and
                        optimized performance.
                      </li>
                      <li>
                        Managed build process using Dune and provided
                        comprehensive documentation for easy integration into
                        other projects.
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://github.com/ahluwalij/RegEx-Engine'
                    >
                      See the repository
                    </ArrowLink>
                  </div>
                </div>
              </div>
              {/* ALGOTRADER PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <div className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'>
                    AlgoTrader
                  </div>
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    December 2022 - January 2023
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Created a Python script to automatically buy and sell
                    Perpetual Contracts based on both famous and custom
                    algorithms.
                    <div className='ml-6'>
                      <li>
                        Employed Numpy and Pandas to analyze 5 years of stock
                        and cryptocurrency data, extracting valuable insights
                        and identifying profitable trading patterns.
                      </li>
                      <li>
                        Built a Flask API for seamless integration into market
                        chart services, enabling users to visualize data and
                        make informed decisions.
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
    </Layout>
  );
}
