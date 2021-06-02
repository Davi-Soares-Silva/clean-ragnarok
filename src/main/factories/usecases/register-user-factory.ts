import { DbRegisterUser } from "../../../data/usecases/db/db-register-user";
import { RegisterUser } from "../../../domain/usecases/register-user";
import { BcryptAdapter } from "../../../infra/cryptography/bcrypt-adapter";
import { UserRepository } from "../../../infra/db/mysql/user/user-repository";

export function makeDbRegisterUser (): RegisterUser {
  const salt = 12;

  const bcryptAdapter = new BcryptAdapter(salt);
  const userRepository = new UserRepository();

  return new DbRegisterUser(bcryptAdapter, userRepository, userRepository);
}