import { DeleteGame } from "../../domain/usecases/delete-game";
import { ok, serverError } from "../../utils/response";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class DeleteGameControler implements Controller {
  constructor(
    private readonly deleteGame: DeleteGame,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      await this.deleteGame.delete(id);

      return ok('Jogo deletado com sucesso!', {});
    } catch(error) {
      console.log(error);
      return serverError(error);
    }
  }
}