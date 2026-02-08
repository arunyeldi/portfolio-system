import express from "express";
import {
  createProjectController,
  getProjectsController,
} from "../controllers/project.controller";

const router = express.Router();

router.post("/projects", createProjectController);
router.get("/projects", getProjectsController);

export default router;
