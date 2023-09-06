import { Comment, BaseProps } from '@softorino/types';

export type Props = BaseProps<HTMLUListElement> & {
  comments: Comment[];
  onRemove(comment: Comment): void;
};
