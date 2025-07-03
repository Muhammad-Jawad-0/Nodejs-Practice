import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Modal = mongoose.model("Product", dataSchema);
export default Modal;
