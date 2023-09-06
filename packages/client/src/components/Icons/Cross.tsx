import { FC } from 'react';

const COMMON_STYLES = `
  bg-gray-500

  absolute
  w-5
  h-0.5
  top-1/2
  left-1/2
  -translate-y-1/2
  rounded
`;

const Cross: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} w-4 h-4 cursor-pointer select-none`}>
      <span className={`${COMMON_STYLES} rotate-45 -translate-x-1/2`} />
      <span className={`${COMMON_STYLES} -rotate-45 -translate-x-1/2`} />
    </div>
  );
};

export default Cross;
