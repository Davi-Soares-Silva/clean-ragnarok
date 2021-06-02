import { DbListGames } from "../../../data/usecases/db/db-list-games";
import { GameRepository } from "../../../infra/db/mysql/game/game-repository";
import { ListGamesController } from "../../../presentation/controllers/list-games";

export function makeListGamesController() {
  const gameRepository = new GameRepository();

  const dbListGames = new DbListGames(gameRepository);
  return new ListGamesController(dbListGames);
}