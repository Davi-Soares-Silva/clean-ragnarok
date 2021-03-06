export interface Authentication {
  auth: (data: Authentication.Params) => Authentication.Result;
}

export namespace Authentication {
  export type Params = {
    email: string;
    password: string;
  }

  export type Result = Promise<{
    accessToken: string;
    name: string;
  }>
}