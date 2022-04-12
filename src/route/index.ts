import { Router } from "express";
import indexController from "../controller";
const router = Router();

router.get("/", indexController.indexPage);

export default router;
