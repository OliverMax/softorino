import { FC, useState, useEffect } from 'react';
import {
  Overlay,
  Modal,
  BaseButton,
  FormComment,
  Spinner,
  CommentsList,
} from '@/components';
import { useCommentsApi } from '@/hooks';
import { makeHTMLClasses } from '@/utils';
import type { Comment } from '@softorino/types';
import type { Props } from './types.ts';

const Main: FC<Props> = ({ className = '', ...props }) => {
  const [loading, setLoading] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const [
    comments,
    {
      getComments,
      postComment,
      deleteComment,
    },
  ] = useCommentsApi();

  const submitHandler = async (content: Comment['content']) => {
    setLoading(true);
    await postComment({ content });
    setLoading(false);
    setOverlayVisible(false);
  };

  const removeHandler = (comment: Comment) => {
    deleteComment({ id: comment.id });
  };

  useEffect(() => {
    if (!comments.length) {
      getComments();
    }
  }, []);

  return (
    <main
      className={makeHTMLClasses(['overflow-y-auto', className])}
      {...props}
    >
      <Overlay isVisible={isOverlayVisible}>
        <Modal
          className="relative"
          onClose={() => setOverlayVisible(false)}
        >
          <Spinner
            className={makeHTMLClasses([
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              'transition-opacity duration-300',
              loading
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            ])}
          />

          <FormComment
            className={makeHTMLClasses([
              'transition-opacity duration-300',
              loading
                ? 'opacity-0 pointer-events-none'
                : 'opacity-100 pointer-events-auto'
            ])}
            onSubmit={submitHandler}
          />
        </Modal>
      </Overlay>

      <div className="max-w-2xl mx-auto flex flex-col items-end">
        <CommentsList
          className="w-full mb-3"
          comments={comments}
          onRemove={removeHandler}
        />

        <BaseButton
          className="px-4 py-1"
          onClick={() => setOverlayVisible(true)}
        >
          Add
        </BaseButton>
      </div>
    </main>
  );
};

export default Main;
