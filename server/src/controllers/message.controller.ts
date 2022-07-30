import { Request, Response } from 'express';
import MessageService from '../services/message.service';

export class MessageController {
  private readonly service: MessageService = new MessageService();
  async addMessage(req: Request, res: Response) {
    const { data, error, message, status } = await this.service.addMessage(
      req.body
    );
    return res.status(status).json({ error, message, data });
  }
  async getAllMessage(req: Request, res: Response) {
    const { data, error, message, status } = await this.service.getAllMessage(
      req.params.sender,
      req.params.receiver
    );

    return res.status(status).json({ error, message, data });
  }
}
