import express, { Express } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { connectDb } from '../middlewares/connectDb';
import indexRouter from '../routes/index.routes';
import socket, { Server } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';

export const startApp = async (app: Express) => {
  dotenv.config();
  app.use(express.json());
  app.use(cors());

  // Routes
  app.use('/v1', indexRouter);

  await connectDb();
  const server = await app.listen(process.env.PORT, () =>
    console.log(`MongoDb is connected\nServer listened in ${process.env.PORT}`)
  );

  let onlineusers = new Map();

  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    socket.on('send-msg', (data) => {
      data = { ...data, _id: uuidv4() };
      // io.emit('received-msg', data);
      socket.broadcast.emit('received-msg', data);
    });
  });
};
