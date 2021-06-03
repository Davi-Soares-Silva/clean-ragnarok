import { DeleteGameRepository } from "@/data/protocols/db/delete-game";
import { CheckGameByIdRepository } from "@/data/protocols/db/check-game-by-id-repository";
import { DeleteGame } from "@/domain/usecases/delete-game";

export class DbDeleteGame implements DeleteGame{
  constructor(
    private readonly deleteGameRepository: DeleteGameRepository,
    private readonly checkGameByIdRepository: CheckGameByIdRepository,
  ) {}

  async delete(id: DeleteGame.Params): DeleteGame.Result {
    const game = await this.checkGameByIdRepository.checkById(id);

    if(!game) throw new Error('GAME_NOT_FOUND');

    await this.deleteGameRepository.delete(id);
  }

}