const connections = {
	development: {
		username: process.env.DB_USER as string,
		database: process.env.DB_NAME as string,
		password: process.env.DB_PASSWORD,
		host: process.env.DB_HOST,
		dialect: "postgres",
	},
	test: {
		username: process.env.TEST_DB_USER as string,
		database: process.env.TEST_DB_NAME as string,
		password: process.env.TEST_DB_PASSWORD,
		host: process.env.TEST_DB_HOST,
		dialect: "postgres",
	},
	production: {
		username: process.env.PROD_DB_USER as string,
		database: process.env.PROD_DB_NAME as string,
		password: process.env.PROD_DB_PASSWORD,
		host: process.env.PROD_DB_HOST,
		dialect: "postgres",
	},
};

export default connections;

module.exports = connections;
