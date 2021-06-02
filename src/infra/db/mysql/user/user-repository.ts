import { CheckUserByEmailRepository } from "@/data/protocols/db/check-user-by-email-repository";
import { LoadUserByEmailRepository } from "@/data/protocols/db/load-user-by-email-repository";
import { AddUserRepository } from "../../../../data/protocols/db/add-user-repository";
import { formateCamelCaseKeysForSnakeCase, formateSnakeCaseKeysForCamelCase } from "../../../../utils/object/formatter";
import { mysql } from "../helpers/connection";

export class UserRepository implements AddUserRepository, CheckUserByEmailRepository, LoadUserByEmailRepository {
  
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

  async loadUserByEmail(email: string) {
    const [user] = await mysql('tb_user')
      .select('user_id', 'name', 'email', 'password')
      .where('email', '=', email);

    return formateSnakeCaseKeysForCamelCase(user);
  } 
}