import { Application, ApplicationInputs, IApplication, User } from '../models';

export const createApplication = async (
	user_id: number,
	details: IApplication
): Promise<IApplication> => {
	const user = await User.findByPk(user_id);
	if (!user) {
		throw new Error('User not found');
	}
	let [application] = await Application.findOrCreate({
		where: { user_id },
	});
	application = application.set({
		...details,
	});
	return application;
};

export const getApplication = async (
	id: number
): Promise<IApplication | null> => {
	const application = await Application.findByPk(id);
	return application;
};
