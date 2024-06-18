'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('Application', {
			user_id: {
				type: Sequelize.DataTypes.INTEGER,
				references: {
					model: 'User',
					key: 'id',
				},
			},
			id: {
				type: Sequelize.DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			uuid: {
				type: Sequelize.DataTypes.UUID,
				defaultValue: Sequelize.DataTypes.UUIDV4,
			},
			interval: {
				type: Sequelize.DataTypes.STRING,
			},
			linkedin: {
				type: Sequelize.DataTypes.STRING,
			},
			github: {
				type: Sequelize.DataTypes.STRING,
			},
			comment: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('Application');
	},
};
