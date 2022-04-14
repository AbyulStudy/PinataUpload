import { Request, Response } from "express";
import HttpStatusCodes from "http-status-codes";
import ApiError from "../utility/apiError";

/* NOT FOUND(404) middleware to catch error response */
export const notFoundErrorHandler = (req: Request, res: Response) => {
  res.status(HttpStatusCodes.NOT_FOUND).end();
};

export const errorHandler = (err: ApiError, req: Request, res: Response) => {
  res.status(err.status || HttpStatusCodes.INTERNAL_SERVER_ERROR);
  res.json({
    sucess: false,
    code: err.code || HttpStatusCodes.INTERNAL_SERVER_ERROR,
    message:
      err.message ||
      HttpStatusCodes.getStatusText(HttpStatusCodes.INTERNAL_SERVER_ERROR),
  });
};
