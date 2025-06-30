import mongoose from "mongoose";
import { isEmail } from "validator";

const LogSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      validate: [isEmail, "Please enter a valid email."],
      maxlength: [300, "Email must have at most 300 characters"],
      minlength: [5, "Email must have at least 5 characters."],
      trim: true,
    },
    status: {
      type: String,
      enum: ["success", "failed"],
      default: "success",
    },
  },
  { timestamps: true },
);

const Log = mongoose.model("Log", LogSchema);
export default Log;
