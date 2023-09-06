import { FC } from 'react';
import type { Props } from './types.ts';
import './Spinner.css';

const Spinner: FC<Props> = ({ className, ...props }) => (
  <div className={`lds-ring ${className}`} {...props}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Spinner;
