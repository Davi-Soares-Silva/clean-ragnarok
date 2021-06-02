import { UpdateGameRepository } from "@/data/protocols/db/update-game";
import { UpdateGame } from "@/domain/usecases/update-game";

export class DbUpdateGame implements UpdateGame {
  constructor(
    private readonly updateGameRepository: UpdateGameRepository
  ) {}

  async update(data: UpdateGame.Params): UpdateGame.Result {
    await this.updateGameRepository.update(data);
  }
}