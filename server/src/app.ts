import express from "express";
import projectRoutes from "./routes/project.route";

const app = express();

app.use(express.json());

// THIS LINE IS CRITICAL
app.use("/api", projectRoutes);

export default app;
