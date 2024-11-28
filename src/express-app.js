import express from "express";
import cors from "cors";
import { ErrorHandler, UserRouter } from "./api/index.js";
import path from "path";
import { fileURLToPath } from "url";

const ExpressApp = async (app) => {
  app.use(cors());

  UserRouter(app);

  app.use(ErrorHandler);
};

export default ExpressApp;
