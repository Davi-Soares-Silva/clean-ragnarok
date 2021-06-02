import express from 'express'
import cors from 'cors';

import setupPublicRoutes from '../main/config/public-routes';

const server = express();

server.use(cors());
server.use(express.json());

setupPublicRoutes(server);

export { server };
