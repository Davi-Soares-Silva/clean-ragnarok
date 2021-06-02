import { GameModel } from "../../../domain/models/game";

export interface ListGamesRepository {
  list(): ListGamesRepository.Result;
}

export namespace ListGamesRepository {
  export type Result = Promise<GameModel[]>
}