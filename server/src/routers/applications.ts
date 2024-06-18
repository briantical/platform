import { Router, Request, Response } from 'express';
import { getApplication, createUserApplication } from '../controllers';

const applicationsRouter = Router();

applicationsRouter.get('/:id', (req: Request, res: Response) => {
	// TODO: verify that the application_id is a number
	const application_id = parseInt(req.params.id);

	const user = getApplication(application_id);
	// TODO: check if application exists
	return res.status(200).json({ data: { user } });
});

applicationsRouter.post('/apply', async (req: Request, res: Response) => {
	const application = await createUserApplication(req.body);
	return res.status(200).json({ data: { application } });
});

export default applicationsRouter;
