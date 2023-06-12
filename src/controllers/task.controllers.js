import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
	try {
		const tasks = await Task.findAll();
		if (!tasks) {
			res.status(404).json({ message: "Task not found" });
		}
		res.json(tasks);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const getTask = async (req, res) => {
	const { id } = req.params;
	try {
		const task = await Task.findOne({
			where: { id },
			attributes: ["name", "done"],
		});

		if (!task) {
			return res.status(404).json({ message: "Task not found" });
		}

		res.json(task);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const createTask = async (req, res) => {
	try {
		const { name, done, projectId } = req.body;
		const newTaks = await Task.create({
			name,
			done,
			projectId,
		});
		res.json(newTaks);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
export const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.destroy({
			where: { id },
		});
		if (!task) {
			res.status(404).json({ message: "Task not found" });
		}
		res.sendStatus(204);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const updateTask = async (req, res) => {
    try {
        const {id} = req.params
        const {name, done, projectId} = req.body
        const task = await Task.findByPk(id)
        // set for less params
        task.set({
            name,
            done,
            projectId
        })

        await task.save()
        res.json(task)

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
