import { Router } from "express"
import { adaptValidationMiddleware } from "../../../main/adapters/adaptValidationMiddleware"
import { adaptRoute } from "../../../main/adapters/adaptRoute"
import { makeCreateGameController, makeDeleteGame, makeUpdateGameController } from "../../../main/factories/controllers"
import { createGame } from "../../../validation/usecases/create-game"

export default (routes: Router) => {
  routes
    .route('/games')
    .post(
      adaptValidationMiddleware(createGame),
      adaptRoute(makeCreateGameController()),
    )

  routes
    .route('/games/:id')
    .put(adaptRoute(makeUpdateGameController()))
    .delete(adaptRoute(makeDeleteGame()))
}