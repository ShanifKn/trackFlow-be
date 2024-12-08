import express from "express";
import cors from "cors";
import { ErrorHandler, UserRouter } from "./api/index.js";
import path from "path";
import { fileURLToPath } from "url";
import VendorRouter from "./api/routes/vendor.route.js";

const ExpressApp = async (app) => {
  app.use(express.json());
  app.use(cors());

  UserRouter(app);
  VendorRouter(app);

  app.use(ErrorHandler);
};

export default ExpressApp;
