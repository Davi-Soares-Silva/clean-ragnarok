import { RegisterUserController } from "../../../presentation/controllers/register-user";
import { makeDbRegisterUser } from "../usecase/register-user-factory";

export function makeRegisterUserController() {
  const dbRegisterUser = makeDbRegisterUser();
  return new RegisterUserController(dbRegisterUser);
}