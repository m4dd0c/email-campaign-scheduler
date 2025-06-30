import mongoose from "mongoose";
import { isEmail } from "validator";

const CampaignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: [300, "Email must have at most 300 characters"],
      minlength: [3, "Email must have at least 5 characters."],
      trim: true,
    },
    message: {
      type: String,
      required: true,
      maxlength: [300, "Email must have at most 300 characters"],
      minlength: [3, "Email must have at least 5 characters."],
      trim: true,
    },
    recipients: [
      {
        type: String,
        required: true,
        validate: [isEmail, "Please enter a valid email."],
        maxlength: [300, "Email must have at most 300 characters"],
        minlength: [5, "Email must have at least 5 characters."],
        trim: true,
      },
    ],
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    logs: [
      {
        ref: "Log",
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
    ],
    scheduledTime: { type: Date, required: true },
  },
  { timestamps: true },
);

const Campaign = mongoose.model("Campaign", CampaignSchema);
export default Campaign;
