import { Router, Request, Response } from 'express';
import { getUser } from '../controllers';

const usersRouter = Router();

usersRouter.get('/:id', (req: Request, res: Response) => {
	// TODO: verify that the user_id is a number
	const user_id = parseInt(req.params.id);

	const user = getUser(user_id);
	// TODO: check if user exists
	return res.status(200).json({ data: { user } });
});

export default usersRouter;
