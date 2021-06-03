import { UpdateGameController } from "../../../presentation/controllers/update-game";
import { GameRepository } from "../../../infra/db/mysql/game/game-repository"
import { DbUpdateGame } from "../../../data/usecases/db/db-update-game";

export function makeUpdateGameController() {
  const gameRepository = new GameRepository();
  const dbUpdateGame = new DbUpdateGame(gameRepository, gameRepository);
  return new UpdateGameController(dbUpdateGame);
}