import { useTheme } from 'next-themes';
import * as React from 'react';
import { HiMoon } from 'react-icons/hi';
import { RiLightbulbFlashLine } from 'react-icons/ri';

import IconButton from '@/components/buttons/IconButton';

export default function DarkModeButton() {
  //* In order to properly hydrate the page, we need to wait until
  //* the UI is mounted on the client
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() =>
        setTheme(
          document.querySelector('html')?.classList.contains('dark')
            ? 'light'
            : 'dark'
        )
      }
    >
      <div className='text-2xl'>
        <IconButton
          className='hidden animate-flicker text-white dark:flex'
          variant='ghost'
          icon={RiLightbulbFlashLine}
        />
        <IconButton
          className='flex animate-shimmer dark:hidden'
          variant='ghost'
          icon={HiMoon}
        />
      </div>
    </div>
  );
}
