import express from "express";
import { renderHome } from "../controllers/home";

const router = express.Router();

// Home Page
router.get("/", renderHome);

export default router;
