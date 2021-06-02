import { ListGamesRepository } from "@/data/protocols/db/list-games-repository";
import { AddGameRepository } from "../../../../data/protocols/db/add-game-repository";
import { formateCamelCaseKeysForSnakeCase, formateSnakeCaseKeysForCamelCase } from "../../../../utils/object/formatter";
import { mysql } from "../helpers/connection";

export class GameRepository implements AddGameRepository, ListGamesRepository {
  public async list(): ListGamesRepository.Result {
    const games = await mysql('tb_game')
      .select('*');

    return formateSnakeCaseKeysForCamelCase(games);
  }


  public async add(data: AddGameRepository.Params): AddGameRepository.Result{
    const [gameId] = await mysql('tb_game').insert(formateCamelCaseKeysForSnakeCase(data));

    const createdGame = {
      gameId,
      ...data,
    }

    return formateCamelCaseKeysForSnakeCase(createdGame);
  }
}