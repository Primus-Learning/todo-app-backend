import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import taskRouter from "./src/routes/taskRoutes.js";

dotenv.config({ path: '.env' });

mongoose.connect(`${process.env.DATABASE_URI}`);

const app = express();
const port = process.env.PORT || 4000;

try {
  // connecting to MongoDB
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
} catch (error) {
  console.error(`Error connecting to MongoDB: ${error}`);
}

app.use(express.json());
app.use("/api/todos", taskRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

