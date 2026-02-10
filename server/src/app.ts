import express from "express";
import projectRoutes from "./routes/project.route";
import errorHandler from "./middlewares/errorHandler";
import AppError from "./utils/AppError";

const app = express();

app.use(express.json());

// THIS LINE IS CRITICAL
app.use("/api", projectRoutes);

app.use((req, res, next) => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

app.use(errorHandler);

export default app;
