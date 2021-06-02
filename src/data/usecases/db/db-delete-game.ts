import { DeleteGameRepository } from "@/data/protocols/db/db-delete-game";
import { DeleteGame } from "@/domain/usecases/delete-game";

export class DbDeleteGame implements DeleteGame{
  constructor(
    private readonly deleteGameRepository: DeleteGameRepository,
  ) {}

  async delete(id: DeleteGame.Params): DeleteGame.Result {
    await this.deleteGameRepository.delete(id);
  }

}