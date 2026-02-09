import { Request, Response } from "express";
import { createProject, getAllProjects } from "../services/project.service";

export const createProjectController = async (req: Request, res: Response) => {
  try {
    const { title, techStack } = req.body;

    if(!title || title.trim() === "") {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    if(!Array.isArray(techStack) || techStack.length === 0) {
      return res.status(400).json({
        message: "At least one technology is required",
      });
    }

    const project = await createProject(req.body);
    
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Failed to create project" });
  }
};

export const getProjectsController = async (req: Request, res: Response) => {
  try {
    const projects = await getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};
