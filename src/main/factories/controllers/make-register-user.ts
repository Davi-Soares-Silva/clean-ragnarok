import { RegisterUserController } from "../../../presentation/controllers/register-user";
import { makeDbRegisterUser } from "../usecases/register-user-factory";

export function makeRegisterUserController() {
  return new RegisterUserController(makeDbRegisterUser());
}