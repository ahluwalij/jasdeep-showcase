import clsx from 'clsx';
import * as React from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function Work() {
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
            </div>
            <Footer />
          </div>
        </section>
      </main>
    </Layout>
  );
}
