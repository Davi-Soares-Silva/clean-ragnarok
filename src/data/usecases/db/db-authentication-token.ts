import { LoadUserByIdRepository } from "@/data/protocols/db/load-user-by-id-repository";
import { AuthenticationToken } from "../../../domain/usecases/authentication-token";
import { Decrypter } from '../../protocols/cryptography';

export class DbAuthenticationToken implements AuthenticationToken {
  constructor(
    private readonly jwt: Decrypter,
    private readonly loadUserByIdRepository: LoadUserByIdRepository,
  ) {}

  async auth(params: AuthenticationToken.Params): AuthenticationToken.Result {
    const authHeader = params.accessToken;

    if (!authHeader) {
      throw new Error('TOKEN_NOT_FOUND');
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
      throw new Error('TOKEN_NOT_FORMATTED');
    }

    const [bearer, token] = parts;

    if (!/^Bearer$/i.test(bearer)) {
      throw new Error('TOKEN_NOT_FORMATTED');
    }

    const decoded = await this.jwt.decrypt(token);
    const user = await this.loadUserByIdRepository.loadById(decoded.id);

    return {
      id: user.userId,
      name: user.name,
    };
  }
}