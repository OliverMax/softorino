import { Router, NextFunction } from 'express';
import { Comment } from '@softorino/types';
import { randomUUID } from 'crypto';
import { TypedRequestBody, TypedResponse } from '@/types';
import { HttpError } from '../utils';

const router = Router();

let comments: Comment[] = [];

router
  .get(
    '/',
    (
      req: TypedRequestBody<undefined>,
      res: TypedResponse<Comment[]>,
    ) => {
      res.send(comments);
    },
  )

  .post(
    '/',
    (
      req: TypedRequestBody<Pick<Comment, 'content'>>,
      res: TypedResponse<Comment>,
      next: NextFunction,
    ) => {
      const { content } = req.body;

      if (!content.length) {
        return next(HttpError.missingProperty('content'));
      }

      const comment: Comment = {
        id: randomUUID(),
        content,
        createdAt: Date.now(),
        updatedAt: null,
      };

      comments.push(comment);
      res.send(comment);
    },
  )

  .delete(
    '/',
    (
      req: TypedRequestBody<{ id: string }>,
      res: TypedResponse<Comment>,
      next: NextFunction,
    ) => {
      const { id } = req.query;

      if (!id) {
        return next(HttpError.missingProperty('id'));
      }

      const foundCommentIndex = comments
        .findIndex(comment => comment.id === id);

      if (foundCommentIndex < 0) {
        return next(HttpError.notFound());
      }

      comments = comments
        .filter(comment => comment.id !== id);

      res.status(204);
      res.send();
    },
  );

export default router;
