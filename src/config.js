import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;

export const DB_URI = {
	host: process.env.DB_HOST || "localhost",
	user: process.env.DB_USER || "postgres",
	password: process.env.DB_PASSWORD || 2404,
	port: process.env.DB_PORT || 5432,
	database: process.env.DB_DATABASE || "projectsnodedb",
    dialect: process.env.DB_DIALECT || "postgres"
};