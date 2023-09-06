import { makeHTMLClasses } from '@/utils';

import type { FC, PropsWithChildren } from 'react';
import type { Props } from './types.ts';

const BaseButton: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  bgColor = 'sky',
  className = '',
}) => {
  const BG_COLORS: Record<NonNullable<Props['bgColor']>, string> = {
    sky: 'bg-sky-400 hover:bg-sky-500 active:bg-sky-600',
    red: 'bg-red-400 hover:bg-red-500 active:bg-red-600',
  };

  return (
    <button
      className={makeHTMLClasses([
        'shadow rounded transition-colors duration-300 text-white',
        BG_COLORS[bgColor],
        className,
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BaseButton;
