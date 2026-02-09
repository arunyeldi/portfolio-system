import Project from "../models/project.model";

export const createProject = async (projectData: any) => {
  const project = new Project(projectData);
  return await project.save();
};

export const getAllProjects = async () => {
  return await Project.find();
};
