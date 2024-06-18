import { User, UserInputs } from '../models';

export const createUser = async (details: UserInputs) => {
	let [user] = await User.findOrCreate({
		where: { email: details.email },
	});
	user.set({
		...details,
	});
	user = await user.save();
	return user;
};

export const getUser = async (id: number) => {
	const user = await User.findByPk(id);
	return user;
};
