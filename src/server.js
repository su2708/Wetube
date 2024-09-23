import express from "express";
import morgan from "morgan";

const PORT = 8000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

const handleHome = (req, res) => res.send("Home");
const handleEditUser = (req, res) => res.send("Edit User");
const handleWatchVideo = (req, res) => res.send("Watch Video");

globalRouter.get("/", handleHome);
userRouter.get("/edit", handleEditUser);
videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
