import { RegisterUser } from '../../../domain/usecases/register-user';
import { Hasher } from '../../protocols/cryptography/hasher';
import { AddUserRepository } from '../../protocols/db/add-user-repository';
import { CheckUserByEmailRepository } from '../../protocols/db/check-user-by-email-repository';

export class DbRegisterUser implements RegisterUser {
  constructor(
    private readonly hasher: Hasher,
    private readonly addUserRepository: AddUserRepository,
    private readonly checkUserByEmailRepository: CheckUserByEmailRepository
  ) {}

  public async register (data: AddUserRepository.Params): AddUserRepository.Result {

    const userExists = await this.checkUserByEmailRepository.checkByEmail(data.email);

    if(userExists) throw new Error('EMAIL_ALREADY_EXISTS')

    const hashedPassword = await this.hasher.hash(data.password);

    const user = await this.addUserRepository.add({
      ...data,
      password: hashedPassword,
    });

    if(!user) throw new Error('ERROR_CREATING_USER');

    return user;
  }
}