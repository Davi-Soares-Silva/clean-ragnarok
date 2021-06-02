import { UpdateGameController } from "../../../presentation/controllers/update-game";
import { GameRepository } from "../../../infra/db/mysql/game/game-repository"

export function makeUpdateGameController() {
  const gameRepository = new GameRepository();
  return new UpdateGameController(gameRepository);
}