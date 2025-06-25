import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  console.log("req >>", req.body);
  res.status(200).send({ status: 200, message: "controller post req success" });
});

export default router;
