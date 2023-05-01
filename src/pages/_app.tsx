import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import React from 'react';

import '@/styles/globals.css';
/**
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
