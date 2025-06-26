import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./src/routes/index.js";
import mongoose from "./src/database/index.js";

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

mongoose.connection.on("open", () => {
  console.log("Database Connected");
});
app.get("/", (req, res) => res.send("Hello World"));

app.use("/api", router);

app.listen(5000, () => {
  console.log("Server is running on Port 5000");
});
