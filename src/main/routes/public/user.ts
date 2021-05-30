import { Router } from 'express';
import { registerUser } from '../../../validations/usecases/register-user';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptValidationMiddleware } from '../../adapters/adaptValidationMiddleware';
import { makeRegisterUserController } from '../../factories/make-register-user';

export default (routes: Router) => {
  routes.post(
    '/register',
    adaptValidationMiddleware(registerUser),
    adaptRoute(makeRegisterUserController())
  )
}