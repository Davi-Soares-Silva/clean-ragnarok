import { UserRepository } from "../../../infra/db/mysql/user/user-repository";
import { DbAuthenticationToken } from "../../../data/usecases/db/db-authentication-token";
import { JwtAdapter } from "../../../infra/cryptography/jwt-adapter";
import { AuthMiddleware } from "../../../presentation/middlewares/auth"
import { JWT } from '../../../utils/constants'

export const makeAuthMiddleware = () => {
  const jwtAdapter = new JwtAdapter(JWT.APP_SECRET);
  const userRepository = new UserRepository();

  const dbAuthenticationToken = new DbAuthenticationToken(jwtAdapter, userRepository);
  return new AuthMiddleware(dbAuthenticationToken);
}