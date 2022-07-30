import { startApp } from './loaders';
import express, { Express } from 'express';

const app: Express =  express();

startApp(app);
