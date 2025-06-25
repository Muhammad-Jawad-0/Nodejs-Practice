import express from "express";
import user from "./users/index.js";

const router = express.Router();

router.use("/user", user);
router.use("/post", user);
router.use("/comments", user);

export default router