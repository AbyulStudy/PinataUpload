import { Router } from "express";
import PinataController from "../controller/pinitaController";
import { imgUpload } from "../middleware/uploadHandler";
const router = Router();

// Rounting Test
router.get("/", PinataController.indexPage);

// Pinata
router.post("/pinata/upload", imgUpload, PinataController.uploadFilePage);

export default router;
