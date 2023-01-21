import { useTheme } from 'next-themes';
import * as React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

import IconButton from '@/components/buttons/IconButton';
import TextButton from '@/components/buttons/TextButton';

export default function DarkModeButton() {
  //* In order to properly hydrate the page, we need to wait until
  //* the UI is mounted on the client
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { theme, setTheme } = useTheme();

  return (
    <TextButton
      onClick={() =>
        setTheme(
          document.querySelector('html')?.classList.contains('dark')
            ? 'light'
            : 'dark'
        )
      }
    >
      <div className='text-2xl'>
        <IconButton className='hidden dark:flex' variant='ghost' icon={HiSun} />
        <IconButton
          className='flex dark:hidden'
          variant='ghost'
          icon={HiMoon}
        />
      </div>
    </TextButton>
  );
}
