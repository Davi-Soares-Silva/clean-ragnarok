import { MissingParamError } from '../errors/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class CreateGameController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }

    if (!httpRequest.body.price) {
      return {
        statusCode: 400,
        body: new MissingParamError('price')
      }
    }

    return {
      statusCode: 200,
      body: null
    }
  }
}
