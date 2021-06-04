export interface LoadUserById {
  loadById: (params: LoadUserById.Params) => LoadUserById.Result;
}

export namespace LoadUserById {
  export type Params = number;

  export type Result = Promise<{
    userId: number;
    name: string;
  }>
}