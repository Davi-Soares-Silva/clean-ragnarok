import { HttpRequest, HttpResponse } from '../protocols/http';
import { Controller } from '../protocols/controller';
import { CreateGame } from '../../domain/usecases/create-game';
import { created, serverError } from '../../utils/response';
import { badRequest } from '../helpers/bad-request';

export class CreateGameController implements Controller {
  constructor(private readonly createGame: CreateGame) {}

  public async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {      
      const { name, description, price, platformId, imageUrl } = httpRequest.body;


      const game = await this.createGame.create({
        name,
        description,
        price,
        platformId,
        imageUrl,
      })

      return created('Jogo criado com sucesso', game)

    } catch (error) {
      switch (error.message) {
        case 'ERROR_CREATING_GAME':
          return badRequest(error)
        default:
          return serverError(error);
      }
    }
  }
}
