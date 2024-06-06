import express from "express";
import { getCompanyProjectsData, getData } from "../controller/projects.js";


const projectsRouter = express.Router();
projectsRouter.route("/find").post(getData);
projectsRouter.route("/companyprojects").post(getCompanyProjectsData);

export default projectsRouter;
