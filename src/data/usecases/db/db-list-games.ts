import { ListGamesRepository } from "@/data/protocols/db/list-games-repository";
import { ListGames } from "@/domain/usecases/list-games";

export class DbListGames implements ListGames {
  constructor(private readonly listGamesRepository: ListGamesRepository) {}

  async list(): ListGames.Result {
    const games = await this.listGamesRepository.list();

    return games;
  }
}