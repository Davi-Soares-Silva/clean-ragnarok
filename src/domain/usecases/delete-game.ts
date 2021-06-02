export interface DeleteGame {
  delete: (data: DeleteGame.Params) => DeleteGame.Result;
}

export namespace DeleteGame {
  export type Params = number;

  export type Result = Promise<void>;
}