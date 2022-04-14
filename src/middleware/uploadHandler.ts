import multer from "multer";
import path from "path";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `${process.env.UPLOAD_DIR}`);
  },
  filename(req, file, cb) {
    const customFileName =
      crypto.randomBytes(16).toString("hex") + path.extname(file.originalname);
    cb(null, `${customFileName}`);
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: Number(process.env.UPLOAD_MAXSIZE) },
});

export const imgUpload = upload.fields([
  {
    name: "mainImg",
    maxCount: 1,
  },
  {
    name: "thumbnailImg",
    maxCount: 1,
  },
]);
