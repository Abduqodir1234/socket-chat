import { BaseService } from './base.service';
import { Model } from 'mongoose';
import User, { UserDocument } from '../models/user.model';
import {
  UserCreateInterface,
  UserLoginDataInterface,
} from '../middlewares/types/user.interface';
import { ResponseService } from './response.service';
import bcrypt from 'bcrypt';
import { userCreateInputValidation } from '../middlewares/joi/user.input';

export class UserService extends BaseService {
  model = User;
  constructor() {
    super(User);
  }

  async create(data: UserCreateInterface) {
    try {
      const { error } = userCreateInputValidation.validate(data);

      if (error) return ResponseService.badRequest(error?.message);

      if (await this.model.exists({ email: data.email }))
        return ResponseService.badRequest('Credentials taken');

      if (await this.model.exists({ username: data.username }))
        return ResponseService.badRequest('Username is already taken');

      const salt = bcrypt.genSaltSync(10);

      const hash = await bcrypt.hash(data.password, salt);

      const user: UserDocument = await this.model.create({
        ...data,
        password: hash,
      });

      delete user.password;

      return ResponseService.created(user);
    } catch (e) {
      return ResponseService.internalServerError(e);
    }
  }

  async login(loginData: UserLoginDataInterface) {
    try {
      const user = await this.model
        .findOne({
          username: loginData.username,
        })
        .lean();

      if (!user) return ResponseService.notFound();
      const isValid = await bcrypt.compare(
        loginData.password,
        user.password || ''
      );
      if (!isValid)
        return ResponseService.badRequest('Password is not correct');

      return ResponseService.data(user);
    } catch (e) {
      return ResponseService.internalServerError(e);
    }
  }

  async getAllUsers(id: string) {
    try {
      const users = await this.model
        .find({ _id: { $ne: id } })
        .select('username email _id ');
      return ResponseService.data(users);
    } catch (e) {
      return ResponseService.internalServerError(e);
    }
  }
}
