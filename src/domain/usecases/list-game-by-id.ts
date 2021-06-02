export interface ListGameById {
  listById: (id: number) => Promise<GameModel>;
}

export namespace ListGamebyId {
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
