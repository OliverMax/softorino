import { FC } from 'react';
import { Props } from './types.ts';

const BaseTextarea: FC<Props> = ({ className, ...props }) => {
  return (
    <>
      <textarea
        className={`
          shadow-inner
          border
          rounded
          max-h-32
          min-h-[60px]
          outline-none

          px-2.5
          py-1.5

          ${className}
        `}
        {...props}
      />
    </>
  )
};

export default BaseTextarea;
