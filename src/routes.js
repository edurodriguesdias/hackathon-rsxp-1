import { Router } from 'express';
import CompanyController from './app/controllers/CompanyController';
import SchoolController from './app/controllers/SchoolController';
import StudentsController from './app/controllers/StudentsController';

const routes = new Router();

routes.get('/companies', CompanyController.index);
routes.post('/companies', CompanyController.store);

routes.post('/schools', SchoolController.store);

routes.post('/students', StudentsController.store);

export default routes;
