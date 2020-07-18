process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

import dotenv from "dotenv";
import express from "express";
import { loadControllers } from "awilix-express";
// Test injection dependencies
import loadContainer from "./container";

// Env files
dotenv.config({
  path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});


const app: express.Application = express();

// Routes

// Container
loadContainer(app);

// Services

// Controllers
app.use(loadControllers(
  'controllers/*.ts',
  { cwd: __dirname }
));



export { app };