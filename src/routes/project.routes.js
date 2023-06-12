import { Router } from "express";
import {
	getProjects,
	createProject,
	updateProjetc,
	deleteProjetc,
	getProject,
	getProjectTasks,
} from "../controllers/projects.controllers.js";

const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id", updateProjetc);
router.delete("/projects/:id", deleteProjetc);
router.get("/projects/:id", getProject);
router.get("/projects/:id/tasks", getProjectTasks);

export default router;
