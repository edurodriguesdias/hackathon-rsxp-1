import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import CompanyController from './app/controllers/CompanyController';
import SchoolController from './app/controllers/SchoolController';
import StudentsController from './app/controllers/StudentsController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.get('/companies', CompanyController.index);
routes.post('/students', StudentsController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);

routes.post('/companies', CompanyController.store);

routes.get('/schools', SchoolController.index);
routes.post('/schools', SchoolController.store);

routes.get('/available-schools', SchoolController.searchAvailableSchools);
export default routes;
