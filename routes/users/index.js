import express from "express";
import postUser from "./post.js";
import getUser from "./get.js";
import deleteUser from "./delete.js";
import updateUser from "./update.js";
import loginUser from "./login.js";
import tokenVerification from "../../config/tokenVerification.js";

const router = express.Router();

router.post("/login", loginUser);
router.get("/", tokenVerification, getUser);
router.post("/", postUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
