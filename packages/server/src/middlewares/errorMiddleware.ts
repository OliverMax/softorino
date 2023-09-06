import { HttpError } from '@/utils';
import type { Request, Response, NextFunction } from 'express';

export default function errorMiddleware(
  { statusCode, message }: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(statusCode)

  res.send(message.length
    ? { error: message }
    : null
  );
}
