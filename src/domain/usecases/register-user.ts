import { UserModel } from "../models/user"

export interface RegisterUser {
  register(data: RegisterUser.Params): RegisterUser.Result;
}

export namespace RegisterUser {
  export type Params = {
    name: string;
    email: string;
    password: string;
    userTypeId: number;
  }

  export type Result = Promise<UserModel>
}