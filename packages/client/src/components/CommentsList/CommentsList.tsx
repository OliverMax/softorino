import { CommentsListItem } from '@/components';

import type { FC } from 'react';
import type { Props } from './types.ts';

const CommentsList: FC<Props> = ({
  comments,
  onRemove,
  className,
  ...props
}) => {
  return (
    <ul className={`space-y-3 ${className}`} {...props}>
      {comments.map(comment => (
        <li key={comment.id} className="shadow">
          <CommentsListItem
            comment={comment}
            onRemove={() => onRemove(comment)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
