import express from "express";
import { homePage } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", homePage);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
