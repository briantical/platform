import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { Dialect, Sequelize, DataTypes, Deferrable } from 'sequelize';
import { where } from 'sequelize/types';

dotenv.config();

const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
	dialect: 'postgres',
	port: 5432,
	host: dbHost,
});

const User = sequelize.define('User', {
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
});

interface IUser {
	first_name: string;
	last_name: string;
	email: string;
	phone_number?: string;
}

interface IApplication {
	interval?: string;
	linkedin?: string;
	github?: string;
	comment: string;
}

const createUser = async (details: IUser) => {
	let [user] = await User.findOrCreate({
		where: { email: details.email },
	});
	user.set({
		...details,
	});
	user = await user.save();
	return user;
};

const getUser = async (id: number) => {
	const user = await User.findByPk(id);
	return user;
};

const createApplication = async (user_id: string, details: IApplication) => {
	const user = await User.findByPk(user_id);
	if (!user) {
		throw new Error('User not found');
	}
	let application = await Application.findOrCreate({
		where: { user_id },
	});
	application = application.set({
		...details,
	});
	return application;
};

const getApplication = async (id: number) => {
	const application = await Application.findByPk(id);
	return application;
};

interface IUserApplication {
	user: IUser;
	application: IApplication;
}

const createUserApplication = async (userApplication: IUserApplication) => {
	const user = await createUser(userApplication.user);
	console.log(user);
	const application = await createApplication(
		user.id,
		userApplication.application
	);
	return { user, application };
};

const Application = sequelize.define('User', {
	user_id: {
		type: DataTypes.INTEGER,
		references: {
			model: User,
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
});

app.get('/', (req: Request, res: Response) => {
	res.json({ data: 'Platform Running !!!' });
});

app.post('/apply', async (req: Request, res: Response) => {
	const userApplication = req.body as IUserApplication;
	const result = await createUserApplication(userApplication);
	res.json({ data: result });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
