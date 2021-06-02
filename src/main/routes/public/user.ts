import { Router } from 'express';
import { makeLoginUserController } from '../../factories/controllers/make-login-user'
import { loginUser } from '../../../validation/usecases/login-user';
import { registerUser } from '../../../validation/usecases/register-user';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptValidationMiddleware } from '../../adapters/adaptValidationMiddleware';
import { makeRegisterUserController } from '../../factories/controllers/make-register-user';

export default (routes: Router) => {
  routes.post(
    '/register',
    adaptValidationMiddleware(registerUser),
    adaptRoute(makeRegisterUserController())
  )

  routes.post(
    '/authentication',
    adaptValidationMiddleware(loginUser),
    adaptRoute(makeLoginUserController()),
  )
}