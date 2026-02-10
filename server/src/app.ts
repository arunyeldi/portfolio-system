import express from "express";
import projectRoutes from "./routes/project.route";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

// THIS LINE IS CRITICAL
app.use("/api", projectRoutes);

app.use(errorHandler);



export default app;
