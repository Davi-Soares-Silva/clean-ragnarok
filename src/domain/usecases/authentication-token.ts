export interface AuthenticationToken {
  auth: (params: AuthenticationToken.Params) => AuthenticationToken.Result;
}

export namespace AuthenticationToken {
  export type Params = {
    accessToken: string;
  }

  export type Result = Promise<{
    id: number;
    name: string;
  }>
}