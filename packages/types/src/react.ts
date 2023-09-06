import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export type BaseProps<T = HTMLElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>;
