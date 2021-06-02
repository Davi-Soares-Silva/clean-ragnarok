export interface ListGameById {
  listById: (gameId: ListGameById.Params) => ListGameById.Result;
}

export namespace ListGameById {
  export type Params = number;

  export type Result = Promise<{
    gameId: number;
    name: string;
    description: string;
    price: number;
    platformId: number;
    imageUrl: string;
  }>
}
