import { Application, IApplication, ApplicationInputs } from '../models';

export const createApplication = async (
	details: ApplicationInputs
): Promise<IApplication> => {
	const { user_id } = details;
	let application = await Application.findOne({
		where: { user_id },
	});

	if (application) {
		application.set({ ...details });
		application = await application.save();
	} else {
		application = await Application.create({ ...details });
	}
	return application;
};

export const getApplication = async (
	id: number
): Promise<IApplication | null> => {
	const application = await Application.findByPk(id);
	return application;
};
