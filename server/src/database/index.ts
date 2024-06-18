import { Sequelize } from "sequelize";
import connections from "../config/config";

type environments = "development" | "test" | "production";
const { database, username, password, host } =
	connections[(process.env.NODE_ENV as environments) || "development"];

const sequelize = new Sequelize(database, username, password, {
	dialect: "postgres",
	port: 5432,
	host,
});

export default sequelize;
