import clsx from 'clsx';
import * as React from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function AIML() {
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
      <Seo templateTitle='Data Science Projects' />
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
              {/* CO2 EMISSIONS PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://github.com/ahluwalij/Machine-Learning-CO2-Emission-Predictive-Analysis'
                  >
                    Application of ML
                    <br />
                    on CO2 Emissions
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    May 2023
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Utilized Pandas, NumPy, Seaborn, and SciKit to construct a
                    machine learning predictive model for vehicle CO2 emissions.
                    <div className='ml-6'>
                      <li>
                        Analyzed the dataset to identify that engine size and
                        fuel consumption exert the most significant influence on
                        CO2 emissions, with a correlation coefficient of 0.59
                        and 0.94 respectively.
                      </li>
                      <li>
                        Constructed a predictive machine learning model using
                        linear regression algorithms, achieving an R-squared
                        value of 0.91 in predicting vehicle CO2 emissions.
                      </li>
                      <li>
                        Visualized data trends through Seaborn heatmap
                        visualizations to better understand relationships
                        between CO2 emissions and different features such as
                        vehicle class, transmission, and fuel type.
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://www.jasdeepahluwalia.com/files/notebooks/co2_emission'
                    >
                      See the notebook
                    </ArrowLink>
                  </div>
                </div>
              </div>
              {/* MALARIA PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert max-[365px]:w-min sm:text-5xl'
                    href='https://github.com/ahluwalij/Malaria-in-Blood-AI-Detection'
                  >
                    AI Malaria
                    <br />
                    Image Detection
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    Dec 2022
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Utilized Convolutional Neural Networks (CNNs) for Malaria
                    diagnosis via cell image classification. A comprehensive
                    pipeline from data acquisition to model evaluation,
                    achieving an impressive 85% accuracy.
                    <div className='ml-6'>
                      <li>
                        Developed a comprehensive pipeline from data acquisition
                        and preprocessing to training and evaluating a deep
                        learning model, resulting in an 85% accuracy rate on
                        unseen test data.
                      </li>
                      <li>
                        Implemented shuffling and batch normalization during the
                        preprocessing phase, improving model performance by 10%
                        compared to previous attempts.
                      </li>
                      <li>
                        Optimized hyperparameters of the CNN using TensorFlow
                        and Keras, resulting in a reduction of false negatives
                        by 20%.
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://www.jasdeepahluwalia.com/files/notebooks/malaria_detection'
                    >
                      See the notebook
                    </ArrowLink>
                  </div>
                </div>
              </div>
              {/* MALARIA PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert max-[365px]:w-min sm:text-5xl'
                    href='https://github.com/ahluwalij/Moneyball-Data-Analytics'
                  >
                    Applied Data Science
                    <br />
                    on Baseball Players
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    Nov 2022
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Applying data wrangling and exploratory data analysis skills
                    to baseball data like the movie Moneyball.
                    <div className='ml-6'>
                      <li>
                        Analyzed 25 years of Major League Baseball data using
                        advanced data wrangling and exploratory data analysis
                        techniques to gain insights into team spending
                        efficiencies, resulting in a comprehensive report
                        highlighting the Oakland A's "Moneyball" strategy.
                      </li>
                      <li>
                        Utilized linear regression models to calculate expected
                        win percentage based on standardized payroll for each
                        team, then determined each team's spending efficiency as
                        the ratio of their actual win percentage to their
                        expected win percentage.
                      </li>
                      <li>
                        Created scatter plots and other visualizations to
                        clearly show the positive correlation between a team's
                        payroll and its winning percentage, as well as highlight
                        the importance of spending efficiency in achieving
                        success.
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://www.jasdeepahluwalia.com/files/notebooks/moneyballn'
                    >
                      See the notebook
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
