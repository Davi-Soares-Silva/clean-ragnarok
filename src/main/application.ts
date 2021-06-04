import express from 'express'
import cors from 'cors';

import { adaptMiddleware } from './adapters/adaptMiddleware';
import { makeAuthMiddleware } from './factories/middleware/make-auth-middleware';

import setupPublicRoutes from '../main/config/public-routes';
import setupPrivateRoutes from '../main/config/private-routes';

const server = express();

server.use(cors());
server.use(express.json());


setupPublicRoutes(server);
server.use(adaptMiddleware(makeAuthMiddleware()));
setupPrivateRoutes(server);

export { server };
