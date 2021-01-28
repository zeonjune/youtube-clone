import express from 'express';
import {
	login,
	getJoin,
	logout,
	postJoin,
	getLogin,
	postLogin,
} from '../controllers/userController.js';
import { home, search } from '../controllers/videoController.js';
import routes from '../routes.js';
const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
