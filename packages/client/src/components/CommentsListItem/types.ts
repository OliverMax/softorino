import { MouseEventHandler } from 'react';
import { Comment, BaseProps } from '@softorino/types';

export type Props = BaseProps<HTMLDivElement> & {
  comment: Comment;
  onRemove: MouseEventHandler<HTMLButtonElement>;
};
