import { DbCreateGame } from "../../data/usecases/db-create-game";
import { GameRepository } from "../../infra/db/mysql/game/game-repository";
import { CreateGameController } from "../../presentation/controllers/create-game";


export function makeCreateGameController() {
  const gameRepository = new GameRepository();

  const dbCreateGame = new DbCreateGame(gameRepository);

  return new CreateGameController(dbCreateGame);
};