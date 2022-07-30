import mongoose from 'mongoose';
import redis_client from '../config/redis';

export const connectDb = async () => {
  try {
    await redis_client.connect()
    await mongoose.connect(process.env.MONGO_URI || '');
  } catch (e) {
    console.log(e)
    process.exit(0);
  }
};
