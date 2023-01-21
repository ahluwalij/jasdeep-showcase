import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
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
        <Script src='/theme.js' strategy='beforeInteractive' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
