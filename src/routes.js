import { Router } from 'express';

import CompanyController from './app/controllers/CompanyController';
import SchoolController from './app/controllers/SchoolController';

const routes = new Router();

routes.post('/companies', CompanyController.store);

routes.post('/schools', SchoolController.store);

export default routes;
