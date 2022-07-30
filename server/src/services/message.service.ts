import User from '../models/user.model';
import { messageCreateInput } from '../middlewares/joi/message.input';
import { CreateMessageInterface } from '../middlewares/types/messages.interface';
import { Messages } from '../models/message.model';
import { BaseService } from './base.service';
import { ResponseService } from './response.service';
import { create } from 'domain';
import { ObjectId } from 'mongodb';

export default class MessageService extends BaseService {
  private model = Messages;
  constructor() {
    super(Messages);
  }

  async addMessage(data: CreateMessageInterface) {
    try {
      const { error } = messageCreateInput.validate(data);
      if (error) return ResponseService.badRequest(error.message);
      const users = await User.find({
        $or: [{ _id: data.sender }, { _id: data.receiver }],
      });

      if (users.length < 2)
        return ResponseService.notFound('sender or reciever');

      const created = await this.model.create(data);
      return ResponseService.created(created);
    } catch (e) {
      return ResponseService.internalServerError(e);
    }
  }
  async getAllMessage(sender: string, receiver: string) {
    try {
      const ids = [sender, receiver];
      const data = await this.model
        .find({
          sender: { $in: ids },
          receiver: { $in: ids },
        })
        .lean();
      return ResponseService.data(data);
    } catch (e) {
      return ResponseService.internalServerError(e);
    }
  }
}
