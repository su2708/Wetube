import express from "express";
import { homePage } from "../controllers/videoController";
import { join } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", homePage);
globalRouter.get("/join", join);

export default globalRouter;