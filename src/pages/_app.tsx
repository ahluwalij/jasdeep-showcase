import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';

/**
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
