import { Router } from "express";
import {
	createTask,
	deleteTask,
	getTask,
	getTasks,
	updateTask,
} from "../controllers/task.controllers.js";

const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", createTask);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id", updateTask);

export default router;
