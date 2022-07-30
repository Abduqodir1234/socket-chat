import { Request, Response, Router } from 'express';
import { UserController } from '../controllers/user.controller';

const userRoutes = Router();

const controller = new UserController();

userRoutes.route('/register').post((req, res) => controller.create(req, res));
userRoutes.post('/login', (req, res) => controller.login(req, res));
userRoutes.get('/allusers/:id', (req, res) => controller.getAllUsers(req, res));

export default userRoutes;
