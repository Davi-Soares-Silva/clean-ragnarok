import { CheckUserByEmailRepository } from "@/data/protocols/db/check-user-by-email-repository";
import { AddUserRepository } from "../../../../data/protocols/db/add-user-repository";
import { formateCamelCaseKeysForSnakeCase } from "../../../../utils/object/formatter";
import { mysql } from "../helpers/connection";

export class UserRepository implements AddUserRepository, CheckUserByEmailRepository {
  public async add(data: AddUserRepository.Params): AddUserRepository.Result{
    const [userId] = await mysql('tb_user').insert(formateCamelCaseKeysForSnakeCase(data));

    const createdUser = {
      userId,
      ...data,
    }

    return formateCamelCaseKeysForSnakeCase(createdUser);
  }

  public async checkByEmail(email: string): Promise<boolean> {

    const user = await mysql('tb_user').select('*').where('email', email);

    return user.length > 0
  }
}