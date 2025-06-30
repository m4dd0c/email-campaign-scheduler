import type { Express, Request, Response } from "express";
import campaign from "./campaign";
import home from "./home";

const entryPoint = (app: Express) => {
  // Campaign routes
  app.use("/campaigns", campaign);

  // Home route
  app.use("/", home);

  // Health route
  app.get("/status", (_req: Request, res: Response) => {
    res.send("Server is up and running...");
  });
};

export default entryPoint;
