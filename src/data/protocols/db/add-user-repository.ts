import { UserModel } from '../../../domain/models/user';

export interface AddUserRepository {
  add(data: AddUserRepository.Params): AddUserRepository.Result; 
}

export namespace AddUserRepository {
  export type Params = Omit<
    UserModel,
    'userId' |  'createdAt' | 'updatedAt' | 'deletedAt'
  >;

  export type Result = Promise<UserModel>;
}