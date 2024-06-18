import { Router } from 'express';

import usersRouter from './users';
import applicationsRouter from './applications';

const router = Router();

router.use('/users', usersRouter);
router.use('/applications', applicationsRouter);

export default router;
