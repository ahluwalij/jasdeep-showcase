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
                <h3 className='text-md flex flex-col items-start gap-1 text-left md:text-lg lg:flex-row'>
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
                  <h1 className='prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-2xl'>
                    <div>Fullstack Developer Intern</div>
                    <div>June 2022 - August 2022</div>
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:w-2/5 md:pt-12 md:prose-xl lg:prose-2xl'>
                  <h6>
                    Helped revamp existing and new applications into modern,
                    scalable projects to merchants and developer partners.
                    Proposed, wrote technical designs, documented, and
                    implemented various platform features and components for the
                    distributed UI toolkit.
                    <div className='ml-6'>
                      <li>
                        Successfully shipped a redesign of the{' '}
                        <UnderlineLink
                          className='leading-7'
                          href='https://shipmentmakerpro.com'
                        >
                          Shipment Maker Pro
                        </UnderlineLink>{' '}
                        website navigation following Material UI convention.
                        Worked with a design and other development teams to
                        efficiently provide a great user experience.
                      </li>
                      <li>
                        Led the fullstack development on an Angular .NET core
                        app, working closely with a team of senior developers
                        and product managers to ensure smooth and efficient
                        development
                      </li>
                      <li>
                        Designed and implemented efficient SQL Server database
                        solutions, enhancing app functionality by optimizing
                        data storage and retrieval.
                      </li>
                      <li>
                        Employed Modular Programming, Material Design, Angular
                        14, Git, and best practices to build a cutting-edge .NET
                        core app, contributing to the company’s overall product
                        suite and client satisfaction.
                      </li>
                      <li>
                        Maintained proactive communication with the startup’s
                        CEO, asset teams, and fellow developers for rapid and
                        efficient progress, consistently meeting project
                        milestones and delivering high-quality code.
                      </li>
                      <li>
                        Actively participated in Agile development processes,
                        including daily stand-ups, sprint planning, and
                        retrospec- tives, ensuring seamless team collaboration
                        and timely project completion
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://www.jasdeepahluwalia.com/files/sellerchain_recommendation'
                    >
                      CEO Recommendation
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
                  <h1 className='prose prose-xl mt-2 flex flex-col text-xl dark:prose-invert md:text-2xl'>
                    <div>Lead Developer</div>
                    <div>January 2021 - August 2021</div>
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:w-2/5 md:pt-12 md:prose-xl lg:prose-2xl'>
                  <h6>
                    Founded and developed a startup offering a scalable and
                    high-performance proxy service for web scraping, SEO tools,
                    and secure browsing.
                    <div className='ml-6'>
                      <li>
                        Utilized MongoDB to handle proxies and customer orders
                        on an online storefront made with React Redux and
                        Stripe.
                      </li>
                      <li>
                        Acquired IP addresses from multiple international
                        providers, ensuring a diverse pool of proxies from
                        around the world and minimizing service downtime
                      </li>
                      <li>
                        Implemented a user-friendly web interface using HTML,
                        CSS, and JavaScript, allowing clients to manage their
                        subscriptions and access their proxy credentials.
                      </li>
                      <li>
                        Managed business aspects, including marketing, sales,
                        and customer support, leading to a growing client base
                        and positive feedback
                      </li>
                      <li>
                        Ensured legal compliance with data privacy regulations
                        and usage policies, protecting both clients and the
                        company.
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
              {/* THE BOT TRADE PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert max-[393px]:w-min sm:text-5xl'
                    href='https://twitter.com/TheBotTrade'
                  >
                    The Bot Trade
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 flex flex-col text-xl dark:prose-invert md:text-3xl'>
                    <div>Administrator</div>
                    <div>January 2021 - September 2021</div>
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:w-2/5 md:pt-12 md:prose-xl lg:prose-2xl'>
                  <h6>
                    Consulted for a leading software trading and cryptocurrency
                    advisory firm, providing expert guidance to clients on
                    investment strategies, market trends, and risk management.
                    <div className='ml-6'>
                      <li>
                        Assessed client needs and delivered strategic investment
                        recommendations for development company ventures,
                        contributing to the success and growth of multiple
                        startups.
                      </li>
                      <li>
                        Directed a high-performing team of 10+ employees,
                        optimizing payroll and monitoring productivity to
                        achieve maximum efficiency and ensure consistent
                        delivery of expert advice to clients.
                      </li>
                      <li>
                        Established relationships with creators to create
                        partnerships, driving member engagement and fostering
                        long-term business growth through collaboration and
                        resource sharing.
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://twitter.com/TheBotTrade'
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
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:w-2/5 md:pt-12 md:prose-xl lg:prose-2xl'>
                  <h6>
                    Implemented algorithms that optimizes the minting process in
                    an Ethereum & Solana bot, automating the process for users
                    and reducing the time and effort required for successful
                    minting.
                    <div className='ml-6'>
                      <li>
                        Developed a multi-platform app through Electron-Forge,
                        with a fully on-chain authentication system.
                      </li>
                      <li>
                        Integrated AWS S3 a fully on-chain authentication system
                        to secure user data across Mac, Windows, and Linux,
                        ensuring a high level of security and privacy for users.
                      </li>
                      <li>
                        Crafted an aesthetic and intuitive frontend using React
                        and TailwindCSS, enhancing user experience and
                        increasing user engagement.
                      </li>
                      <li>
                        Led a successful alpha period with over 50 users,
                        gathering valuable feedback for improvements and feature
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
              {/* PLATEPLAN PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://www.plateplan.xyz/'
                  >
                    PlatePlan
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    April 2023
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:w-2/5 md:pt-12 md:prose-xl lg:prose-2xl'>
                  <h6>
                    Developed a React-based website with Redux for state
                    management to generate personalized meal plans based on
                    user's food preferences and schedule.
                    <div className='ml-6'>
                      <li>
                        Integrated Spoonacular's API using JavaScript to access
                        recipes and nutritional information; leveraged caching
                        for recent meals to reduce API calls and improve load
                        times.
                      </li>
                      <li>
                        Designed a RESTful backend server using Python and
                        Django, enabling user authentication and persistent
                        storage of saved foods in an online database.
                      </li>
                      <li>
                        Styled the website using HTML and CSS, adhering to
                        responsive design principles.
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://github.com/ahluwalij/plateplan'
                    >
                      See the repository
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
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:w-2/5 md:pt-12 md:prose-xl lg:prose-2xl'>
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
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:w-2/5 md:pt-12 md:prose-xl lg:prose-2xl'>
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
    </>
  );
}
