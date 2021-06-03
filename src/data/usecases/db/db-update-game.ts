import { CheckGameByIdRepository } from "@/data/protocols/db/check-game-by-id-repository";
import { UpdateGameRepository } from "@/data/protocols/db/update-game";
import { UpdateGame } from "@/domain/usecases/update-game";

export class DbUpdateGame implements UpdateGame {
  constructor(
    private readonly updateGameRepository: UpdateGameRepository,
    private readonly checkGameByIdRepository: CheckGameByIdRepository,
  ) {}

  async update(data: UpdateGame.Params): UpdateGame.Result {

    const game = await this.checkGameByIdRepository.checkById(data.id);
    if(!game) throw new Error('GAME_NOT_FOUND');

    await this.updateGameRepository.update(data);
  }
}