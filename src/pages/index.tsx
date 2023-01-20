import { useTheme } from 'next-themes';
import * as React from 'react';

import Layout from '@/components/layout/Layout';

import Landing from '@/pages/sections/landing';

export const UserContext = React.createContext('dark');

export default function Index() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { theme, setTheme } = useTheme();
  return (
    <Layout>
      <Landing />
    </Layout>
  );
}
