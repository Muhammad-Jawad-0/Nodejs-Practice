import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    email: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

export default User;
