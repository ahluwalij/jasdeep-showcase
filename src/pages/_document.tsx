import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

export default function Document() {
  React.useEffect(() => {
    const threeScript = document.createElement('script');
    threeScript.setAttribute('id', 'threeScript');
    threeScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
    );
    document.getElementsByTagName('head')[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <Script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js' />
        <div className='container'>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <Script
            src='https://www.googletagmanager.com/gtag/js?id=G-E0XCDPSL1T'
            strategy='afterInteractive'
          />
          <Script id='google-analytics' strategy='afterInteractive'>
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E0XCDPSL1T');
        `}
          </Script>
        </div>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
