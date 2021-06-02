import { BcryptAdapter } from "../../../infra/cryptography/bcrypt-adapter";
import { DbAuthentication } from "../../../data/usecases/db/db-authentication";
import { UserRepository } from "../../../infra/db/mysql/user/user-repository";

export function makeDbAuthentication() {
  const userRepository = new UserRepository();
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);

  return new DbAuthentication(userRepository, bcryptAdapter);
}