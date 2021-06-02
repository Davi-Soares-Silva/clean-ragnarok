import { ListGames } from "../../domain/usecases/list-games";
import { ok, serverError } from "../../utils/response";
import { HttpRequest, HttpResponse, Controller } from "../protocols";

export class ListGamesController implements Controller {
  constructor(private readonly listGames: ListGames) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const games = await this.listGames.list();

      return ok('Consulta realizada com sucesso', games)
    } catch (error) {
      console.log(error);
      return serverError(error);      
    }
  }
}