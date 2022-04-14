import pinataSDK from "@pinata/sdk";
import path from "path";
import fs from "fs";
import { config } from "dotenv";
config();

const pinata = pinataSDK(
  `${process.env.PINATA_API_KEY}`,
  `${process.env.PINATA_API_SECRET}`
);

export default class PinataService {
  static async apiKeyTest() {
    return pinata;
  }

  static async imgUploadPinata(imgFilePath: string) {
    console.log(`[imgUploadPinata] ${imgFilePath}  Upload....`);
    const filePath = path.join(__dirname, "../../" + imgFilePath);
    const stream = fs.createReadStream(filePath);

    return await pinata.pinFileToIPFS(stream);
  }
}
