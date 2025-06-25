import express from "express";
import router from "./routes/index.js";
import cors from "cors";
import mongoose from "./db/index.js";

const app = express();
app.use(cors());

app.use(express.json());


mongoose.connection.on("open", () => {
  console.log("Database Connected");
});

app.get("/", (req, res) => {
  res.send(new Date().toString());
});

app.use("/api", router);

app.listen(3000, () => {
  console.log("server is running on 3000");
});
