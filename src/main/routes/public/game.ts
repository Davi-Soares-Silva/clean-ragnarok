import { Router } from 'express';
import { adaptRoute } from '../../adapters/adaptRoute';
import { makeCreateGameController } from '../../factories/make-create-game';

export default (routes: Router) => {
  routes.post(
    '/games',
    adaptRoute(makeCreateGameController()),
  )
}