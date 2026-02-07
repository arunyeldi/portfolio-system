import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

import app from "./app";
import connectDB from "./config/db";

const PORT = 8000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
