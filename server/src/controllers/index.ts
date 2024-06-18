import { createUser, getUser } from './users';
import { createApplication, getApplication } from './applications';

import { IUser, IApplication } from '../models';

interface IUserApplication extends IUser, IApplication {}

export const createUserApplication = async (
	userApplication: IUserApplication
) => {
	const user = await createUser(userApplication);
	const application = await createApplication(user.id, userApplication);
	return { user, application };
};

export { createUser, createApplication, getUser, getApplication };
