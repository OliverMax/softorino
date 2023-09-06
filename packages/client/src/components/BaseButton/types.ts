import type {
  MouseEventHandler,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react';
import * as Colors from 'tailwindcss/colors';

type BaseProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type Props = Omit<BaseProps, 'onClick'> & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  bgColor?: Extract<keyof typeof Colors, 'red' | 'sky'>;
};
