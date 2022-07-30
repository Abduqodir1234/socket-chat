import { Router } from 'express';
import { MessageController } from '../controllers/message.controller';

const messageRouter = Router();

const controller = new MessageController();

messageRouter.post('/add', (req, res) => controller.addMessage(req, res));
messageRouter.get('/:sender/:receiver', (req, res) =>
  controller.getAllMessage(req, res)
);

export default messageRouter;
