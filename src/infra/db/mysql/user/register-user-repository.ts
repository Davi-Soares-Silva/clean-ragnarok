import { AddUserRepository } from "../../../../data/protocols/db/add-user-repository";
import { formateCamelCaseKeysForSnakeCase } from "../../../../utils/object/formatter";
import { mysql } from "../helpers/connection";

export class UserRepository implements AddUserRepository {
  public async add(data: AddUserRepository.Params): AddUserRepository.Result{
    const [userId] = await mysql('tb_user').insert(formateCamelCaseKeysForSnakeCase(data));

    const createdUser = {
      userId,
      ...data,
    }

    return formateCamelCaseKeysForSnakeCase(createdUser);
  }
}