import type { Request, Response } from "express";

export const renderHome = (_req: Request, res: Response) => res.render("index");
