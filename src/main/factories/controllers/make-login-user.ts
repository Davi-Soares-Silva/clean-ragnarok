import { LoginUserController } from '../../../presentation/controllers/login-user';
import { makeDbAuthentication } from '../usecases/authentication-factory';

export function makeLoginUserController() {
  return new LoginUserController(makeDbAuthentication())
}