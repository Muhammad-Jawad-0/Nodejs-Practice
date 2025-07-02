import express, { Router } from "express";
import postControler from "./controllers/post.js";
import getController from "./controllers/get.js";
import deleteController from "./controllers/delete.js";
import updateController from "./controllers/update.js";

const router = Router();

router.post("/", postControler);
router.get("/", getController);
router.delete("/:id", deleteController);
router.put("/:id", updateController);

export default router;
