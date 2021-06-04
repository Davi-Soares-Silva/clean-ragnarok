import { BcryptAdapter } from "../../../infra/cryptography/bcrypt-adapter";
import { DbAuthentication } from "../../../data/usecases/db/db-authentication";
import { UserRepository } from "../../../infra/db/mysql/user/user-repository";
import { JwtAdapter } from "../../../infra/cryptography/jwt-adapter";
import { JWT } from "../../../utils/constants";

export function makeDbAuthentication() {
  const userRepository = new UserRepository();
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  const jwtAdapter = new JwtAdapter(JWT.APP_SECRET);

  return new DbAuthentication(userRepository, bcryptAdapter, jwtAdapter);
}