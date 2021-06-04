import { CheckUserByEmailRepository } from "@/data/protocols/db/check-user-by-email-repository";
import { ListGameByIdRepository } from "@/data/protocols/db/list-game-by-id-repository";
import { LoadUserByEmailRepository } from "@/data/protocols/db/load-user-by-email-repository";
import { LoadUserByIdRepository } from "@/data/protocols/db/load-user-by-id-repository";
import { LoadUserById } from "@/domain/usecases/load-user-by-id";
import { AddUserRepository } from "../../../../data/protocols/db/add-user-repository";
import { formateCamelCaseKeysForSnakeCase, formateSnakeCaseKeysForCamelCase } from "../../../../utils/object/formatter";
import { mysql } from "../helpers/connection";

export class UserRepository implements 
  AddUserRepository,
  CheckUserByEmailRepository,
  LoadUserByEmailRepository,
  LoadUserById {
  
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

  public async loadUserByEmail(email: string) {
    const [user] = await mysql('tb_user')
      .select('user_id', 'name', 'email', 'password')
      .where('email', '=', email);

    return formateSnakeCaseKeysForCamelCase(user);
  } 

  public async loadById(userId: LoadUserByIdRepository.Params): LoadUserByEmailRepository.Result {
    const [user] = await mysql('tb_user')
      .select('user_id', 'name')
      .where('user_id', '=', userId);

    return formateSnakeCaseKeysForCamelCase(user);
  }
}