import {Router} from "express";
import {createTask, deleteTask, getAllUserTasks, updateTask} from "../controllers/taskController.js";

const taskRouter = Router();

taskRouter.post("/tasks", createTask);
taskRouter.get("/tasks", getAllUserTasks);
taskRouter.put("/tasks/:id", updateTask);
taskRouter.delete("/tasks/:id", deleteTask);

export default taskRouter;

