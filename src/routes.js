import { Router } from 'express';

import StudentsController from './app/controllers/StudentsController';

const routes = new Router();

routes.post('/student', StudentsController.store);

export default routes;
