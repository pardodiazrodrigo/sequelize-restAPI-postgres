import app from "./app.js";
import { sequelize } from "./db/database.js";
import { PORT } from './config.js'

async function main(PORT) {
	try {
		await sequelize.sync({force: false});
		app.listen(PORT);
		console.log("Server on port: " + PORT);
	} catch (error) {
		console.error("Unable to connecto to the database", error);
	}
}

main(PORT);
