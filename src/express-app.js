import express from "express";
import cors from "cors";
import { ErrorHandler, UserRouter, VendorRouter, AsserRouter } from "./api/index.js";
import path from "path";
import { fileURLToPath } from "url";

const ExpressApp = async (app) => {
  app.use(express.json());
  app.use(cors());

  UserRouter(app);

  AsserRouter(app);

  VendorRouter(app);

  app.use(ErrorHandler);
};

export default ExpressApp;
