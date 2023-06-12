import Sequelize from "sequelize";
import {DB_URI} from "../config.js"


export const sequelize = new Sequelize(DB_URI.database, DB_URI.user, DB_URI.password, {
	host: DB_URI.host,
	dialect: "postgres",
});
