import { Request, Response } from "express";
import HttpStatusCodes from "http-status-codes";

/* NOT FOUND(404) middleware to catch error response */
export const notFoundErrorHandler = (req: Request, res: Response) => {
  res.status(HttpStatusCodes.NOT_FOUND).end();
};
