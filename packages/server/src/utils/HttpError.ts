export default class HttpError extends Error {
  public readonly statusCode: number;

  constructor(statusCode: number, message?: string) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }

  public static missingProperty(properties: string): HttpError {
    return new this(400, `[${properties}] is missing`);
  }

  public static notFound(): HttpError {
    return new this(404);
  }
}
