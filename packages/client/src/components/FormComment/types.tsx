import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { Comment } from '@softorino/types';

type BaseProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export type Props = Omit<BaseProps, 'onSubmit'> & {
  onSubmit?(content: Comment['content']): void;
};
