import { GameModel } from "../../../domain/models/game";

export interface CheckGameByIdRepository {
  checkById(id: number): CheckGameByIdRepository.Result;
}

export namespace CheckGameByIdRepository {
  export type Result = Promise<GameModel>
}