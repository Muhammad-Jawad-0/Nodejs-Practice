import mongoose from "mongoose";
import "dotenv/config";

const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@jawadcluster.ghx62cm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_NAME}`;


mongoose.connect(dbURI);

mongoose.connection.on("connect", () => {
  console.log("Database Connected << ");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

export default mongoose;
