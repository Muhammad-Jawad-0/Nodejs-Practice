import mongoose from "mongoose";
import ENV from "../constants/index.js"

const dbURI = `mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@jawadcluster.ghx62cm.mongodb.net/?retryWrites=true&w=majority&appName=${ENV.DB_NAME}`;

mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log("Database Connected jawad << ");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

export default mongoose;
