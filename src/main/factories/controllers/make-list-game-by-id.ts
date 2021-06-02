import { GameRepository } from '../../../infra/db/mysql/game/game-repository';
import { ListGameByIdController } from '../../../presentation/controllers/list-games-by-id';

export function makeListGameByIdController() {
  const gameRepository = new GameRepository();
  return new ListGameByIdController(gameRepository);
}