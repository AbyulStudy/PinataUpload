import { Response } from "express";
import HttpStatusCodes from "http-status-codes";

export default class ApiResponse {
  static result = (res: Response, data: any, status: number = 200) => {
    res.status(status);
    res.json({
      sucess: true,
      data,
    });
  };

  static status = (res: Response, status: number) => {
    res.status(status).end();
  };

  static error = (res: Response, error: any) => {
    error.status = error.status || HttpStatusCodes.BAD_REQUEST;

    res.status(error.status || 500);
    res.json({
      sucess: false,
      code: error.code || 500,
      message: error ? error : error.message,
    });
  };
}
