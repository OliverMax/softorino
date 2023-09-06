import { useState, useEffect } from 'react';
import { request } from '@/utils';
import { Comment } from '@softorino/types';

const LC_COMMENTS_KEY = 'comments';

export default function useCommentsApi() {
  const [comments, setComments] = useState<Comment[]>(
    JSON.parse(localStorage.getItem(LC_COMMENTS_KEY) || '[]')
  );

  const getComments = async (): Promise<Comment[]> => {
    try {
      const response = await request<Comment[]>({
        method: 'GET',
        path: '/comments',
      });

      setComments(response)
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getComment = async ({ id }: { id: Comment['id'] }): Promise<Comment> => {
    try {
      return request<Comment>({ method: 'GET', path: `/comments/${id}` });
    } catch (error) {
      throw error;
    }
  };

  const postComment = async ({ content }: Pick<Comment, 'content'>): Promise<Comment> => {
    try {
      const response = await request<Comment>({
        method: 'POST',
        path: '/comments',
        requestBody: { content },
      });

      setComments(prevState => [...prevState, response]);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const deleteComment = async ({ id }: { id: Comment['id'] }): Promise<void> => {
    try {
      await request<Comment>({
        method: 'DELETE',
        path: `/comments/${id}`,
        requestBody: { id },
      });

      setComments(prevState => prevState.filter(comment => comment.id !== id));
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    localStorage.setItem(LC_COMMENTS_KEY, JSON.stringify(comments));
  }, [comments]);

  return [
    comments,
    {
      getComments,
      getComment,
      postComment,
      deleteComment,
    },
  ] as const;
};
