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

    try {
      // mainImg PinataUpload
      let mainResult = await PinataService.imgUploadPinata(
        fileInfos.mainImg[0].path
      );

      if (Object.keys(mainResult).length > 3) {
        throw "is Duplicate ImageFile";
      }
      let originalName = fileInfos.mainImg[0].filename;
      let mainIpfsHash = mainResult.IpfsHash;

      // thumbnailImg PinataUpload
      let thumbReult = await PinataService.imgUploadPinata(
        fileInfos.thumbnailImg[0].path
      );
      let thumbName = fileInfos.thumbnailImg[0].filename;
      let thumbIpfsHash = thumbReult.IpfsHash;

      //   metadata PinataUpload
      let metadata = {
        pinataMetadata: {
          name: `${name}_METADATA`,
        },
        pinataContent: {
          description,
          thumb: `ipfs://${thumbIpfsHash}/${thumbName}`,
          image: `ipfs://${mainIpfsHash}/${originalName}`,
          external_url: "https://berryauction.bitberryswap.org/",
          // supply [ bbn에는 존재하나 cheil에는 없음 ]
        },
      };
      let metaJsonFileName =
        originalName.substring(0, originalName.indexOf(".")) + ".json";
      let metaJsonPath = `uploadFiles\\${metaJsonFileName}`;
      fs.writeFile(
        "./uploadFiles/" + metaJsonFileName,
        JSON.stringify(metadata),
        (err) => {}
      );

      let metaResult = await PinataService.metaDataUploadPinata(metaJsonPath);
      const { IpfsHash } = metaResult;
      res.json(IpfsHash);
    } catch (err: any) {
      let error = {
        status: 401,
        code: 401,
        message: err,
      };
      ApiResponse.error(res, error);
    }
  };
}
