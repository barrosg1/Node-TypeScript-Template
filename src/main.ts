import express, { Application } from "express";
import "reflect-metadata";
import * as config from "../entryConfig";
import { Routes } from "./routes/routes";

// Express App init
const app: Application = express();

// middleware
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies

// Listening
const PORT = config.get("PORT") || 6000;
app.listen(PORT, () =>
  console.log(`=== Server listening on port: ${PORT} ===`)
);

// register routes
const routes = new Routes();
routes.setup(app);

export default app;
