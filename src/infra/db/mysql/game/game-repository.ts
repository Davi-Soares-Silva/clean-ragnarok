import { ListGameByIdRepository } from "@/data/protocols/db/list-game-by-id-repository";
import { ListGamesRepository } from "@/data/protocols/db/list-games-repository";
import { AddGameRepository } from "../../../../data/protocols/db/add-game-repository";
import {
  formateSnakeCaseKeysForCamelCase,
} from "../../../../utils/object/formatter";
import { mysql } from "../helpers/connection";

export class GameRepository implements AddGameRepository, ListGamesRepository, ListGameByIdRepository {
  public async list(): ListGamesRepository.Result {
    const games = await mysql('tb_game as g')
      .select(
        'g.game_id',
        'g.name',
        'g.description',
        'g.price',
        'g.image_url',
        'p.name as platform'
      )
      .innerJoin("tb_platform as p", "p.platform_id", "g.platform_id");

    return formateSnakeCaseKeysForCamelCase(games);
  }

  public async add(data: AddGameRepository.Params): AddGameRepository.Result {
    const [gameId] = await mysql("tb_game").insert(data);

    const createdGame = {
      gameId,
      ...data,
    };

    return formateSnakeCaseKeysForCamelCase(createdGame);
  }

  async listById(gameId: number): ListGameByIdRepository.Result {
    const [game] = await mysql('tb_game as g')
      .select(
        'g.game_id',
        'g.name',
        'g.description',
        'g.price',
        'g.image_url',
        'p.name as platform'
      )
      .innerJoin('tb_platform as p', 'p.platform_id', 'g.platform_id')
      .where('game_id', gameId);

    return formateSnakeCaseKeysForCamelCase(game);
  }
}
