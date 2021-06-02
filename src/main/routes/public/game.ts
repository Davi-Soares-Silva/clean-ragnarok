import { Router } from 'express';
import { createGame } from '../../../validation/usecases/create-game';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptValidationMiddleware } from '../../adapters/adaptValidationMiddleware';
import { makeCreateGameController } from '../../factories/controllers/make-create-game';

export default (routes: Router) => {
  routes.post(
    '/games',
    adaptValidationMiddleware(createGame),
    adaptRoute(makeCreateGameController()),
  )
}