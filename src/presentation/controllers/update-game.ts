import { makeError } from "../../utils";
import { UpdateGame } from "../../domain/usecases/update-game";
import { notFound, ok, serverError } from "../../utils/response";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class UpdateGameController implements Controller {
  constructor(private readonly updateGame: UpdateGame) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      await this.updateGame.update({ id, game: { ...httpRequest.body } });

      return ok('Jogo atualizado com sucesso', {})
    } catch (error) {
      switch(error.message) {
        case 'GAME_NOT_FOUND':
          return notFound(
            'Jogo não encontrado',
            makeError('Id', 'o Id inserido é inválido.')
          )
        default:
          return serverError(error);
      }
    }
  }
}