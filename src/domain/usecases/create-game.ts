import { GameModel } from "../models/game";

export interface CreateGame {
  create(data: CreateGame.Params): CreateGame.Result;
}

export namespace CreateGame {
  export type Params = {
    name: string;
    description: string;
    price: number;
    platformId: string;
    imageUrl: string;
  }

  export type Result = Promise<GameModel>;
}