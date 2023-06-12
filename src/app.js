import express from "express";
import morgan from "morgan";
import projectsRoutes from "./routes/project.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

// middLewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api", projectsRoutes);
app.use("/api", taskRoutes);
app.use((req, res, next) => {
	res.status(404).json({
		message: "Endpoint not found",
	});
});

export default app;
