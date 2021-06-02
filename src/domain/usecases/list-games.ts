import { GameModel } from "../models/game";

export interface ListGames {
  list: () => ListGames.Result;
}

export namespace ListGames {
  export type Result = Promise<GameModel[]>
}