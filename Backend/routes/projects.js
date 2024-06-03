import express from "express";
import { getData } from "../controller/projects.js";


const projectsRouter = express.Router();
projectsRouter.route("/find").post(getData);

export default projectsRouter;
