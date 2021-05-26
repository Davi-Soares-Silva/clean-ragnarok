import { HttpRequest, HttpResponse } from '../protocols/http';
import { Controller } from '../protocols/controller';

export class CreateGameController implements Controller {
  handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return new Promise(resolve => resolve({
      statusCode: 200,
      body: {}
    }))
  }
}
