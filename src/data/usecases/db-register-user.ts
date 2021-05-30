import { RegisterUser } from '../../domain/usecases/register-user';
import { AddUserRepository } from '../protocols/db/add-user-repository';

export class DbRegisterUser implements RegisterUser {
  constructor(
    private readonly addUserRepository: AddUserRepository
  ) {}

  public async register ({
    name,
    email,
    password,
    userTypeId,
  }: AddUserRepository.Params): AddUserRepository.Result {
    const user = await this.addUserRepository.add({
      name,
      email,
      password,
      userTypeId,
    });

    if(!user) throw new Error('ERROR_CREATING_USER');

    return user;
  }
}