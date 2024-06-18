import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../database/index';

export interface IUser {
	id: number;
	email: string;
	last_name: string;
	first_name: string;
	phone_number?: string;
	uuid: typeof DataTypes.UUID;
}

export interface UserInputs extends Optional<IUser, 'id' | 'uuid'> {}

export default class User extends Model<IUser, UserInputs> implements IUser {
	public id!: number;
	public first_name!: string;
	public last_name!: string;
	public email!: string;
	public phone_number!: string;

	public readonly uuid!: typeof DataTypes.UUID;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	public readonly deletedAt!: Date;
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		phone_number: {
			type: DataTypes.STRING,
			unique: true,
		},
	},
	{
		sequelize,
		modelName: 'User',
		tableName: 'User',
		timestamps: true,
	}
);
