import { createUser, getUser } from "./users";
import { createApplication, getApplication } from "./applications";

import { IUser, IApplication } from "../models";

interface IUserApplication extends IUser, IApplication {}

export const createUserApplication = async (
	userApplication: IUserApplication
) => {
	const {
		email,
		last_name,
		first_name,
		phone_number,
		role,
		github,
		comment,
		interval,
		linkedin,
	} = userApplication;
	const user = await createUser({ email, last_name, first_name, phone_number });
	const application = await createApplication({
		user_id: user.id,
		github,
		comment,
		interval,
		linkedin,
		role,
	});

	return { ...user, ...application };
};

export { createUser, createApplication, getUser, getApplication };
