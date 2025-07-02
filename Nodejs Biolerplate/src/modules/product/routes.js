import { Router } from "express";
import getController from "./controllers/get.js";
import postController from "./controllers/post.js";
import deleteController from "./controllers/delete.js";
import updateController from "./controllers/update.js";
import getAllPopulatedController from "./controllers/getAllPopulatedData.js";

const router = Router();

router.get("/", getController);
router.get("/populated", getAllPopulatedController);
router.post("/", postController);
router.delete("/:id", deleteController);
router.put("/:id", updateController);

export default router;
