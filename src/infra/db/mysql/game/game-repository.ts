import { AddGameRepository } from "../../../../data/protocols/db/add-game-repository";
import { formateCamelCaseKeysForSnakeCase } from "../../../../utils/object/formatter";
import { mysql } from "../helpers/connection";

export class GameRepository implements AddGameRepository {
  public async add(data: AddGameRepository.Params): AddGameRepository.Result{
    const [gameId] = await mysql('tb_game').insert(formateCamelCaseKeysForSnakeCase(data));

    const createdGame = {
      gameId,
      ...data,
    }

    return formateCamelCaseKeysForSnakeCase(createdGame);
  }
}