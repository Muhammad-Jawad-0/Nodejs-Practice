import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Modal = mongoose.model("User", dataSchema);
export default Modal;
