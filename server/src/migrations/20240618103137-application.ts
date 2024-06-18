import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		return queryInterface.createTable("Application", {
			user_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "User",
					key: "id",
				},
			},
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			uuid: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			interval: {
				type: Sequelize.STRING,
			},
			linkedin: {
				type: Sequelize.STRING,
			},
			github: {
				type: Sequelize.STRING,
			},
			comment: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: DataTypes.NOW,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: DataTypes.NOW,
			},
		});
	},

	async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		return queryInterface.dropTable("Application");
	},
};
