import { Router } from "express";
import uploadController from "./controllers/upload.js";

const router = Router();

router.post("/", uploadController);

export default router;
