import express from 'express';
import { login, join, logout } from '../controllers/userController.js';
import { home, search } from '../controllers/videoController.js';
import routes from '../routes.js';
const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
