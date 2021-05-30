import { HttpRequest, HttpResponse } from '../protocols/http';
import { Controller } from '../protocols/controller';
import { DbCreateGame } from '../../data/usecases/db-create-game';
import { CreateGame } from '../../domain/usecases/create-game';

export class CreateGameController implements Controller {
  constructor(private readonly createGame: CreateGame) {}

  public async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log(httpRequest.body);
      
      const { name, description, price, platformId, imageUrl } = httpRequest.body;


      await this.createGame.create({
        name,
        description,
        price,
        platformId,
        imageUrl,
      })

      return {
        statusCode: 201,
        body: {
          message: 'Game criado com sucesso!'
        }
      }

    } catch (error) {
      console.log(error);

      return {
        statusCode: 500,
        body: {
          message: 'Erro ao criar game'
        }
      }
    }
  }
}
