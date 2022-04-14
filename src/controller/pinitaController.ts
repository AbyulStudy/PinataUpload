import baseController from "./baseController";
import IController from "../interface/IController";
import { Request, Response } from "express";
import PinataService from "../service/pinataService";
import ApiResponse from "../utility/apiResponse";
import { INFTMetadataDTO } from "../interface/INFT";
import fs from "fs";
export default class PinataController extends baseController {
  static indexPage: IController = async (req: Request, res: Response) => {
    const pinata = await PinataService.apiKeyTest();

    pinata
      .testAuthentication()
      .then((result) => {
        PinataController.responseInsert(result, res);
      })
      .catch((err) => {
        let error = {
          status: 401,
          code: 401,
          message: err.details,
        };

        ApiResponse.error(res, error);
      });
  };

  static uploadFilePage: IController = async (req: Request, res: Response) => {
    const { description, name, supply }: INFTMetadataDTO = req.body;
    const fileInfos = JSON.parse(JSON.stringify(req.files));
  };
}
