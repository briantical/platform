import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../database/index';

export interface IApplication {
	id: number;
	user_id: number;
	github?: string;
	comment: string;
	interval?: string;
	linkedin?: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
	uuid: typeof DataTypes.UUID;
}

export interface ApplicationInputs
	extends Optional<IApplication, 'id' | 'uuid'> {}

export default class Application
	extends Model<IApplication, ApplicationInputs>
	implements IApplication
{
	public id!: number;
	public github!: string;
	public comment!: string;
	public user_id!: number;
	public interval!: string;
	public linkedin!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	public readonly deletedAt!: Date;
	public readonly uuid!: typeof DataTypes.UUID;
}

Application.init(
	{
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'User',
				key: 'id',
			},
		},
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		interval: {
			type: DataTypes.STRING,
		},
		linkedin: {
			type: DataTypes.STRING,
		},
		github: {
			type: DataTypes.STRING,
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Application',
		tableName: 'Application',
		timestamps: true,
	}
);
