import { ListGameByIdRepository } from "@/data/protocols/db/list-game-by-id-repository";
import { ListGameById } from "@/domain/usecases/list-game-by-id";

export class DbListGameById implements ListGameById {
  constructor(
    private readonly listGameByIdRepository: ListGameByIdRepository
  ) {}

  async listById(gameId: ListGameById.Params): ListGameById.Result {
    const game = await this.listGameByIdRepository.listById(gameId);
    
    return game;
  }
}