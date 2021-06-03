import { DbListGameById } from '../../../data/usecases/db/db-list-game-by-id';
import { GameRepository } from '../../../infra/db/mysql/game/game-repository';
import { ListGameByIdController } from '../../../presentation/controllers/list-game-by-id';

export function makeListGameByIdController() {
  const gameRepository = new GameRepository();
  const dbListGameById = new DbListGameById(gameRepository);

  return new ListGameByIdController(dbListGameById);
}