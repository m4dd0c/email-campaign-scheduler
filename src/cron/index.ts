import cron from "node-cron";
import Campaign from "../models/Campaign";
import Log from "../models/Log";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Running cronjob every minute
cron.schedule("* * * * *", async () => {
  console.log(`[CRON] Checking for scheduled campaigns...`);

  try {
    const campaigns = await Campaign.find({
      status: "pending",
      scheduledTime: { $lte: new Date() },
    });

    if (campaigns.length === 0) {
      console.log("[CRON] No pending campaigns found.");
      return;
    }

    for (const campaign of campaigns) {
      const logs = [];

      for (const email of campaign.recipients) {
        try {
          await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: campaign.title,
            html: campaign.message,
          });

          const log = await Log.create({ email, status: "success" });
          logs.push(log._id);
          console.log(`[MAIL] Sent to ${email}`);
        } catch (error) {
          console.error(`[MAIL] Failed to send to ${email}:`, error);
          const log = await Log.create({ email, status: "failed" });
          logs.push(log._id);
        }
      }

      // Update campaign with logs and mark as sent
      campaign.logs = logs;
      campaign.status = "success";
      await campaign.save();
      console.log(`[CAMPAIGN] "${campaign.title}" marked as sent.`);
    }
  } catch (err) {
    console.error("[CRON] Error in campaign scheduler:", err);
  }
});
