import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { create } from "express-handlebars";
import cors from "cors";
import entryPoint from "./routes";
import path from "path";
import dotenv from "dotenv";

// Express application setup
const app = express();

// .env setup
dotenv.config();

// Scheduler setup
import "./cron";

// Cors setup
const corsOpts = {
  origin: "*",
  methods: ["POST", "GET", "PUT", "DELETE"],
};

app.use(cors(corsOpts));

// Body parser for incoming mutations- POST, PUT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars setup
const hbs = create({
  extname: ".hbs",
  partialsDir: path.join(__dirname, "views", "partials"),
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

// View/Pages setup
app.set("views", path.join(__dirname, "views"));

// Static files setup- e.g., css
app.use(express.static(path.join(__dirname, "public")));

// Routes setup
entryPoint(app);

// NotFound View
app.use((_req, res) => {
  return res.status(404).render("404");
});

// Error View
app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(error.status || 500);
  res.render("error", {
    error,
  });
});

export default app;
