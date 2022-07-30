import { Model } from 'mongoose';

export class BaseService {
  private baseModel: Model<any>;
  constructor(model: Model<any>) {
    this.baseModel = model;
  }
}
