import { HashComparer } from "@/data/protocols/cryptography/hash-comparer";
import { LoadUserByEmailRepository } from "@/data/protocols/db/load-user-by-email-repository";
import { Authentication } from "@/domain/usecases/authentication";

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository,
    private readonly hashComparer: HashComparer, 
  ) {}
  async auth (data: Authentication.Params): Authentication.Result {

    const { email, password } = data;

    const user = await this.loadUserByEmailRepository.loadUserByEmail(email);  
    if(!user) throw new Error('USER_NOT_FOUND')

    const isValid = await this.hashComparer.compare(password, user.password);
    if(!isValid) throw new Error('WRONG PASSWORD');


    return {
      accessToken: 'token',
      name: user,
    }
  }
}
