import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

type BaseProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type Props = BaseProps & {};
