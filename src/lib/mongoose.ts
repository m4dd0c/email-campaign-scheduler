import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbURI = process.env.DB_URI || "mongodb://0.0.0.0:27017/";

    await mongoose.connect(dbURI, {
      dbName: "EmailCampaignScheduler",
    });

    console.log("Connected to DB");
  } catch (error) {
    console.error("DB_ERR:", error);
  }
};

export default connectDB;
