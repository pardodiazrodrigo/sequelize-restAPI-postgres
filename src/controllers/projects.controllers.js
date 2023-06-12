import { response } from "express";
import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
	try {
		const projects = await Project.findAll();
		res.json(projects);
	} catch (error) {
		return errorResponse(res, error)
	}
};

export const getProject = async (req, res) => {
	try {
		const {id} = req.params
		const project = await Project.findOne({
			where: {
				id,
			}
		})
		if (!project) return res.status(404).json({message:"Project not found"})

		res.json(project)
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
}

export const createProject = async (req, res) => {
	const { name, priority, description } = req.body;
	try {
		const newProject = await Project.create({
			name,
			priority,
			description,
		});
		res.json(newProject);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const updateProjetc = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, priority, description } = req.body;

		const project = await Project.findByPk(id);
		project.name = name;
		project.description = description;
		project.priority = priority;

		await project.save();
		res.json(project);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const deleteProjetc = async (req, res) => {
	try {
		const { id } = req.params;
		await Project.destroy({
			where: {
				id,
			},
		});

		res.sendStatus(204);
	} catch (error) {
		return errorResponse(res, error)
	}
};

export const getProjectTasks = async (req, res) => {
	try {
		const {id} = req.params
		const tasks = await Task.findAll({
			where: {projectId: id}
		})
		if (!tasks) return res.status(404).json({message:"Tasks not found"})
		console.log("Here")
		res.json(tasks)
	} catch (error) {
		return errorResponse(res, error)
	}
}


function errorResponse(res, error) {
	return res.status(500).json({message: error.message})
}