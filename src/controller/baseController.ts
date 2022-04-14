import { Response } from "express";
import ApiResponse from "../utility/apiResponse";
import HttpStatusCodes from "http-status-codes";
export default class baseController {
  static async responseInsert(insertData: any, res: Response) {
    const result = await insertData;

    ApiResponse.status(res, HttpStatusCodes.CREATED);
  }
}
