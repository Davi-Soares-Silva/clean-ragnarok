import { ListGameByIdRepository } from "@/data/protocols/db/list-game-by-id-repository";
import { ListGamesRepository } from "@/data/protocols/db/list-games-repository";
import { UpdateGameRepository } from "@/data/protocols/db/update-game";
import { AddGameRepository } from "../../../../data/protocols/db/add-game-repository";
import {
  formateCamelCaseKeysForSnakeCase,
  formateSnakeCaseKeysForCamelCase,
} from "../../../../utils/object/formatter";
import { mysql } from "../helpers/connection";

export class GameRepository implements
  AddGameRepository,
  ListGamesRepository,
  ListGameByIdRepository,
  UpdateGameRepository {
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
    
    const [gameId] = await mysql("tb_game").insert(formateCamelCaseKeysForSnakeCase(data));

    const createdGame = {
      gameId,
      ...data,
    };

    return formateSnakeCaseKeysForCamelCase(createdGame);
  }

  public async listById(gameId: number): ListGameByIdRepository.Result {
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

  public async update(data: UpdateGameRepository.Params): UpdateGameRepository.Result {

    const game = await mysql('tb_game')
      .update(data.game)
      .where('game_id', '=', data.id);

  }
}
