import mongoose  from "mongoose";
// import { title } from "node:process";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String],
    required: true,
  },
  githubUrl: {
    type: String,
    required: true,
  },
  liveUrl: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model("Project", ProjectSchema);

export default Project;