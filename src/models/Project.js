import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import { Task } from "./Task.js";

export const Project = sequelize.define("projects", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
	},
	priority: {
		type: DataTypes.INTEGER,
	},
	description: {
		type: DataTypes.STRING,
	},
});

Project.hasMany(Task, {
	foreingKey: "projectId",
	sourceKey: "id",
});

Task.belongsTo(Project, {
	foreingKey: "projectId",
	targetId: "id",
});
