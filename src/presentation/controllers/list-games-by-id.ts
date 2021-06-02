import { ListGameById } from "../../domain/usecases/list-game-by-id";
import { ok, serverError } from "../../utils/response";
import { HttpRequest, HttpResponse, Controller } from "../protocols";

export class ListGameByIdController implements Controller {
  constructor (
    private readonly listGameById: ListGameById
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
  
      const game = await this.listGameById.listById(id);
  
      return ok('Consulta realizada com sucesso!', game);
    } catch(error) {
      return serverError(error);
    }
  }
}