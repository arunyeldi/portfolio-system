import { Request, Response } from "express";
import { createProject, getAllProjects } from "../services/project.service";
import AppError from "../utils/AppError";

export const createProjectController = async (req: Request, res: Response) => {
  try {
    const { title, techStack } = req.body;

    if (!title || title.trim() === "") {
      throw new AppError("Title is required", 400);
    }

    if (!Array.isArray(techStack) || techStack.length === 0) {
      throw new AppError("At least one technology is required", 400);
    }

    const project = await createProject(req.body);

    res.status(201).json(project);
  } catch (error) {
    throw error;
  }
};

export const getProjectsController = async (req: Request, res: Response) => {
  try {
    const projects = await getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    throw error;
  }
};
