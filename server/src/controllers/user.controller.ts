import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import User from '../models/user.model';
import { stat } from 'fs';

export class UserController {
  async create(req: Request, res: Response) {
    const service = new UserService();
    const { error, data, status, message } = await service.create(req.body);
    return res.status(status).json({ error, data, message });
  }

  async login(req: Request, res: Response) {
    const service = new UserService();
    const { data, error, status, message } = await service.login(req.body);
    return res.status(status).json({ error, data, message });
  }

  async getAllUsers(req: Request, res: Response) {
    const service = new UserService();
    const { data, error, message, status } = await service.getAllUsers(
      req.params.id
    );
    return res.status(status).json({ error, message, data });
  }
}
