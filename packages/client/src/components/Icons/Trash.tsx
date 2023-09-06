import { FC } from 'react';
import { Props } from './types.ts';

const Trash: FC<Props> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path
      fill="inherit"
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
);

export default Trash;
