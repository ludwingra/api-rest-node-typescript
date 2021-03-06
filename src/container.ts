import express from "express";
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";

// Services
import { TestService } from "./services/test.service";


export default (app: express.Application) => {
  const container = createContainer({
    injectionMode: 'CLASSIC'
  });

  container.register({
    testService: asClass(TestService).scoped()
  });

  app.use(scopePerRequest(container));
};