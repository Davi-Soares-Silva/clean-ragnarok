import { LoginUserController } from '../../../presentation/controllers/login-user';

export function makeLoginUserController() {
  return new LoginUserController()
}