import { Router } from 'express';
import { createGame } from '../../../validation/usecases/create-game';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptValidationMiddleware } from '../../adapters/adaptValidationMiddleware';
import { makeCreateGameController, makeListGamesController } from '../../factories/controllers';


export default (routes: Router) => {
  routes
    .route('/games')
    .post(
      adaptValidationMiddleware(createGame),
      adaptRoute(makeCreateGameController()),
    )
    .get(
      adaptRoute(makeListGamesController())
    )
}