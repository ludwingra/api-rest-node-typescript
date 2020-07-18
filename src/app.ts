process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

import dotenv from "dotenv";
import express from "express";
import { loadControllers } from "awilix-express";

// Env files
dotenv.config({
  path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

console.log(process.env.APP_FOO)

const app: express.Application = express();

// Routes
app.get('/', (req, res, next) => {
  res.send('Running ..');
});

// Test injection dependencies
import { container } from "./container";
// Services

// Controllers
app.use(loadControllers(
  'controllers/*.ts',
  { cwd: __dirname }
));



export { app };