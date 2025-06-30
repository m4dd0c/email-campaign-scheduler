import type { Request, Response } from "express";
import Campaign from "../models/Campaign";

// View: Get Campaigns
export const renderGetCampaigns = async (_req: Request, res: Response) => {
  try {
    const campaigns = await Campaign.find().lean();
    res.render("campaign/campaignList", {
      title: "Campaigns",
      campaigns,
      layout: "workspace",
    });
  } catch (error) {
    console.error("Error rendering campaign list:", error);
    res.status(500).send("Internal Server Error");
  }
};

// API: Get Campaigns
export const getCampaigns = async (_req: Request, res: Response) => {
  try {
    const campaigns = await Campaign.find().lean();
    res.status(200).json({ campaigns });
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// View: Get Single Campaign
export const renderGetSingleCampaign = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const campaign = await Campaign.findById(id).populate("logs").lean();
    if (!campaign) res.status(400).send("Invalid Campaign.");

    res.render("campaign/singleCampaign", {
      title: "Campaign",
      campaign,
      layout: "workspace",
    });
  } catch (error) {
    console.error("Error rendering campaign:", error);
    res.status(500).send("Internal Server Error");
  }
};

// View: Post Campaign
export const renderPostCampaign = (_req: Request, res: Response) =>
  res.render("campaign/campaignForm", {
    title: "Post Campaign",
    layout: "workspace",
  });

// API: Post Campaign
export const postCampaign = async (req: Request, res: Response) => {
  try {
    const { title, message, recipients, scheduledTime } = req.body;

    const recipientsArray = recipients
      .split(",")
      .map((email: string) => email.trim())
      .filter(Boolean);

    await Campaign.create({
      title,
      message,
      recipients: recipientsArray,
      scheduledTime,
    });

    res.redirect("/campaigns");
  } catch (error) {
    console.error("Error creating campaign:", error);
    res.status(500).send("Failed to create campaign");
  }
};
