import mysql from "mysql2";
import { config } from "dotenv";

config();

export const db = mysql.createConnection({
	host: process.env.NODE_ENV_DB_HOST,
	user: process.env.NODE_ENV_DB_USERNAME,
	password: process.env.NODE_ENV_DB_PASSWORD,
	database: process.env.NODE_ENV_DB_NAME,
});




