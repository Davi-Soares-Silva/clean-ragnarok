import { GameModel } from "@/domain/models/game";

export interface ListGameByIdRepository {
  listByid(id: number): Promise<GameModel>
}