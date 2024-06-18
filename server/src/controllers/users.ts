import { User, UserInputs } from '../models';

export const createUser = async (details: UserInputs) => {
	let user = await User.findOne({ where: { email: details.email } });

	if (user) {
		user.set({ ...details });
		user = await user.save();
	} else {
		user = await User.create({ ...details });
	}
	return user;
};

export const getUser = async (id: number) => {
	const user = await User.findByPk(id);
	return user;
};
