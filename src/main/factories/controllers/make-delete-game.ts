import { DbDeleteGame } from "../../../data/usecases/db/db-delete-game";
import { GameRepository } from "../../../infra/db/mysql/game/game-repository";
import { DeleteGameControler } from "../../../presentation/controllers/delete-game";

export function makeDeleteGame() {
  const gameRepository = new GameRepository();
  const dbDeleteGame = new DbDeleteGame(gameRepository);

  return new DeleteGameControler(dbDeleteGame);
}