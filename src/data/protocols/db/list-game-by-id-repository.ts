import { GameModel } from "@/domain/models/game";

export interface ListGameByIdRepository {
  listById(id: number): ListGameByIdRepository.Result;
}

export namespace ListGameByIdRepository {
  export type Result = Promise<GameModel>
}