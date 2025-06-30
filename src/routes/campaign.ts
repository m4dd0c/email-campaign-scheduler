import express from "express";
import {
  renderGetCampaigns,
  renderGetSingleCampaign,
  getCampaigns,
  renderPostCampaign,
  postCampaign,
} from "../controllers/campaign";

const router = express.Router();

// Get Campaigns
router.get("/", renderGetCampaigns);
router.get("/api", getCampaigns);

// Get Single Campaign
router.get("/get/:id", renderGetSingleCampaign);

// Post Campaigns
router.get("/new", renderPostCampaign);
router.post("/new/api", postCampaign);

export default router;
