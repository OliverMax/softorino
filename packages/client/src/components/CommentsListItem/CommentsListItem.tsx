import { BaseButton, IconTrash } from '@/components';
import { makeHTMLClasses } from '@/utils';

import type { FC } from 'react';
import type { Props } from './types.ts';

const CommentsListItem: FC<Props> = ({ comment, onRemove }) => {
  return (
    <div className={makeHTMLClasses([
      'flex items-start justify-between',
      'transition-colors',
      'hover:bg-sky-50',
      'px-3 py-2',
    ])}>
      <span className="mr-2">
        {comment.content}
      </span>

      <BaseButton
        bgColor="red"
        className="p-1"
        onClick={onRemove}
      >
        <IconTrash fill="white" />
      </BaseButton>
    </div>
  );
};

export default CommentsListItem;
