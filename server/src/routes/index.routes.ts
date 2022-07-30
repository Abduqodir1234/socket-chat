import { Router } from 'express';
import messageRouter from './messages.routes';
import userRoutes from './user.routes';

const indexRouter = Router();

indexRouter.use('/user', userRoutes);
indexRouter.use('/messages', messageRouter);

export default indexRouter;
