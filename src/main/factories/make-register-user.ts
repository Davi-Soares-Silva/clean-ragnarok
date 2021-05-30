import { DbRegisterUser } from "../../data/usecases/db-register-user";
import { UserRepository } from "../../infra/db/mysql/user/register-user-repository";
import { RegisterUserController } from "../../presentation/controllers/register-user";

export function makeRegisterUserController() {
  const registerUserRepository = new UserRepository();

  const dbRegisterUser = new DbRegisterUser(registerUserRepository)
  return new RegisterUserController(dbRegisterUser);
}