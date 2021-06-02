import { UpdateGame } from "../../domain/usecases/update-game";
import { ok, serverError } from "../../utils/response";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class UpdateGameController implements Controller {
  constructor(private readonly updateGame: UpdateGame) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      await this.updateGame.update({ id, game: { ...httpRequest.body } });

      return ok('Jogo atualizado com sucesso', {})
    } catch (error) {
      return serverError(error);
    }
  }
}